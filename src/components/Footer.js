import React from 'react';
import styled from 'styled-components';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import MapIcon from '@mui/icons-material/Map';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../pages/Responcive";

const Container = styled.div`
  display: flex;
  /* background-color: #ffcccb;/ */
  background-color: #fcf1ed;
  /* background-color: #f5fafd; */
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocailContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
          <Logo>Hack5</Logo>
          <Desc>
            Hak5's mission is to advance the InfoSec industry. We do this through our award winning podcasts, leading pentest gear, and inclusive community – where all hackers belong.
          </Desc>
          <SocailContainer>
              <SocialIcon color="E60023">
                  <YouTubeIcon />
              </SocialIcon>
              <SocialIcon color="3b5999">
                  <InstagramIcon />
              </SocialIcon>
              <SocialIcon color="55ACEE">
                  <TwitterIcon />
              </SocialIcon>
              <SocialIcon color="000">
                  <GitHubIcon />
              </SocialIcon>
          </SocailContainer>
      </Left>
      <Center>
         <Title>Useful Links</Title>
         <List>
           <ListItem>Home</ListItem>
           <ListItem>Cart</ListItem>
           <ListItem>WIFI PENTESTING</ListItem>
           <ListItem>HOTPLUG ATTACKS</ListItem>
           <ListItem>IMPLANT & REMOTE ACCESS</ListItem>
           <ListItem>FEILD KITS</ListItem>
           <ListItem>MY ACCOUNT</ListItem>
           <ListItem>WISHLIST</ListItem>
           <ListItem>TERMS & CONDITIONS</ListItem>
         </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MapIcon style={{marginRight:"10px"}} />622 West Side Los Angeles 
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{marginRight:"10px"}}/>contact@hack5.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer;