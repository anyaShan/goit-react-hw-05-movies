import { useState, useEffect } from 'react';
import { apiTrending } from 'components/Services/Api';
// import { Outlet } from 'react-router-dom';
// import { AppBar } from 'components/AppBar/AppBar';
// import { LayoutWrap } from './Layout.stuled';

export const Home = () => {
  const [moviesTrendingList, setTrendingList] = useState([]);

  useEffect(() => {
    apiTrending().then(respons => {
      const { data } = respons;
      const { results } = data;
      setTrendingList([...results]);
    });
  });
  return (
    <div>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  );
};
