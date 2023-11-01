import React from 'react';
import Home from './components/pages/Home/Home';
import { GlobalStyle } from './App.styles';
import Header from './components/blocks/Header/Header';
import Footer from './components/blocks/Footer/Footer';
import Review from './components/pages/Review/Review';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header isLogin={true} />
      {/* <Home /> */}
      <Review />
      <Footer />
    </>
  );
}

export default App;
