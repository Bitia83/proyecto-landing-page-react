import styled from 'styled-components';


export const MusicSec = styled.div`
 color: #fff;
  padding: 200px 0;
  background: #2F303A;

`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction:'row-reverse';
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
export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;


export const Heading = styled.h1`
  margin-bottom: 5px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 530;
 
`;

export const EqualDivider = styled.div`
  display: flex;
  justify-content: flex-start;
  /*margin: rem;*/
 /* padding: 0.5rem;*/
  background: #2F303A;
  `;

export const Child = styled.div`
  padding: 0.5rem 1rem ;
  margin: 0.5rem 0.3rem;
  background:#202027 ;
  display: flex;
  flex-direction: column;
`;


export const Subtitle = styled.p`
  max-width: 650px;
  margin-bottom: 35px;
  font-size: 17px;
  margin-top: 15px;
  
`;

