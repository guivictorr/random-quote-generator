import React from 'react';

import './styles.css'

function Quote({ text }) {
  return (
    <article className="quoteContainer">
      <p>{text}</p>
    </article>
  );
}

export default Quote;