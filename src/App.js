import './App.css';
import AnimeScreen from './components/Anime/AnimeScreen';
import RandomMedia from './components/RandomMedia/RandomMedia';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/pages/Layout';
import Favourites from './components/Favourites/Favourites';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route exact path="/" element={<RandomMedia type="ANIME"/>} />
          <Route path='/anime' element={<RandomMedia type="ANIME"/>}/>
          <Route path='/manga' element={<RandomMedia type="MANGA"/>}/>
          <Route path="/anime/:id" element={<AnimeScreen type="ANIME"/>}/>
          <Route path="/manga/:id" element={<AnimeScreen type="MANGA"/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
