import React from 'react';

import { Container,  CirculoA } from '../../globalStyles'; 
import { MusicSec, CirculoB, CirculoC, InfoRow, InfoColumn, TextWrapper,ButtonNav, Heading, Subtitle, Img, ImgWrapper } from './MusicSection.elements';
import landing from '../../imagenes/landing.png';
 

const MusicSection = () => {
  return (
    <>
      <MusicSec >
        <Container>
          <CirculoA />
          <CirculoB /> 
          <CirculoC/>
          <InfoRow >
            <InfoColumn>
              <TextWrapper>
                <Heading>Feel The Music</Heading>
                <Subtitle >Stream over 20 thousand sonds with one click</Subtitle>
                
                <ButtonNav><a href='#join'>Join Now</a>
                 </ButtonNav>
              
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                <Img src={landing} alt="" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </MusicSec>
      
    </>
  );
};

export default MusicSection;
