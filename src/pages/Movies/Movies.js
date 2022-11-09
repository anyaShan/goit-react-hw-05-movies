import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MainContainer } from 'components/MainContainer/MainContainer';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { apiSearchQuery } from 'components/Services/Api';
// import { Outlet } from 'react-router-dom';
// import { AppBar } from 'components/AppBar/AppBar';
// import { LayoutWrap } from './Layout.stuled';

export const Movies = () => {
  const [moviesSearchList, setSearchList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    apiSearchQuery(query)
      .then(setSearchList)
      .catch(error => error.message);
  }, [query]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <MainContainer>
      <SearchBox onChange={updateQueryString} />
      {moviesSearchList.length > 0 && (
        <MoviesList moviesList={moviesSearchList} />
      )}
    </MainContainer>
  );
};
