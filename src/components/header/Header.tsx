import React from 'react'
import './header.scss';

const Header = () => {
  return (
    <header>
      <div className="header-info">
        <h2>uma seleção de produtos</h2>
        <h1>especial para você</h1>
        <p>
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </p>
      </div>
      <div className="header-buttons">
        <button className="header-btn">Conheça a Linx</button>
        <button className="header-btn">Ajude o algorítimo</button>
        <button className="header-btn">Seus produtos</button>
        <button className="header-btn">Compartilhe</button>
      </div>
    </header>
  )
}

export default Header