import { Wrapper, SearchInput } from './SearchBox.styled';

export const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      <SearchInput
        name="query"
        type="text"
        value={value}
        placeholder="Search movie"
        onChange={e => onChange(e.target.value)}
      />
    </Wrapper>
  );
};
