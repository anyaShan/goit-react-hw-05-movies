import { NavLink } from 'react-router-dom';
import { List, Item } from './MoviesList.styled';

export const MoviesList = ({ moviesList }) => {
  return (
    <div>
      <List>
        {moviesList.map(({ id, title }) => (
          <Item key={id}>
            <NavLink to={`${id}`}>{title}</NavLink>
          </Item>
        ))}
      </List>
    </div>
  );
};
