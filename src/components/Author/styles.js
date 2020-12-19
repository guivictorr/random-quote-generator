import styled from 'styled-components';

export const ButtonText = styled.div`
  display:flex;
  flex-direction:column;
  align-items: flex-start;
  margin: 0 40px;
`
export const AuthorName = styled.p`
  color: #4F4F4F;
  font-size: 24px;
  font-weight: bold;
  font-family: Raleway;
`

export const AuthorButton = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items:center;
  width: 670px;
  height: 150px;
  background: transparent;
  border: none;
  transition: all 0.2s;
  margin-top: 80px;
  &:hover {
    background: #333333;
    p${AuthorName}{
      color: #F2F2F2;
    }
  }
`

export const QuoteGenre = styled.p`
  color: #828282;
  font-size: 14px;
  font-family: Raleway;
  margin-top: 10px;
`
