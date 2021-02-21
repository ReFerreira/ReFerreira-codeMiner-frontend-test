/* eslint-disable arrow-body-style */
import React from 'react';

import { Container, ProductDiv, ProductDetails } from './styles';

const Cart = () => {
  return (
    <Container>
      <ProductDiv>
        <img
          src="https://imgcentauro-a.akamaihd.net/900x900/92344102/tenis-new-balance-ml501-masculino-img.jpg"
          alt="Tênis"
        />

        <ProductDetails>
          <strong>Product name</strong>
          <ProductDetails>
            <span>Quantity: 4</span>
            <span>R$123,45</span>
          </ProductDetails>
        </ProductDetails>
      </ProductDiv>
    </Container>
  );
};

export default Cart;
