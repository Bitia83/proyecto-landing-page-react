import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button,CirculoA, } from '../../globalStyles'; 
import { MusicSec, CirculoB, CirculoC, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, Img, ImgWrapper } from './MusicSection.elements';
import landing from '../../imagenes/landing.png';
 

const MusicSection = ({ imgStart, primary, buttonLabel, start }) => {
  return (
    <>
      <MusicSec >
        <Container>
          <CirculoA />
          <CirculoB /> 
          <CirculoC/>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading>Feel The Music</Heading>
                <Subtitle >Stream over 20 thousand sonds with one click</Subtitle>
                <Link to= '/join'>
                  <Button big fontBig primary={primary}>Join Now
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
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
