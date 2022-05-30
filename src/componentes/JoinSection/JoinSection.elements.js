import styled from 'styled-components';
import { CirculoA } from '../../globalStyles';


export const JoinSec = styled.div`
 color: #fff;
  padding: 200px 0;
  background: #2F303A;

`;

export const CirculoD = styled(CirculoA)`


margin-top: 150px;
margin-left:-300px;
width: 500px ;
height: 500px;


`;

export const CirculoE = styled(CirculoA)`

margin-top: -10px;
margin-left:200px;
width: 350px ;
height: 350px;
background:#3457b21a;


`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const InfoColumn = styled.div`
  
  margin-bottom: 15px;
  padding-right: 55px;
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

export const Heading = styled.h1`
  margin-bottom: 5px;
  font-size: 60px;
  line-height: 1.1;
  font-weight: 650;
  span {
    color: #F30094;
    font-weight: 650;
    font-size: 60px;
  }
`;

export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px) {
  height: 80%;
}
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
     padding: 10px;
  }
`;

export const Form = styled.form`
background: #202027;
max-width: 500px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 40px 32px;
border-radius: 15px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

@media screen and (max-width: 480px) {
    padding: 32px 32px;
}
`;
export const FormLabel = styled.label`
 margin-bottom: 8px;
 font-size: 14px;
 color: #fff;
`;

export const FormInput = styled.input`
 padding: 10px 16px;
 margin-bottom: 25px;
 border: 1px solid;
 border-radius: 4px;
 background: #202027;
 border-color: #2E3852;
 color: #fff;
`;

export const FormButton = styled.button`
background: #1762A7;
padding: 10px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 15px;
cursor: pointer;

&:hover {
  transition: all 0.3s ease-out;
  background:#2796ff ;
}
`;