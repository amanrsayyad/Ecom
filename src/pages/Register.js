import React from 'react';
import styled from 'styled-components';
import { mobile } from "../pages/Responcive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ), url("https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "90%" })}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  ${mobile({ marginLeft: "10px" })}
`;

const Title = styled.h1`
 font-size: 24px;
 font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  ${mobile({ padding: "10px" })}
`;

const Agreement = styled.span`
 font-size: 12px;
 margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: red;
  color: #fff;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
              <Input placeholder="name"/>
              <Input placeholder="last name"/>
              <Input placeholder="username"/>
              <Input placeholder="email"/>
              <Input placeholder="password"/>
              <Input placeholder="confirm password"/>
              <Agreement>By an creating an account, I concent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
              <Button>CREATE</Button>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Register;