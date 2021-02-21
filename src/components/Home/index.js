/* eslint-disable arrow-body-style */
import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

const Home = () => {
  return (
    <ProductList>
      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/900x900/92344102/tenis-new-balance-ml501-masculino-img.jpg"
          alt="Tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/900x900/92344102/tenis-new-balance-ml501-masculino-img.jpg"
          alt="Tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/900x900/92344102/tenis-new-balance-ml501-masculino-img.jpg"
          alt="Tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/900x900/92344102/tenis-new-balance-ml501-masculino-img.jpg"
          alt="Tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/900x900/92344102/tenis-new-balance-ml501-masculino-img.jpg"
          alt="Tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>
    </ProductList>
  );
};

export default Home;
