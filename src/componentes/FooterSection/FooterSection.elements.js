import styled from 'styled-components';
import { Container } from '../../globalStyles';



export const FooterSec = styled.footer`
background: #202027;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1,2rem;
position: sticky;
top: 0;
z-index: 999;
`;

export const FooterContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 60px;

${Container}

`;

export const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;

`;

export const FooterMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: space-between;
  

  @media screen and (max-width: 480px) {
   display: flex;
   width: 100%;
   height: 90vh; 
   position: absolute;
   top: 80px;
   transition: all 0.5s ease;
 }

`;
export const FooterItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
 color: #fff;

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`; 

export const FooterText = styled.p`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
 
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
 `;  
export const FooterLogo = styled.div`
  color: #fff;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-right: 40px;
`;