import styled from 'styled-components';
import { CirculoA } from '../../globalStyles';
import { Button } from '../../globalStyles';

export const MusicSec = styled.div`
 color: #fff;
  padding: 160px 0;
  background: #2F303A;

`;

export const CirculoB = styled(CirculoA)`
 margin-top: -150px;
 margin-left: 50px;
 background:#3457b21a;

 @media screen and (min-width: 480px){
   margin-left: 300px;
 }
${CirculoA}
`;

export const CirculoC = styled(CirculoA)`

width: 200px;
height: 200px;
margin-top: 350px;
margin-left: 145px;
background:#3457b21a;

@media screen and (min-width: 480px) {
  margin-left:850px;
  margin-top: 300px;
  width: 38%;
  height: 82%;
}
${CirculoA}
`;


export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
 flex-direction: row-reverse;

`;


export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  
  
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
   
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;
export const ButtonNav = styled(Button)`
a{
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 0.5rem;
height: 80%;
 }
${Button}
 `;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: flex-end;

`;


export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: flex;
  max-height: 500px;
  
 @media screen and (max-width: 480) {
 display: none;
    }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 530;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
 `;

