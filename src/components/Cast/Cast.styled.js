import styled from 'styled-components';

export const CastCard = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  gap: 15px; */
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;

  /* font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: grey; */
`;

export const Item = styled.li`
  padding: 10px;
  width: 200px;
  align-items: center;
  display: flex;
  flex-direction: column;
  /* padding: 15px; */
  border-radius: 15px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  img {
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  b {
    text-align: center;
    margin-bottom: 10px;

    font-size: 16px;
    line-height: 1;
    color: grey;
  }
  p {
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    color: grey;
  }
`;
