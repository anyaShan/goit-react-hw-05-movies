import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MainContainer } from 'components/MainContainer/MainContainer';
import { getMovieByID } from 'components/Services/Api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  //   const [moviesTrendingList, setTrendingList] = useState([]);
  console.log(movie);
  useEffect(() => {
    getMovieByID(movieId)
      .then(setMovie)
      .catch(error => error.message);
  }, [movieId]);
  // ================================================
  // якщо Id це рядок, то може прийти з адресного рядка, потрібно перетворити у номер
  // useEffect(() => {
  //   getMovieByID(Number(movieId))
  //     .then(setMovie)
  //     .catch(error => error.message);
  // }, [movieId]);
  // ================================================

  return (
    <MainContainer>
      <div>{movieId}</div>
      {/* <MovieInfo moviesList={moviesTrendingList} /> */}
    </MainContainer>
  );
};
