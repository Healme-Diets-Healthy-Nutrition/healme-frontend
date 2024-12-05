import React from 'react';
import Navigation from './components/navbar/Navigation';
import MainPage from './components/mainpage/MainPage';

const App: React.FC = () => {
  return (
    <>
    <Navigation></Navigation>
      <MainPage></MainPage>
    </>
  );
};

export default App; // Add this line to make it the default export
