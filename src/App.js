import './App.css';
import './styles/globals.scss';
// component import
import Header from './containers/Header'
// container import
import Home from './pages/Home';
import Footer from './containers/Footer';
import { useState } from 'react';

function App() {

  const [zIndex, setzIndex] = useState(true); 

  return (
    <div className="App">
      <Header setzIndex={setzIndex} />
      <Home zIndex={zIndex}/>
      <Footer />
    </div>
  );
}

export default App;
