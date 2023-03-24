import './App.scss';
import Header from './components/header/Header';
import MainForm from './components/mainForm/MainForm';
import MainGrid from './components/mainGrid/MainGrid';

function App() {

  return (
    <div className="app-container">
      <Header />
      <main>
        <MainForm />
        <MainGrid />
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
