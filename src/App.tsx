import './App.scss';
import Header from './components/header/Header';

function App() {

  return (
    <div className="app-container">
      <Header />
      <main>
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
        <div className="main-grid">
          <h1 className="main-title">Sua seleção especial</h1>
          <div className="all-products-container">
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
            <div className="product-container">
              <img src="" />
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
            <div className="product-container">
              <img src="" />
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
            <div className="product-container">
              <img src="" />
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
            <div className="product-container">
              <img src="" />
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
            <div className="product-container">
              <img src="" />
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
            <div className="product-container">
              <img src="" />
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
            <div className="product-container">
              <img src="" />
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
          </div>
          <button className="more-products--btn buy-btn">
            Ainda mais produtos aqui!
          </button>
        </div>
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
      </main>
      <footer>
        <p>Testando suas habilidades em HTML, CSS e JS.</p>
        <p>Linx Impulse</p>
        <p>2019</p>
      </footer>
    </div>
  )
}

export default App
