import logo from './logo.svg';
import './App.css';
import AnimeScreen from './components/Anime/AnimeScreen';
import RandomMedia from './components/RandomMedia/RandomMedia';
import { Context } from './contexts/store.context';
import RandomAnime from './components/RandomMedia/RandomAnime';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const {animeList, setAnimeList} = useContext(Context)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RandomMedia/>}/>
        <Route path="/anime/:id" element={<AnimeScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
