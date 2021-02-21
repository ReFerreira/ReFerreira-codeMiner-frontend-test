import React from 'react';
import Cart from './components/Cart';
import Home from './components/Home';
import Header from './components/Header';
import GlobalStyle from './styles/global';

import { Container } from './styles';

function src() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Home />
        <Cart />
      </Container>
    </>
  );
}

export default src;
