import React, { useEffect, useState } from 'react';
// import Themes from './styles/themes/index';
// Style
import { Container, SectionDone } from './components/Section/style';

// Components
import Section from './components/Section';
import Input from './components/Input';
import Bar from './components/Bar';
import TodoList from './components/TodoList';

function App() {

  const [ list, setList ] = useState([]);
  const [ inputText, setInputText ] = useState('');
  const [ edit, setEdit ] = useState([]);

  return (
    <Container>
      <Section>
        <h1>To do List</h1>
        <Bar list={list}/>
        <Input setList={setList} list={list} setInputText={setInputText} inputText={inputText} edit={edit} setEdit={setEdit}/>
        <TodoList list={list} setList={setList} todos={list.length !== 0 ? list.filter((element) => element.done === false) : null} setEdit={setEdit}/>
      </Section>
      <SectionDone>
      <h1>Concluído</h1>
        <TodoList list={list} setList={setList} todos={list.length !== 0 ? list.filter((element) => element.done === true)  : null} />
      </SectionDone>
    </Container>
  );
}

export default App;
