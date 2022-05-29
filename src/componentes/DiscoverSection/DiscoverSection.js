import React from 'react';
import { Container } from '../../globalStyles'; 
import { MusicSec, InfoRow, InfoColumn, TextWrapper, Heading,EqualDivider, Child, Subtitle, Img, ImgWrapper }
  from './Discover.elements';
import covers from '../../imagenes/covers.jpg'
import microphone from '../../imagenes/microphone.svg'
import albums from '../../imagenes/albums.svg'
import more from '../../imagenes/more.svg'
import FooterSection from '../FooterSection/FooterSection';


const DiscoverSection = ({ imgStart, start }) => {
      return (
        <>
          <MusicSec >
            <Container>
              <InfoRow imgStart={imgStart}>
                <InfoColumn>
                  <TextWrapper>
                    <Heading>Discover new Music</Heading>
                    <EqualDivider>
                    <Child><Img src={microphone} alt="" />Charts</Child>
                    <Child><Img src={albums} alt="" />Albums</Child>
                    <Child><Img src={more} alt="" />More</Child>
                    </EqualDivider>
                      
                    <Subtitle >By joining you can benefit by listening to the latest albums released.</Subtitle>
                  </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                  <ImgWrapper start={start}>
                    <Img src={covers} alt="" />
                  </ImgWrapper>
                </InfoColumn>
              </InfoRow>
            </Container>
          </MusicSec>
        </>
      );
    };
    
    export default DiscoverSection;
    