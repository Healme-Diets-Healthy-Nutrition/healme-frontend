import React from 'react';
import Navigation from './components/navbar/Navigation';
import MainPage from './components/mainpage/MainPage';
import Footer from './components/footer/Footer';

const App: React.FC = () => {

  return (
    <>
    <Navigation></Navigation>
      <MainPage></MainPage>
      <Footer></Footer>
    </>
  );
};

export default App;
