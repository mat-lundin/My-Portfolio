import './App.css';
import React, {useState} from 'react';
import Header from './components/header';
import Footer from './components/footer';

import CurPage from './components/curPage';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  return (
    <div>
      {/* <header className=""> */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
      {/* </header> */}
      <CurPage activeTab={activeTab} setActiveTab={setActiveTab}/>
      <footer>
      <Footer />
      </footer>
    </div>
  );
}

export default App;
