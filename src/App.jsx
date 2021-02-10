import './App.css';
import React from 'react';
import Film from './components/Films/Film';
import getFilms from './getFilms';

export default function App() {
  return (
    <div className="app">
      {getFilms().map((item) => (<Film key={item.id} film={item} />))}
    </div>
  );
}
