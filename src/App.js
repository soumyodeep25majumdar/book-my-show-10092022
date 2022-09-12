
import './App.css';
//Routing
import { Routes, Route } from 'react-router-dom';

//React slick css for carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Pages
import HomePage from './Pages/Home.page';
import MoviePage from './Pages/Movie.page';
import PlayPage from './Pages/Play.page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}


export default App;
