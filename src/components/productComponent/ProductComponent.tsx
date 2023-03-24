import React from 'react'
import './productComponent.scss';

const ProductComponent = () => {
  return (
    <div className="product-container">
      <img src="*" />
      <div className="product-container--info">
        <h2 className="product-title">Nome do Produto</h2>
        <p className="product-description">
          Descrição do produto um pouco maior, com duas linhas ou três
          que explica melhor do que se trata.
        </p>
        <p className="product-old-price misc">De: R$23,99</p>
        <h2 className="product-new-price">Por: R$19,99</h2>
        <p className="misc">ou 2x de R$9,99</p>
        <button className="buy-btn">Comprar</button>
      </div>
    </div>
  )
}

export default ProductComponent