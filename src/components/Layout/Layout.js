import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { LayoutWrap } from './Layout.stuled';

export const Layout = () => {
  return (
    <LayoutWrap>
      <AppBar />
      <Outlet />
    </LayoutWrap>
  );
};
