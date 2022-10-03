import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';

function App() {
  const email = "khaela.lee@gmail.com";
  return (
    <div className="App">
      <Header name="Khaela" number="Ms." description="Hello"/>
      <Main />
      <Footer email={email}/>

    </div>
  );
}

export default App;
