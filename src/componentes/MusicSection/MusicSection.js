import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, CirculoA } from '../../globalStyles'; 
import { MusicSec, CirculoB, CirculoC, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, Img, ImgWrapper } from './MusicSection.elements';
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
                <Link to= '/join'>
                  <Button>Join Now
                 
                  </Button>
                </Link>
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
