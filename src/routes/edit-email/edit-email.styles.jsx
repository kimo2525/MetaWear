import styled from "styled-components";

export const EditEmailContainer = styled.div`
  width: 550px;
  margin: 40px auto;
`;

export const EditEmailBox = styled.div`
  width: 100%;
  padding: 30px 38px;

  border: 1px solid #d5d9d9;
  border-radius: 12px;

  box-sizing: border-box;
`;

export const StepText = styled.p`
  margin: 0 0 22px 0;

  font-size: 18px;
  font-weight: 400;
`;

export const Title = styled.h1`
  margin: 0 0 24px 0;

  font-size: 32px;
  font-weight: 700;
`;

export const CurrentEmailContainer = styled.div`
  margin-bottom: 26px;
`;

export const CurrentEmailLabel = styled.p`
  margin: 0 0 4px 0;

  font-size: 17px;
  font-weight: 700;
`;

export const CurrentEmail = styled.p`
  margin: 0;

  font-size: 17px;
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 6px;

  font-size: 17px;
  font-weight: 700;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 48px;

  padding: 8px 12px;

  border: 1px solid #888c8c;
  border-radius: 10px;

  box-sizing: border-box;

  font-size: 17px;
  outline: none;

  &:focus {
    border-color: #555;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.12);
  }
`;

export const ChangeEmailButton = styled.button`
  width: 100%;
  height: 46px;

  margin-top: 34px;

  border: none;
  border-radius: 24px;

  background-color: #ffd814;
  color: #111;

  font-size: 17px;

  cursor: pointer;

  &:hover {
    background-color: #f7ca00;
  }

  &:active {
    transform: translateY(1px);
  }
`;
