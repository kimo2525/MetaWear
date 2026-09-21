import styled, { css } from "styled-components";

export const ProductPageComponent = styled.div`
  height: 100%;
  padding: 10px;
  h3,
  p {
    margin-top: 0;
  }
`;

export const ProductInformation = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 20px 0;
`;

export const ShowCase = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 40%;
`;
export const Image = styled.img`
  height: 400px;
  width: 400px;
`;
export const PriceRatingName = styled.div`
  width: 50%;
  p:nth-of-type(2) {
    span:nth-of-type(5),
    span:nth-of-type(6),
    span:nth-of-type(7) {
      margin-right: 15px;
    }
  }
  p:nth-of-type(6) {
    list-style: none;
    ul {
      list-style: none;
      padding-left: 0;
    }
    li {
      letter-spacing: 5px;
    }
  }
`;
export const Item = styled.p`
  width: 100%;
  margin-bottom: 20px;
`;
export const OldPrice = styled.span`
  width: 100%;
  text-decoration: line-through;
  margin-left: 30px;
`;

export const BreadCrumbContainer = styled.div`
  width: 100%;
  /* margin-bottom: 20px; */
  /* color: white; */
  a {
    color: black;

    transition: 200ms;
    &:hover {
      color: #1e51f2;
      text-decoration: underline;
      color: gray;
    }
  }
`;

const sharedStyles = css`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-left: 16px;
  margin: 0;
  li {
    transition: 200ms;
    &:hover {
      cursor: pointer;
      color: #808080;
    }
  }
`;
export const Colors = styled.ul`
  ${sharedStyles}
  li {
    /* width: 100px; */
    margin-right: 40px;
  }
`;
export const Sizes = styled.ul`
  ${sharedStyles}
`;
export const ProductDetails = styled.div`
  height: 100%;
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 20px 0;
  strong {
    margin-bottom: 20px;
    display: block;
  }
  p {
    display: flex;
    justify-content: flex-start;
    margin: 0;
    span {
      margin: 0;
      width: 20%;
    }
  }
`;
