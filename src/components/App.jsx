import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<div>Home</div>} />
          <Route path="movies" element={<div>Movies</div>} />
        </Route>
      </Routes>
    </>
  );
};
