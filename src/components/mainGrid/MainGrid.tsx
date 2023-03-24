import React from 'react'
import ProductComponent from '../productComponent/ProductComponent';
import './mainGrid.scss';

const MainGrid = () => {
  return (
    <div className="main-grid">
      <h1 className="main-title">Sua seleção especial</h1>
      <div className="all-products-container">
        <ProductComponent />
      </div>
      <button className="more-products--btn buy-btn">
        Ainda mais produtos aqui!
      </button>
    </div>
  )
}

export default MainGrid