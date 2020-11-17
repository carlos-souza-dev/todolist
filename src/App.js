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

  const [ inputText, setInputText ] = useState('');
  const [ todos, setTodos ] = useState([]);
  const [ dones, setDones ] = useState([]);

  return (
    <Container>
      <Section>
        <h1>To do List</h1>
        <Bar/>
        <Input setTodos={setTodos} todos={todos} setInputText={setInputText} inputText={inputText} />
        <TodoList todos={todos.length !== 0 ? todos : null}/>
      </Section>
      <SectionDone>
      <h1>Concluído</h1>
        <TodoList todos={dones}/>
      </SectionDone>
    </Container>
  );
}

export default App;
