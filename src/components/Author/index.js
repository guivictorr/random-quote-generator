import React from 'react';

import { AuthorButton ,AuthorName, QuoteGenre, ButtonText } from './styles';

function Author({ authorName, genre }) {
  return (
    <AuthorButton to={authorName}>
      <ButtonText>
        <AuthorName>{authorName}</AuthorName>
        <QuoteGenre>{genre}</QuoteGenre>
      </ButtonText>
    </AuthorButton>
  );
}

export default Author;