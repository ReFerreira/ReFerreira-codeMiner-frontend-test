import React from 'react';
import Cart from './components/Cart';
import Home from './components/Home';
import GlobalStyle from './styles/global';

import { Container } from './styles';

function src() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Home />
        <Cart />
      </Container>
    </>
  );
}

export default src;
