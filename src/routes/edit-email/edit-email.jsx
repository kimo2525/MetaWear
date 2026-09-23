import { useState } from "react";

import { requestEmailChange } from "../../utils/firebase/firebase.utils";

import {
  EditEmailContainer,
  EditEmailBox,
  StepText,
  Title,
  CurrentEmailContainer,
  CurrentEmailLabel,
  CurrentEmail,
  Form,
  Label,
  EmailInput,
} from "./edit-email.styles";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";

const EditEmail = ({ currentEmail = "" }) => {
  const [newEmail, setNewEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const changeEmailHandler = async (event) => {
    event.preventDefault();

    try {
      await requestEmailChange(newEmail);
      setEmailSent(true);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };
  if (emailSent) {
    return (
      <EditEmailContainer>
        <EditEmailBox>
          <StepText>Step 2 of 2</StepText>

          <Title>Check your email</Title>

          <p>We sent a verification link to:</p>

          <strong>{newEmail}</strong>
        </EditEmailBox>
      </EditEmailContainer>
    );
  }

  return (
    <EditEmailContainer>
      <EditEmailBox>
        <StepText>Step 1 of 2</StepText>

        <Title>Change your email address</Title>

        <CurrentEmailContainer>
          <CurrentEmailLabel>Current email address:</CurrentEmailLabel>

          <CurrentEmail>{currentEmail}</CurrentEmail>
        </CurrentEmailContainer>

        <Form onSubmit={changeEmailHandler}>
          <Label htmlFor="newEmail">New email address</Label>

          <EmailInput
            id="newEmail"
            name="newEmail"
            type="email"
            value={newEmail}
            onChange={(event) => setNewEmail(event.target.value)}
            required
          />
          <br />
          <Button buttonType={BUTTON_TYPE_CLASSES.edit} type="submit">
            Change email address
          </Button>
        </Form>
      </EditEmailBox>
    </EditEmailContainer>
  );
};

export default EditEmail;
