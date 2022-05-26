import React from 'react';
import { Container } from '../../globalStyles'
import { InfoRow, InfoColumn, Heading, Form, FormWrap, FormContent, FormLabel, FormInput, FormButton, JoinSec  } from './JoinSection.elements'




const joinSection = (formStart) => {
  return (
      <>
          <JoinSec>
          <Container>
              <InfoRow formStart={formStart}> 
                  <InfoColumn>
                  <Heading>Join The Fun</Heading>
                  </InfoColumn>  
                  <InfoColumn>
         <FormWrap>
            <FormContent>
               <Form action="#">
               <FormLabel htmlForm='for'>Name</FormLabel>  
                  <FormInput typer='name' required /> 
               <FormLabel htmlForm='for'>Email</FormLabel> 
                  <FormInput typer='email' required />                
               <FormLabel htmlForm='for'>Password</FormLabel> 
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
