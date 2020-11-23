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
  const [ currentTheme, setCurrentTheme ] = useState(Themes.light);
  const [ list, setList ] = useState([]);
  const [ inputText, setInputText ] = useState('');
  const [ edit, setEdit ] = useState([]);
  const [ hide, setHide ] = useState(false);

  const hideHandler = () => {
    setHide(!hide);
  }
  
  return (
    <Container currentTheme={currentTheme}>
      <Section currentTheme={currentTheme}>
        <h1 className="title-h1" >To do List</h1>
        <Bar arrayThemes={Themes} setCurrentTheme={setCurrentTheme} themes={themes} setThemes={setThemes} currentTheme={currentTheme} list={list}/>
        <Input currentTheme={currentTheme} setList={setList} list={list} setInputText={setInputText} inputText={inputText} edit={edit} setEdit={setEdit}/>
        <TodoList currentTheme={currentTheme} list={list} setList={setList} todos={list.length !== 0 ? list.filter((element) => element.done === false) : null} setEdit={setEdit}/>
      </Section>
      <span onClick={hideHandler} className={`btn-hide ${hide ? "active-hide" : ""}`}>Ocultar</span>
      <SectionDone currentTheme={currentTheme} hide={hide}>
      <h1 className="title-h1">Concluído</h1>
        <TodoList currentTheme={currentTheme} list={list} setList={setList} todos={list.length !== 0 ? list.filter((element) => element.done === true)  : null} />
      </SectionDone>
    </Container>
  );
}

export default App;
