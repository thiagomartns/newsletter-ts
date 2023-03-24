import './App.scss';
import Header from './components/header/Header';
import MainForm from './components/mainForm/MainForm';

function App() {

  return (
    <div className="app-container">
      <Header />
      <main>
        <MainForm />
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
