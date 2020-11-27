import React, { useState, useEffect } from 'react';
import Themes from './styles/themes/index';
// Style
import { Container, SectionDone } from './components/Section/style';

// Components
import Section from './components/Section';
import Input from './components/Input';
import Bar from './components/Bar';
import TodoList from './components/TodoList';

function App() {

  const [ themes, setThemes ] = useState(false);
  const [ list, setList ] = useState([]);
  const [ inputText, setInputText ] = useState('');
  const [ edit, setEdit ] = useState([]);
  const [ hide, setHide ] = useState(false);
  
  // App start run once
  useEffect(() => {
    getLocalList();
    getLocalThemeHide();
  },[]);
   
  useEffect(() => {
    
    localStorage.setItem("list", JSON.stringify(list))
    localStorage.setItem("theme", themes);
    localStorage.setItem('hide', hide)

  },[list, themes, hide])
  

  const getLocalList = () => {
    if(localStorage.getItem("list") === null){
      localStorage.setItem("list", JSON.stringify([])) 
    } else {
      let localList = JSON.parse(localStorage.getItem("list"));
      setList(localList)
    }
  }

  const getLocalThemeHide = () => {
    if(localStorage.getItem("theme") === null) {
      setThemes(false);
    } else {
      setThemes(JSON.parse(localStorage.getItem("theme")));
    }

    if(localStorage.getItem("hide") === null){
      setHide(false);
    } else {
      setHide(JSON.parse(localStorage.getItem("hide")));
    }
  }

  const hideHandler = () => {
    setHide(!hide);
  }
  
  const height = list.filter((element) => element.done === true).length;

  return (
    <Container hide={hide} currentTheme={themes ? Themes.dark : Themes.light}>
      <Section currentTheme={themes ? Themes.dark : Themes.light}>
        <h1 className="title-h1" >To Do List</h1>
        <Bar arrayThemes={Themes} themes={themes} setThemes={setThemes} currentTheme={themes ? Themes.dark : Themes.light} list={list}/>
        <Input currentTheme={themes ? Themes.dark : Themes.light} setList={setList} list={list} setInputText={setInputText} inputText={inputText} edit={edit} setEdit={setEdit}/>
        <TodoList currentTheme={themes ? Themes.dark : Themes.light} list={list} setList={setList} todos={list.length !== 0 ? list.filter((element) => element.done === false) : null} setEdit={setEdit}/>
      </Section>
      <span onClick={hideHandler} className="btn-hide" >{hide ? "Mostrar" : "Ocultar" }</span>
      <SectionDone heightValue={height > 0 ? height * 100 + "px" : "0px"} currentTheme={themes ? Themes.dark : Themes.light} hide={hide} className={hide ? "done-hide" : ""}>
      <h1 className="title-h1">Concluído</h1>
        <TodoList currentTheme={themes ? Themes.dark : Themes.light} list={list} setList={setList} todos={list.length !== 0 ? list.filter((element) => element.done === true)  : null} />
      </SectionDone>
    </Container>
  );
}

export default App;
