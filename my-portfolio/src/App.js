import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import About from './components/about'

function App() {
  return (
    <div className="">
      <header className="">
      <Header />
      </header>
      <About />
      <footer>
      <Footer />
      </footer>
    </div>
  );
}

export default App;
