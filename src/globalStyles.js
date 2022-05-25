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

  
 
 
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#2796ff' : '#1762A7')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '10px 15px' : '10px 10px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '15px' : '12px')};
  outline: none;
  border: none;
  cursor: pointer;
  
  
  &:hover {
    transition: all 0.3s ease-out;
    background:#2796ff ;
    background-color: ${({ primary }) => (primary ? '#2796ff' : '#2796ff')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;



export default GlobalStyle;