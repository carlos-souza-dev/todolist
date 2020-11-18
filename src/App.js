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

  useEffect(() => {

    setTodos(list.filter((element) => element.done === false));    
    setDones(list.filter((element) => element.done === true));    
   
  }, [list])

  const [ inputText, setInputText ] = useState('');
  const [ todos, setTodos ] = useState([]);
  const [ dones, setDones ] = useState([]);

  return (
    <Container>
      <Section>
        <h1>To do List</h1>
        <Bar/>
        <Input setList={setList} list={list} setInputText={setInputText} inputText={inputText} />
        <TodoList setTodos={setTodos} setList={setList} list={list} todos={todos.length !== 0 ? todos : null}/>
      </Section>
      <SectionDone>
      <h1>Concluído</h1>
        <TodoList setDones={setDones} todos={dones} dones={dones} />
      </SectionDone>
    </Container>
  );
}

export default App;
