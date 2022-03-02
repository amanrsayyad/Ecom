import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { SliderItems } from '../data/data';
import { mobile } from "../pages/Responcive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
   width: 50px;  
   height: 50px;
   background-color: lightgrey;
   color: #000;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 0;
   bottom: 0;
   left: ${props=> props.direction === "left" && "10px"};
   right: ${props=> props.direction === "right" && "10px"};
   margin: auto;
   cursor: pointer;
   z-index: 10000
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=> props.bg};
`;

const ImgContainer = styled.div`
 height: 100%;
 flex: 1;
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
 flex: 1;
 padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border: 2.5px solid red;
`;

const Slider = () => {
    const [ sliderIndex, setSliderIndex ] = useState(0);

    const handelClick = (direction) => {
        if(direction==="left"){
          setSliderIndex(sliderIndex > 0 ? sliderIndex-1 : 2)
        } else {
          setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0)
        }
    }
  return (
    <Container>       
       <Arrow direction="left" onClick={()=>handelClick("left")}>
          <ArrowLeftOutlinedIcon />
       </Arrow>
       <Wrapper sliderIndex={sliderIndex}>
          {SliderItems.map((item) => (
            <Slide bg={item.bg}>       
           <ImgContainer>
               <Image src={item.img} />
           </ImgContainer>
           <InfoContainer>
               <Title>{item.title}</Title>
               <Desc>{item.desc}</Desc>
               <Button>SHOP NOW</Button>
           </InfoContainer>
           </Slide> 
          ))}
       </Wrapper>
       <Arrow direction="right" onClick={()=>handelClick("right")}>
          <ArrowRightOutlinedIcon />
       </Arrow>
    </Container>
  );
};

export default Slider;
