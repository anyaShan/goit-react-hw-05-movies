import { List, Item, MovieLink } from './MoviesList.styled';

export const MoviesList = ({ moviesList }) => {
  return (
    <div>
      <List>
        {moviesList.map(({ id, title }) => (
          <Item key={id}>
            <MovieLink to={`${id}`}>{title}</MovieLink>
          </Item>
        ))}
      </List>
    </div>
  );
};
