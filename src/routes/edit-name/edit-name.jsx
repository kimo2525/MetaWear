import { useEffect, useState } from "react";

import {
  EditNameContainer,
  Title,
  EditNameBox,
  Description,
  Form,
  Label,
  NameInput,
} from "./edit-name.styles";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";

const EditName = ({ currentName = "" }) => {
  const [name, setName] = useState(currentName);

  useEffect(() => {
    setName(currentName);
  }, [currentName]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("New name:", name);

    // Firestore update will go here
  };

  return (
    <EditNameContainer>
      <Title>Change your name</Title>
      <EditNameBox>
        <Description>
          If you want to change the name associated with your account, you may
          do so below. Be sure to click the <strong>Save Changes</strong> button
          when you are done.
        </Description>

        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">New name</Label>
          <NameInput
            id="name"
            name="name"
            type="text"
            value={name ? name : ""}
            onChange={handleChange}
          />
          <br />
          <Button buttonType={BUTTON_TYPE_CLASSES.edit} type="submit">
            Save changes
          </Button>
          {/* <SaveButton type="submit">Save changes</SaveButton> */}
        </Form>
      </EditNameBox>
    </EditNameContainer>
  );
};

export default EditName;
