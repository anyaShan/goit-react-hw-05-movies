import { List, Item } from './MoviesList.styled';

export const MoviesList = ({ moviesList }) => {
  return (
    <List>
      {moviesList.map(({ id, title }) => (
        <Item key={id}>{title}</Item>
      ))}
    </List>
  );
};
