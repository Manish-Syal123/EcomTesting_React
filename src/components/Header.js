import React from "react";
import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";

// Styled components for the header and its elements
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 1rem;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Header component
const Header = () => {
  return (
    <HeaderContainer>
      <Logo>YourLogo</Logo>
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allproducts">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/Login">Login</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
