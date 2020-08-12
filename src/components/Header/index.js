import React from 'react';

import './styles.css'
import api from '../../services/api';

function Header({ setRandomQuote }) {

  function handleNewRandomQuote() {
    api.get('/quotes/random').then(response => {
      const quote = response.data.quote
      setRandomQuote(quote)
    })
  }

  return (
    <header>
      <button onClick={handleNewRandomQuote}>random</button>
    </header>
  );
}

export default Header;