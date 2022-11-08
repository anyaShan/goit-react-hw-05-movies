import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  display: flex;
  width: 100%;
  max-width: 400px;
  margin-bottom: 25px;
  font: inherit;
  font-size: 18px;

  outline: none;

  padding: 10px;
  border: 1px solid rgb(241, 188, 90);
  border-radius: 4px;
  background-color: white;

  &::placeholder {
    color: rgba(52, 162, 212, 0.5);

    font-size: 16px;
    line-height: 1.25px;
  }

  :focus {
    outline: 1px solid rgb(52, 162, 212);
    border: 1px solid transparent;
  }
`;
