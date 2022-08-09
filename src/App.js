import logo from './logo.svg';
import './App.css';
import { ClassNames } from '@emotion/react';
import Header from './components/Header.jsx';
import Tindercards from './components/Tindercards.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className='App-body'>
      {/* Header */}
      <Header />
      {/* Section */}
      <Tindercards />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
