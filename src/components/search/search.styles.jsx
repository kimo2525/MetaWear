import styled from "styled-components";


export const BackDropStyle = styled.div`
  display: block;
  top: 70px;
  left: 0;
  position: fixed;
  zindex: 10;
  background-color: black;
  opacity: 0.45;
  width: 100vw;
  height: 100vh;
`;


export const SearchResults = styled.div`
  display: block;
  position: absolute;
  zindex: 12;
  background-color: white;
  width: 300px;
  height: 300px;
  border: 1px solid black;
`;
export const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  &::-webkit-search-cancel-button {
    // -webkit-appearance: none;
    height: 45px;
    width: 45px;
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const SearchResultItem = styled.p`
  width: 100%;
  margin: 0;
  display: flex;
  position: relative;
  align-items: center;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
  padding: 5px;
  font-weight: bold;
  &:hover {
    background-color: rgb(224, 224, 224);
  }
`;
