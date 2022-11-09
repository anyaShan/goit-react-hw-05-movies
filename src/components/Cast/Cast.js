import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from 'components/Services/Api';
import { List, Item } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  console.log(movieCast);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(setMovieCast)
      .catch(error => error.message);
  }, [movieId]);

  return (
    <div>
      <List>
        {movieCast &&
          movieCast.map(({ id, character, name, profile_path: path }) => (
            <Item key={id}>
              <img
                src={
                  path
                    ? `https://image.tmdb.org/t/p/w300${path}`
                    : `https://i.pinimg.com/originals/7b/3f/ba/7b3fba069b7942021bf680e2d3170bf8.jpg`
                }
                alt={`${name}`}
              />
              <b>{name}</b>
              <p>Character: {character}</p>
            </Item>
          ))}
      </List>
    </div>
  );
};
