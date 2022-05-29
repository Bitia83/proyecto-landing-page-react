import React, { useState } from 'react';

import logo from '../../imagenes/logo.png';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks } from './Navbar.elements';


const Navbar = () => {
  const [click, setClick] = useState(false);
    
  const handleClick = () => setClick(!click);
  
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={logo} alt="" />
            SoundWave
          </NavLogo>
          <NavMenu onClick={handleClick}>
            <NavItem>
              <NavLinks to='/discover'>Discover
              </NavLinks>
            </NavItem>
         
            <NavItem>
              <NavLinks to= '/join'>
                Join
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
           </Nav>
    </>
  );
};

export default Navbar;
