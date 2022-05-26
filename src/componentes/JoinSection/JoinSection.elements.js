import styled from 'styled-components';

export const JoinSec = styled.div`
 color: #fff;
  padding: 200px 0;
  background: #2F303A;

`;


export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
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

export const Heading = styled.h1`
  margin-bottom: 5px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#f7f8fa')};
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
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
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
 padding: 16px 16px;
 margin-bottom: 32px;
 border: none;
 border-radius: 4px;
`;

export const FormButton = styled.button`
background: #1762A7;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
`;