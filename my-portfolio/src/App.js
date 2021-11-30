import './App.css';
import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import About from './components/about'

function App() {
  return (
    <div>
      {/* <header className=""> */}
      <Header />
      {/* </header> */}
      <About />
      <footer>
      <Footer />
      </footer>
    </div>
  );
}

export default App;
