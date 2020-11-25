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

  // App start run once
  useEffect(() => {
    getLocalList();
    getLocalThemeHide();
  },[]);

  const [ themes, setThemes ] = useState(false);
  const [ list, setList ] = useState([]);
  const [ inputText, setInputText ] = useState('');
  const [ edit, setEdit ] = useState([]);
  const [ hide, setHide ] = useState(false);
  
   
  useEffect(() => {
    const saveLocalList = () => {
        localStorage.setItem("list", JSON.stringify(list))
    }

    const saveLocalTheme = () => {
      localStorage.setItem('theme-hide', JSON.stringify({theme: themes, hide: hide}))
    }

    saveLocalList();
    saveLocalTheme();
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
    if(JSON.parse(localStorage.getItem("theme-hide")).theme){
      setThemes(true);
    }

    if(JSON.parse(localStorage.getItem("theme-hide")).hide){
      setHide(true);
    }
  }

  const hideHandler = () => {
    setHide(!hide);
  }
  
  return (
    <Container currentTheme={themes ? Themes.dark : Themes.light}>
      <Section currentTheme={themes ? Themes.dark : Themes.light}>
        <h1 className="title-h1" >To Do List</h1>
        <Bar arrayThemes={Themes} themes={themes} setThemes={setThemes} currentTheme={themes ? Themes.dark : Themes.light} list={list}/>
        <Input currentTheme={themes ? Themes.dark : Themes.light} setList={setList} list={list} setInputText={setInputText} inputText={inputText} edit={edit} setEdit={setEdit}/>
        <TodoList currentTheme={themes ? Themes.dark : Themes.light} list={list} setList={setList} todos={list.length !== 0 ? list.filter((element) => element.done === false) : null} setEdit={setEdit}/>
      </Section>
      <span onClick={hideHandler} className={`btn-hide ${hide ? "active-hide" : ""}`}>Ocultar</span>
      <SectionDone currentTheme={themes ? Themes.dark : Themes.light} hide={hide}>
      <h1 className="title-h1">Concluído</h1>
        <TodoList currentTheme={themes ? Themes.dark : Themes.light} list={list} setList={setList} todos={list.length !== 0 ? list.filter((element) => element.done === true)  : null} />
      </SectionDone>
    </Container>
  );
}

export default App;
