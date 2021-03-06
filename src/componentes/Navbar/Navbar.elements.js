import styled from 'styled-components';
/*import {Link } from 'react-router-dom';*/
import { Container } from '../../globalStyles';




export const Nav = styled.nav`
background: #2F303A;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1,2rem;
position: sticky;
top: 0;
z-index: 999;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 65px;

${Container}

`;

export const NavLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;



export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  
  
  @media screen and (max-width: 980px) {
    display: flex;
    width: 100%;
    height: 10vh; 
    top: 80px;
    opacity: 1;
    transition: all 0.5s ease;
    background: #2F303A;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  a{
  color: #fff;
    display: flex;
     align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
     height: 100%;
    }


  &:hover {
    border-bottom: 2px solid #4b59f7;
    
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
     
    }
  }
`; 

