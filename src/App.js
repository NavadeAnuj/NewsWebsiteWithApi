import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainNavbar from './Component/Navbar/MainNavbar';
import NewsBoard from './Component/Pages/General/NewsBoard';
import NewsItem from './Component/Pages/General/NewsItem';
import { useState } from 'react';
import TechnologyBoard from './Component/Pages/Technology/TechnologyBoard';
import SportsBoard from './Component/Pages/Sports/SportsBoard';
import HealthBoard from './Component/Pages/Health/HealthBoard';

function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<NewsBoard/>}/>
        <Route path='/technology' element={<TechnologyBoard/>}/>
        <Route path='/sports' element={<SportsBoard/>}/>
        <Route path='/health' element={<HealthBoard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
