import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import Quote from '../../components/Quote';
import Footer from '../../components/Footer';

import './styles.css'

function Author(props) {
  const [authorQuotes, setAuthorQuotes] = useState([])

  const authorName = props.match.params.authorname

  useEffect(() => {
    api.get(`/authors/${authorName}?page=1&limit=10`).then(response => {
      const quotes = response.data.quotes
      setAuthorQuotes([...quotes])
    })
  })

  return (
    <div className="authorQuotesContainer">
      <Header/>

      <div className="authorQuotesContent">
        <h1>{authorName}</h1>
        <ul>
          {authorQuotes.map(quote => {
            return (
              <li key={quote._id}>
                <Quote text={quote.quoteText}/>
              </li>
            )
          })}
        </ul>
      </div>

      <Footer/>
    </div>
  );
}

export default Author;