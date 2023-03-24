import React from 'react'
import './callToAction.scss';

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <h1 className="main-title">Compartilhe a Novidade</h1>
      <p>
        Quer que seus amigos também ganhem a lista personalizada deles?
        Preencha agora!
      </p>
      <div className="input-container">
        <div className="input-flex">
          <label>Nome do seu amigo:</label>
          <input type="text" required />
        </div>
        <div className="input-flex">
          <label>Email dele:</label>
          <input type="text" required />
        </div>
      </div>
      <button className="action-btn buy-btn">Enviar agora</button>
    </div>
  )
}

export default CallToAction