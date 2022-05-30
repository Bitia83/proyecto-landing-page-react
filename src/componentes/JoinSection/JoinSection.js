import React from 'react';
import { Container } from '../../globalStyles'
import { CirculoD, CirculoE, InfoRow, InfoColumn, Heading, Form, FormWrap, FormContent, FormLabel, FormInput, FormButton, JoinSec  } from './JoinSection.elements'




const joinSection = (formStart) => {
  return (
      <>
          <JoinSec id='join'>
           <Container>
           <CirculoD/>
            <CirculoE/> 
              <InfoRow formStart={formStart}> 
                  <InfoColumn>
                  <Heading>Join the <span> fun.</span></Heading>
                  </InfoColumn>  
                  <InfoColumn>
         <FormWrap>
            <FormContent>
               <Form action="#">
               <FormLabel htmlForm='for'>Name:</FormLabel>  
                  <FormInput typer='name' required /> 
               <FormLabel htmlForm='for'>Email:</FormLabel> 
                  <FormInput typer='email' required />                
               <FormLabel htmlForm='for'>Password:</FormLabel> 
                  <FormInput typer='password' required />   
                <FormButton type='Submit'>Join Now</FormButton>          
                </Form>        
             </FormContent>
            </FormWrap>
          </InfoColumn>      
      </InfoRow>        
          </Container>
          </JoinSec>
    </>
  )
}

export default joinSection
