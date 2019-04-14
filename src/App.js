import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import surf from './images/c700x420.jpg';

ReactDOM.render(
    <h1>Hello, world! <img src={surf} /></h1>,
    document.getElementById('root')
);