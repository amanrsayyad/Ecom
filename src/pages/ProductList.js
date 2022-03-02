import React from 'react';
import styled from 'styled-components';
import Annousment from '../components/Annousment';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/Newsletter';
import Products from '../components/Products';
import { mobile } from "../pages/Responcive";

const Container = styled.div`

`;

const Title = styled.h1`
 margin: 20px;
`;

const FilterContainer = styled.div`
 display: flex;
 justify-content: space-between;
`;

const Filter = styled.div`
 margin: 20px;
 ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option`
 
`;

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Annousment />
        <Title>Security Products</Title>
        <FilterContainer>
          <Filter>
           <FilterText>Filter Products:</FilterText>
           <Select>
               <Option disabled selected>Select Products</Option>
               <Option>Bash Bunny</Option>
               <Option>Shark Jack</Option>
               <Option>O.MG Cabel</Option>
               <Option>Lan Turtel</Option>
           </Select>
          </Filter>
          <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
          </Filter>
        </FilterContainer>
        <Products />
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductList;