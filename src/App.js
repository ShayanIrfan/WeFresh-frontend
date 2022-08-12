import './App.css';
import './styles/globals.scss';
// component import
import Header from './containers/Header'
// container import
import Home from './pages/Home';
import Footer from './containers/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
