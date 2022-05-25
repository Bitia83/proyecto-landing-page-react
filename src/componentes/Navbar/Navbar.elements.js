import styled from 'styled-components';
/*import {GiSoundWaves} from 'react-icons/gi' */
import { Link } from 'react-router-dom';
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
height: 80px;

${Container}


`;

export const NavLogo = styled(Link)`
color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;


 /*export const NavIcon = styled`
  margin-right: 0.5rem;
  color:  #FC00E9;
  font-size: 3rem;
`; */

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  
  
  @media screen and (max-width: 480px) {
    display: flex;
    width: 100%;
    height: 90vh; 
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
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

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
 
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
   
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;
