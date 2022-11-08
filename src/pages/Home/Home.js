import { useState, useEffect } from 'react';
import { apiTrending } from 'components/Services/Api';
import { MainContainer } from 'components/MainContainer/MainContainer';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [moviesTrendingList, setTrendingList] = useState([]);

  useEffect(() => {
    apiTrending()
      .then(setTrendingList)
      .catch(error => error.massege);
  }, []);

  return (
    <MainContainer>
      <MoviesList moviesList={moviesTrendingList} />
    </MainContainer>
  );
};
