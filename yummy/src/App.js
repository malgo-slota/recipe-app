import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styled from 'styled-components';
import { GiCook } from 'react-icons/gi';
//components
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <LogoWrapper>
          <Logo to={"/"}>
            <GiCook />
            yummy
          </Logo>
        </LogoWrapper>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
      
    </div>
  );
}

const Logo = styled(Link)`
  font-family: 'Bebas Neue', cursive;
  font-size: 1.6rem;
  text-decoration: none;
  color: #4b4b4b;
  letter-spacing: 0.2rem;
  line-height: 2rem;
  display: flex;
`;

const LogoWrapper = styled.div`
  display: flex;
  padding: 1rem 0.5rem; 
  svg{
    font-size: 2rem;
  }
`;

export default App;