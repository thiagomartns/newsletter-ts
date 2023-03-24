import './App.scss';
import CallToAction from './components/callToAction/CallToAction';
import Header from './components/header/Header';
import MainForm from './components/mainForm/MainForm';
import MainGrid from './components/mainGrid/MainGrid';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className="app-container">
      <Header />
      <main>
        <MainForm />
        <MainGrid />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
