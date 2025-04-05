import React from 'react';
import Navigation from './components/modComponents/navbar/Navigation';
import MainPage from './pages/MainPage';
import Footer from './pages/footer/Footer';
import Calories from './pages/Fivepages/Calories';
import FoodInfo from './pages/Fivepages/FoodInfo/FoodInfo';
import { Route, Routes } from 'react-router-dom';
import Recipe from './pages/Fivepages/Recipe/Recipe';
import FoodDetail from './components/modComponents/InfoCards/FoodDetail';
import FoodTables from './pages/Fivepages/FoodInfo/FoodTables';
import VegetableTables from './pages/Fivepages/FoodInfo/Vegetables';
import Fruits from './pages/Fivepages/FoodInfo/Fruits';
import Meats from './pages/Fivepages/FoodInfo/Meats';
import Article from './pages/Fivepages/Article';

const App: React.FC = () => {

  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/calories" element={<Calories />} />
        <Route path="/foodInfo" element={<FoodInfo />}>
          <Route index element={<FoodTables />} /> 
          <Route path="fruits" element={<Fruits/>}/>
          <Route path="meats" element={<Meats/>}/>
          <Route path="vegetables" element={<VegetableTables />} />  
          <Route path=":name" element={<FoodDetail />} />  
        </Route>
        <Route path='/article' element={<Article/>} />
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
