import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  max-width: 100%;
  border-radius: 4px;
  max-height: 100vh;
`;
export const ProductContainer = styled.div`
  max-height: 45%;
  overflow: auto;
`;
export const ProductDiv = styled.div`
  display: flex;
  margin: 20px 20px 0px 20px;
  border: 1px solid #999;
  border-radius: 4px;

  img {
    width: 100px;
    height: 100%;
    border-radius: 4px;
  }
`;
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  margin-left: 4px;

  > strong {
    font-size: 24px;
    font-weight: normal;
    color: #333;
  }

  > div {
    display: flex;
    justify-content: space-between;

    span {
      color: #999;
      font-size: 18px;
    }
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  height: 60px;
  background: #343434;
  color: #fff;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50px;

  button {
    height: 50%;
    width: 100%;
    background: #999;
    border: 0;
    cursor: pointer;
  }
`;

export const AccountingContainer = styled.div`
  margin-top: auto;
`;

export const AccountingDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 20px;
  border-top: 1px solid #999;
  font-size: 18px;
  color: ${(props) => (props.bold ? '#191919' : '#999')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

export const DiscountContainer = styled.div`
  display: flex;
  height: 50px;

  margin: 10px 20px 10px 20px;

  input {
    border-radius: 4px;
    border: 1px solid #999;
    width: 100%;
    margin-right: 20px;
    text-align: center;
    background: #f4f4f4;
  }

  button {
    border-radius: 4px;
    padding: 8px;
    background: #191919;
    border: 0;
    color: #fff;
    cursor: pointer;
  }
`;

export const CheckoutContainer = styled.div`
  height: 60px;
  background: #191919;
  > button {
    border-radius: 4px;
    border: 0;
    background: #c72828;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: ${darken(0.03, '#C72828')};
    }
  }
`;
