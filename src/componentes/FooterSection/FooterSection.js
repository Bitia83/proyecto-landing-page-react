import React from 'react'
import { FooterSec, FooterContainer, FooterRow, FooterMenu, FooterItem,FooterText, FooterLogo } from './FooterSection.elements';
import twitter from '../../imagenes/twitter.svg'
import facebook from '../../imagenes/facebook.svg'


function FooterSection() {
    return (
      <>
        <FooterSec>
          <FooterContainer>
           
              <FooterMenu>
                <FooterItem><FooterText>About Us</FooterText></FooterItem>
                <FooterItem><FooterText>Contact</FooterText></FooterItem>
              </FooterMenu>
             <FooterMenu>
            <FooterLogo to="/">
                 <img src={twitter} alt="" />
                    twitter
              </FooterLogo>
              <FooterLogo to="/">
                  <img src={facebook} alt="" />
                       facebook
        </FooterLogo>
        </FooterMenu>
          </FooterContainer>
      </FooterSec>
   
      </>
  )
}

export default FooterSection;