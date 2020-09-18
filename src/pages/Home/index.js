import React, { useState, useEffect } from 'react';

import { Container, Main} from './styles';

import Header from '../../components/Header';
import Quote from '../../components/Quote';
import Footer from '../../components/Footer';
import Author from '../../components/Author';

import api from '../../services/api';

function Home() {
  const [randomQuote, setRandomQuote] = useState({});

  async function handleRandomQuote() {
    const response = await api.get('quotes/random')
    const data = await response.data.quote
    setRandomQuote(data)
  }

  useEffect(() => {
    handleRandomQuote()
  }, [])

  return (
    <Container>
      <Header buttonFunction={handleRandomQuote}/>
        <Main>
          <Quote text={randomQuote.quoteText}/>
            <Author 
              authorName={randomQuote.quoteAuthor} 
              genre={randomQuote.quoteGenre}
            />
        </Main>
      <Footer/>
    </Container>
  );
}

export default Home;