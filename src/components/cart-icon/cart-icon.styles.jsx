import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 40px;
  height: 45px;
  padding-left: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  // right: -10px;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
