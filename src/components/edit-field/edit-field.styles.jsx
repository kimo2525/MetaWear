import styled from "styled-components";

export const EditFieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  a {
    width: 70px;
    height: 30px;
    border: 1px solid black;
    text-align: center;
    vertical-align: center;
    border-radius: 999px;
    padding: 2px;
    transition: 200ms;
    &:hover {
      background-color: rgb(224, 224, 224);
    }
  }
`;

export const ShowUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EditBTN = styled.button`
  width: 70px;
  height: 30px;
`;
