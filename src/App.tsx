import { createContext, useEffect, useState } from 'react';
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
import MyPage from './components/pages/MyPage/MyPage';
import ErrorPage from './components/pages/404ErrorPage/404ErrorPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/RootState';
import { setLogin } from './store/slices/loginSlice';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme/theme';

const cookies = new Cookies();

function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    const jwtToken = cookies.get('token');
    if (jwtToken) {
      dispatch(setLogin(true));
    } else {
      dispatch(setLogin(false));
    };
  }, []);

  const routePath = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/posts",
      element: <Review />
    },
    {
      path: "/posts/update/:pId",
      element: <ReviewUpdate />
    },
    {
      path: "/posts/recommendation/good-product",
      element: <Recommend pageType='good-product' />
    },
    {
      path: "/posts/recommendation/bad-product",
      element: <Recommend pageType='bad-product' />
    },
    {
      path: "/posts/detail/:pId",
      element: <ReviewDetail />
    },
    {
      path: "/create",
      element: <ReviewCreate />
    },
    {
      path: "/new-password",
      element: <ChangePassword />
    },
    {
      path: "/mypage/:userId",
      element: <MyPage />
    },
    {
      path: "/error/not_found",
      element: <ErrorPage />
    }
  ];
  
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Routes>
          {routePath.map(data => (
            <Route 
              key={data.path}
              path={data.path} 
              element={
              <LayoutWrapper>
                <Header />
                {data.element}
                <Footer />
              </LayoutWrapper>
            } />
          ))}
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;