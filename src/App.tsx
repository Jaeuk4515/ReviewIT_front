import React from 'react';
import Home from './components/pages/Home/Home';
import { GlobalStyle, LayoutWrapper } from './App.styles';
import Header from './components/blocks/Header/Header';
import Footer from './components/blocks/Footer/Footer';
import Review from './components/pages/Review/Review';
import Recommend from './components/pages/Recommend/Recommend';
import ReviewDetail from './components/pages/ReviewDetail/ReviewDetail';
import image from "./assets/icons/image.webp"
import ReviewCreate from './components/pages/ReviewCreate/ReviewCreate';
import ChangePassword from './components/pages/ChangePassword/ChangePassword';
import { Route, Routes } from 'react-router-dom';

const content = `
국가는 균형있는 국민경제의 성장 및 안정과 적정한 소득의 분배를 유지하고, 시장의 지배와 경제력의 남용을 방지하며, 경제주체간의 조화를 통한 경제의 민주화를 위하여 경제에 관한 규제와 조정을 할 수 있다.

모든 국민은 그 보호하는 자녀에게 적어도 초등교육과 법률이 정하는 교육을 받게 할 의무를 진다. 법률이 헌법에 위반되는 여부가 재판의 전제가 된 경우에는 법원은 헌법재판소에 제청하여 그 심판에 의하여 재판한다.

광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.

대통령은 내란 또는 외환의 죄를 범한 경우를 제외하고는 재직중 형사상의 소추를 받지 아니한다. 모든 국민은 신체의 자유를 가진다. 누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을 받지 아니한다.`

function App() {
  const routePath = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/review",
      element: <Review />
    },
    {
      path: "/recommend",
      element: <Recommend pageType='recommend' />
    },
    {
      path: "/non_recommend",
      element: <Recommend pageType='non-recommend' />
    },
    {
      path: "/review_detail",
      element: <
        ReviewDetail 
          userImageUrl={image} 
          userName="test" 
          time="2023.11.03" 
          text="Product Review"
          productUrl={image} 
          productName="Product" 
          grade={4} 
          content={content} 
          productLink="http://www.naver.com"
          commentAmount={2}
          likeyAmount={4}
          isLogin={true}
      />
    },
    {
      path: "/review_create",
      element: <ReviewCreate />
    },
    {
      path: "/change_password",
      element: <ChangePassword />
    },
  ]
  
  return (
    <>
      <GlobalStyle />
      <Routes>
        {routePath.map(data => (
          <Route 
            key={data.path}
            path={data.path} 
            element={
            <LayoutWrapper>
              <Header isLogin={true} />
              {data.element}
              <Footer />
            </LayoutWrapper>
          } />
        ))}
      </Routes>
    </>
  );
}

export default App;

