import React, { useEffect, useState } from 'react';
// import Themes from './styles/themes/index';
// Style
import { Container, SectionDone } from './components/Section/style';

// Components
import Section from './components/Section';
import Input from './components/Input';
import Content from './components/Content';
import Bar from './components/Bar';

function App() {

  const [ doing, setDoing ] = useState([]);

  const getDoing = () => {
    setDoing([
      ...doing, {done: false, text: "testando", id:doing.length}
    ])
  }

  return (
    <Container>
      <Section>
        <h1>To do List</h1>
        <Bar/>
        <Input getDoing={getDoing}/>
        <Content/>
        <Content/>
      </Section>
      <SectionDone>
      <h1>Concluído</h1>
        <Content/>
      </SectionDone>
    </Container>
  );
}

export default App;
