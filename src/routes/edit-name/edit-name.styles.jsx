import styled from "styled-components";

export const EditNameContainer = styled.div`
  width: 675px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  margin: 0 0 20px 0;
`;

export const EditNameBox = styled.div`
  width: 100%;
  border: 1px solid #d5d9d9;
  border-radius: 12px;
  padding: 20px 26px 28px;
  box-sizing: border-box;
`;

export const Description = styled.p`
  width: 100%;
  margin: 0 0 38px 0;

  font-size: 20px;
  line-height: 1.6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const NameInput = styled.input`
  width: 200px;
  height: 40px;

  box-sizing: border-box;
  padding: 8px 15px;

  border: 1px solid #888c8c;
  border-radius: 12px;

  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #555;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.12);
  }
`;

// export const SaveButton = styled.button`
//   margin-top: 32px;
//   padding: 10px 18px;
//   border: none;
//   border-radius: 22px;

//   background-color: #ffd814;
//   color: #111;

//   font-size: 14px;
//   cursor: pointer;

//   &:hover {
//     background-color: #f7ca00;
//   }

//   &:active {
//     transform: translateY(1px);
//   }
// `;
