import React from 'react';
import styled from 'styled-components';

const Logo = styled.a`
  color: inherit;
  font-size: 2rem;
  text-decoration: none;
  font-weight: 200;
  z-index: 2;
    
  & span {
    font-weight: bold;
  }
`;

export default function AppLogo() {
  return (
      <Logo href="#" onMouseEnter="toggleRgb()" onMouseLeave="toggleRgb()">
        <span>Xenon</span>Labs.
      </Logo>
  );
}