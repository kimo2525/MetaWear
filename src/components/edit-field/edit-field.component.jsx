import { Link } from "react-router-dom";
import { EditBTN, EditFieldContainer, ShowUserInfo } from "./edit-field.styles";

const EditField = ({ label, field, accessToken }) => {
  return (
    <EditFieldContainer>
      <ShowUserInfo>
        <strong htmlFor="">{label}:</strong>
        <span>{field}</span>
      </ShowUserInfo>
      <Link to={`${accessToken}`}>Edit</Link>
    </EditFieldContainer>
  );
};

export default EditField;
