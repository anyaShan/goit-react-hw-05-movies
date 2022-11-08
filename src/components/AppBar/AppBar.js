import { Link } from 'react-router-dom';

import { AppWrap, NavWrap, NavItem } from './AppBar.styled';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <AppWrap>
      <NavWrap>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </NavWrap>
    </AppWrap>
  );
};
