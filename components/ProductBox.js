import React, { useContext } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0;
  text-decoration: none;
  color: inherit;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    text-align: left;
  }
`;

export default function ProductBox({ _id, title, description, price }) {
  const uri = "/product/" + _id;
  const { addProduct } = useContext(CartContext);

  return (
    <ProductWrapper>
      <WhiteBox href={uri}>
        <div>
          <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={uri}>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Button
            onClick={() => {
              addProduct(_id);
            }}
            primary
            outline
            block
          >
            Add to Cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
