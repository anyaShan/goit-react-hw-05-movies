import { useState, useEffect } from 'react';
import { apiTrending } from 'components/Services/Api';
import { MainContainer } from 'components/MainContainer/MainContainer';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBox } from 'components/SearchBox/SearchBox';
// import { Outlet } from 'react-router-dom';
// import { AppBar } from 'components/AppBar/AppBar';
// import { LayoutWrap } from './Layout.stuled';

export const Movies = () => {
  const [moviesTrendingList, setTrendingList] = useState([]);

  useEffect(() => {
    apiTrending()
      .then(setTrendingList)
      .catch(error => error.massege);
  }, []);

  return (
    <MainContainer>
      <SearchBox />
      <MoviesList moviesList={moviesTrendingList} />
    </MainContainer>
  );
};
