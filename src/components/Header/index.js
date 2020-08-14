import React from 'react';

import './styles.css'
function Header({handleRandomQuote}) {
  return (
    <header>
      <button onClick={handleRandomQuote}>random</button>
    </header>
  );
}

export default Header;