import React from 'react';
import Navigation from './components/navbar/Navigation';
import MainPage from './components/pages/mainpage/MainPage';
import Footer from './components/footer/Footer';
import Calories from './components/pages/mainpage/Fivepages/Calories';
import { Route, Routes } from 'react-router';

const App: React.FC = () => {

  return (
    <>
      <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/calories" element={<Calories />} />
          <Route path='/MainPage' element={<MainPage/>}/>
        </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
