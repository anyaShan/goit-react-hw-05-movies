import { List, Item, MovieLink } from './MoviesList.styled';

export const MoviesList = ({ moviesList, state }) => {
  return (
    <div>
      <List>
        {moviesList.map(({ id, title }) => (
          <Item key={id}>
            <MovieLink to={`${id}`} state={state}>
              {title}
            </MovieLink>
          </Item>
        ))}
      </List>
    </div>
  );
};
