import React, { useState } from 'react';
import logo from '../../imagenes/logo.png';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, } from './Navbar.elements';


const Navbar = () => {
  /* const [click, setClick] = useState(false); */
    
  /* const handleClick = () => setClick(!click); */
  
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={logo} alt="" />
            SoundWave
          </NavLogo>
          <NavMenu>
            <NavItem>
              <a href='#discover'>Discover
               </a>
              </NavItem>  
            <NavItem>
                <a href='#join' >Join
               </a> 
             </NavItem>
          </NavMenu>
        </NavbarContainer>
           </Nav>
    </>
  );
};

export default Navbar;
