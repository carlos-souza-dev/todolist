import React from 'react';

// Style
import { Container, ContentS, CheckS, TrashS } from './style';

const Content = ({ text }) => {
    return (
        <Container>
            <CheckS><i className="fa fa-check"></i></CheckS>
            <ContentS>{text}</ContentS>
            <TrashS><i className="fa fa-trash"></i></TrashS>
        </Container>
    );
};

export default Content;