import React, { useState } from 'react';
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

  const hideHandler = () => {
    setHide(!hide);
  }
  
  return (
    <Container currentTheme={themes ? Themes.dark : Themes.light}>
      <Section currentTheme={themes ? Themes.dark : Themes.light}>
        <h1 className="title-h1" >To do List</h1>
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
