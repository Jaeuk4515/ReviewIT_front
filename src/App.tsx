import React from 'react';
import Home from './components/pages/Home/Home';
import { GlobalStyle } from './App.styles';
import Header from './components/blocks/Header/Header';
import Footer from './components/blocks/Footer/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header isLogin={true} />
      <Home />
      <Footer />
    </>
  );
}

export default App;
