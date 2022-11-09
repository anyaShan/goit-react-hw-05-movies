import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
// import { Movies } from '../pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<div>reviews</div>}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
