import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MainContainer } from 'components/MainContainer/MainContainer';
import { getMovieByID } from 'components/Services/Api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { MovieInfoAditional } from 'components/MovieInfoAditional/MovieInfoAditional';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

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
      <MovieInfo movie={movie} />
      <MovieInfoAditional />
    </MainContainer>
  );
};
