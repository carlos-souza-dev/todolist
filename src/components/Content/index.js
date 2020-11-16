import React from 'react';

// Components
import Check from '../Buttons/Check';
import Trash from '../Buttons/Trash';
import Wrapper from '../Wrapper';

// Style
import { ContentS } from './style';

const Content = () => {
    return (
        <Wrapper>
            <Check/>
            <ContentS>Criar Componente Adicionar</ContentS>
            <Trash/>
        </Wrapper>
    );
};

export default Content;