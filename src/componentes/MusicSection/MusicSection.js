import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles'; 
import { MusicSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, Img, ImgWrapper } from './MusicSection.elements';
import landing from '../../imagenes/landing.png';


const MusicSection = ({ lightBg, imgStart, primary, lightTextDesc, buttonLabel, description, headline, lightText, topLine, start }) => {
  return (
    <>
      <MusicSec >
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading>Feel The Music</Heading>
                <Subtitle >Stream over thousand sonds with on click</Subtitle>
                <Link to= '/'>
                  <Button big fontBig primary={primary}>join Now
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
