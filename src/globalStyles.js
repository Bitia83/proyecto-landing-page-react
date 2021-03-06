import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
   margin: 0;
   padding: 0;
   font-family: 'Poppins', sans-serif;
} 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  position: relative;

  
 @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

 /* superponer div = position y z-index */
export const CirculoA = styled.div`
 width: 140px;
 height: 140px;
 margin-top: 350px;
 margin-left: -10px;
 -moz-border-radius: 50%;
 -webkit-border-radius: 50%;
 border-radius: 50%;
 background: #bc3a801a;
position: absolute;
 z-index: -1;
 

 @media screen and (min-width: 480px) {
   padding-right: 30px;
   padding-left: 60px;
   margin-top: 120px;
   width: 30%;
   height:65%;
 }
`;  


export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#2796ff' : '#1762A7')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '10px 12px' : '10px 8px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '15px' : '12px')};
  outline: none;
  border: none;
  cursor: pointer;
  
  
  &:hover {
    transition: all 0.3s ease-out;
    background:#2796ff ;
    
  }
  @media screen and (max-width: 960px) {
    width: 25%;
  }
`;



export default GlobalStyle;