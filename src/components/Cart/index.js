/* eslint-disable arrow-body-style */
import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

import {
  Container,
  ProductContainer,
  ProductDiv,
  ProductDetails,
  HeaderContainer,
  ContainerButton,
  AccountingContainer,
  AccountingDetails,
  DiscountContainer,
  CheckoutContainer,
} from './styles';

const Cart = () => {
  return (
    <Container>
      <HeaderContainer>Shopping Cart</HeaderContainer>
      <ProductContainer>
        <ProductDiv>
          <img
            src="https://imgcentauro-a.akamaihd.net/900x900/92344102/tenis-new-balance-ml501-masculino-img.jpg"
            alt="Tênis"
          />

          <ProductDetails>
            <strong>Product name</strong>
            <div>
              <span>Quantity: 4</span>
              <span>R$123,45</span>
            </div>
          </ProductDetails>
          <ContainerButton>
            <button
              type="button"
              style={{
                borderRadius: '4px 4px 0 0',
                borderBottom: '1px solid #fff',
              }}
            >
              <MdAddCircleOutline size={20} />
            </button>
            <button type="button" style={{ borderRadius: '0 0 4px 4px' }}>
              <MdRemoveCircleOutline size={20} />
            </button>
          </ContainerButton>
        </ProductDiv>
        <ProductDiv>
          <img
            src="https://imgcentauro-a.akamaihd.net/900x900/92344102/tenis-new-balance-ml501-masculino-img.jpg"
            alt="Tênis"
          />

          <ProductDetails>
            <strong>Product name</strong>
            <div>
              <span>Quantity: 4</span>
              <span>R$123,45</span>
            </div>
          </ProductDetails>
          <ContainerButton>
            <button
              type="button"
              style={{
                borderRadius: '4px 4px 0 0',
                borderBottom: '1px solid #fff',
              }}
            >
              <MdAddCircleOutline size={20} />
            </button>
            <button type="button" style={{ borderRadius: '0 0 4px 4px' }}>
              <MdRemoveCircleOutline size={20} />
            </button>
          </ContainerButton>
        </ProductDiv>
        <ProductDiv>
          <img
            src="https://imgcentauro-a.akamaihd.net/900x900/92344102/tenis-new-balance-ml501-masculino-img.jpg"
            alt="Tênis"
          />

          <ProductDetails>
            <strong>Product name</strong>
            <div>
              <span>Quantity: 4</span>
              <span>R$123,45</span>
            </div>
          </ProductDetails>

          <ContainerButton>
            <button
              type="button"
              style={{
                borderRadius: '4px 4px 0 0',
                borderBottom: '1px solid #fff',
              }}
            >
              <MdAddCircleOutline size={20} />
            </button>
            <button type="button" style={{ borderRadius: '0 0 4px 4px' }}>
              <MdRemoveCircleOutline size={20} />
            </button>
          </ContainerButton>
        </ProductDiv>
      </ProductContainer>
      <AccountingContainer>
        <DiscountContainer>
          <input placeholder="Discount code" />
          <button type="button">APPLY</button>
        </DiscountContainer>
        <AccountingDetails>
          <span>Subtotal</span>
          <span>$234,00</span>
        </AccountingDetails>
        <AccountingDetails>
          <span>Shipping</span>
          <span>$10,00</span>
        </AccountingDetails>
        <AccountingDetails>
          <span>Discount</span>
          <span>$1,00</span>
        </AccountingDetails>
        <AccountingDetails bold>
          <span>Total</span>
          <span>$243,00</span>
        </AccountingDetails>
      </AccountingContainer>
      <CheckoutContainer>
        <button type="button">CHECKOUT</button>
      </CheckoutContainer>
    </Container>
  );
};

export default Cart;
