import React from 'react';

import { QuoteContainer, QuoteText, QuoteAuthor } from './styles';

function Quote({ text }) {
  return (
      <QuoteContainer>
        <QuoteText>{text}</QuoteText>
      </QuoteContainer>
  );
}

export default Quote;