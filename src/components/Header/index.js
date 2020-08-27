import React from 'react';

import { HeaderContainer, Button, Text, Img } from './styles';

import refreshIcon from '../../assets/images/refresh.svg'

function Header({buttonFunction}) {
  return (
    <HeaderContainer>
      <Button onClick={buttonFunction}>
        <Text>random</Text>
        <Img src={refreshIcon} alt="Nova Frase"/>
      </Button>
    </HeaderContainer>
  );
}

export default Header;