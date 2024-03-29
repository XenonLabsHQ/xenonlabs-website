import React from 'react';
import styled from 'styled-components';
import AppLogo from '../Misc/AppLogo'
import HeaderMenu from '../Misc/HeaderMenu'

const AppBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 1rem;
  height: 5rem;
`;

export default function Header() {
  return (
      <AppBar>
        <AppLogo />
        <HeaderMenu />
      </AppBar>
  );
}