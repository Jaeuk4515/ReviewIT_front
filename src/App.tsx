import React, { createContext, useEffect, useState } from 'react';
import Home from './components/pages/Home/Home';
import { GlobalStyle, LayoutWrapper } from './App.styles';
import Header from './components/blocks/Header/Header';
import Footer from './components/blocks/Footer/Footer';
import Review from './components/pages/Review/Review';
import Recommend from './components/pages/Recommend/Recommend';
import ReviewDetail from './components/pages/ReviewDetail/ReviewDetail';
import ReviewCreate from './components/pages/ReviewCreate/ReviewCreate';
import ChangePassword from './components/pages/ChangePassword/ChangePassword';
import { Route, Routes } from 'react-router-dom';
import Cookies from 'universal-cookie';
import ReviewUpdate from './components/pages/ReviewUpdate/ReviewUpdate';

interface AuthContextType {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}
export const authContext = createContext<AuthContextType | undefined>(undefined);

const cookies = new Cookies();

function App() {
  const [ isLogin, setIsLogin ] = useState(false);

  useEffect(() => {
    const jwtToken = cookies.get('token');
    if (jwtToken) setIsLogin(true);
  }, [])

  const routePath = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/posts/:pageNumber",
      element: <Review />
    },
    {
      path: "/posts/update/:pId",
      element: <ReviewUpdate />
    },
    {
      path: "/posts/good-review",
      element: <Recommend pageType='recommend' />
    },
    {
      path: "/posts/bad-review",
      element: <Recommend pageType='non-recommend' />
    },
    {
      path: "/posts/detail/:pId",
      element: <ReviewDetail isLogin={isLogin} />
    },
    {
      path: "/create",
      element: <ReviewCreate />
    },
    {
      path: "/new-password",
      element: <ChangePassword />
    },
  ]

  console.log("isLogin : ", isLogin);
  
  return (
    <>
      <GlobalStyle />
      <authContext.Provider value={{ isLogin, setIsLogin }}>
        <Routes>
          {routePath.map(data => (
            <Route 
              key={data.path}
              path={data.path} 
              element={
              <LayoutWrapper>
                <Header isLogin={isLogin} />
                {data.element}
                <Footer />
              </LayoutWrapper>
            } />
          ))}
        </Routes>
      </authContext.Provider>
    </>
  );
}

export default App;

