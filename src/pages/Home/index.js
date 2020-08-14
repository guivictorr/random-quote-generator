import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Quote from '../../components/Quote';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import api from '../../services/api'
import './styles.css'

function Home() {

  const [randomQuote, setRandomQuote] = useState([])

  useEffect(() => {
    api.get('/quotes/random').then(response => {
      const quote = response.data.quote
      setRandomQuote(quote)
    })
  }, [])

  return (
    <div className="container">
        <Header setRandomQuote={setRandomQuote}/>
      <div className="content">
        <Quote text={randomQuote.quoteText}/>
        <Link to={randomQuote.quoteAuthor} className="authorContainer">
          <strong>{randomQuote.quoteAuthor}</strong>
          <p>{randomQuote.quoteGenre}</p>
        </Link>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
