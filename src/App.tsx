import { ReactElement } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

const App = function App(): ReactElement {
  return (
    <div className="App">
      <Header />
      <List />
      <Footer />
    </div>
  );
};

export default App;
