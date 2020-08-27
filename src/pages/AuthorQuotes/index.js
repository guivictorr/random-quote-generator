import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Container, QuotesList, QuoteItem, QuoteAuthor } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Quote from '../../components/Quote';
import api from '../../services/api';
import Loading from '../../components/Loading';

function AuthorQuotes() {
  const [authorQuotes, setAuthorQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const { authorname } = useParams();
  const { goBack } = useHistory();

  function handleGoBack(){
    goBack();
  }

  async function handleAuthorQuotes(){
    setIsLoading(true)
    await api.get(`/authors/${authorname}?page=1&limit=6`)
    .then(response => {
      const data = response.data.quotes
      setAuthorQuotes(data)
    })
    setIsLoading(false)
  }

  function RenderPage(){
    return(
      <>
      <Header buttonFunction={handleGoBack}/>
      <QuotesList>
      <QuoteAuthor>{authorname}</QuoteAuthor>
        {authorQuotes.map(item => (
          <QuoteItem key={item._id}>
            <Quote authorName={item.quoteAuthor} text={item.quoteText}/>
          </QuoteItem>
        ))}
      </QuotesList>
      <Footer/>
      </>
    )
  }

  useEffect(() => {
    handleAuthorQuotes();
  }, [])

  return (
    <Container>
      {isLoading ? <Loading/> : <RenderPage/>}
    </Container>
  );
}

export default AuthorQuotes;