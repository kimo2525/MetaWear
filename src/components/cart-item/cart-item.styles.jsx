import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  margin-bottom: 15px;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 10px;

  span {
    font-size: 16px;
  }
`;
