import React from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import { mobile } from "../pages/Responcive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Description = styled.div`
   font-size: 25px;
   font-weight: 500;
   margin-bottom: 20px;
   ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
   border: none;
   flex: 8;
   padding-left: 20px;

   &::placeholder {
       font-size: 20px;
       font-family: sans-serif;
       font-style: initial;
       color: red;
   }
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: lightgrey;
  color: red;
`;


const NewsLetter = () => {
  return (
    <Container>
       <Title>Newsletter</Title>
       <Description>Get timely updates from your security products.</Description>
       <InputContainer>
           <Input placeholder='Enter Your Email'/>
           <Button>
             <SendIcon /> 
           </Button>
       </InputContainer>
    </Container>
  )
}

export default NewsLetter;