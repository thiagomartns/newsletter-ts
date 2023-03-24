import './App.scss';
import CallToAction from './components/callToAction/CallToAction';
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
        <CallToAction />
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
