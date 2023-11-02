import React from 'react';
import Home from './components/pages/Home/Home';
import { GlobalStyle } from './App.styles';
import Header from './components/blocks/Header/Header';
import Footer from './components/blocks/Footer/Footer';
import Review from './components/pages/Review/Review';
import Recommend from './components/pages/Recommend/Recommend';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header isLogin={true} />
      {/* <Home /> */}
      {/* <Review /> */}
      <Recommend pageType="recommend" />
      {/* <Recommend pageType="non-recommend" /> */}
      <Footer />
    </>
  );
}

export default App;
