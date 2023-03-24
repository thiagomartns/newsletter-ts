import React from 'react'
import './mainForm.scss';

const MainForm = () => {
  return (
    <div className="first-form">
      <div className="first-form--text">
        <h2>Ajude o algorítimo a ser mais certeiro</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque ultricies tellus nec mi porta convallis sollicitudin
          eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse
          semper pretium consectetur. Praesent bibendum arcu risus, sit amet
          iaculis ex tempus quis. Cras et erat ut tellus vulputate
          tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu
          non felis tristique eleifend. <br /><br />
          Morbi eu condimentum urna. Curabitur eu magna eget turpis
          condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar
          purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra.
          Quisque ut
        </p>
      </div>
      <form>
        <div className="input-flex">
          <label>Seu nome:</label>
          <input type="text" required />
        </div>
        <div className="input-flex">
          <label>Email:</label>
          <input type="text" required />
        </div>
        <div className="input-flex">
          <label>CPF:</label>
          <input type="text" required />
        </div>
        <div className="input-radius">
          <input
            type="radio"
            id="feminino"
            name="genero"
            value="feminino"
          />
          <label htmlFor="masculino">Masculino</label>
          <input
            type="radio"
            id="masculino"
            name="genero"
            value="masculino"
          />
          <label htmlFor="feminino">Feminino</label>
        </div>
        <input type="submit" className="submit-btn" />
      </form>
    </div>
  )
}

export default MainForm