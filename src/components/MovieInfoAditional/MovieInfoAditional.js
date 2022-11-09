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
          <AditionLink>Cast</AditionLink>
        </Item>
        <Item>
          <AditionLink>Reviews</AditionLink>
        </Item>
      </List>
    </AditionalCard>
  );
};
