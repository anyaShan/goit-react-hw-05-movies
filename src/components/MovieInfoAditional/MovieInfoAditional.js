import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  AditionalCard,
  List,
  Item,
  AditionLink,
} from './MovieInfoAditional.styled';

export const MovieInfoAditional = () => {
  return (
    <AditionalCard>
      <h3>Aditional information</h3>
      <List>
        <Item>
          <AditionLink to="cast">Cast</AditionLink>
        </Item>
        <Item>
          <AditionLink to="reviews">Reviews</AditionLink>
        </Item>
      </List>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </AditionalCard>
  );
};
