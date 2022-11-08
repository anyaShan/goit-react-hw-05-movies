import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;

  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: grey;
`;

export const Item = styled.li`
  align-items: center;
  display: flex;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  ::before {
    display: flex;
    margin-right: 10px;
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: grey;
  }
`;
