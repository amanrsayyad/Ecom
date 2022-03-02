import React from 'react';
import styled from "styled-components";
import { categories } from '../data/data';
import CategoriItem from './CategoriItem';
import { mobile } from "../pages/Responcive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories = () => {
  return (
    <Container>
       {categories.map((item)=> (
          <CategoriItem item={item} key={item.id}/>
       ))}
    </Container>
  )
}

export default Categories;