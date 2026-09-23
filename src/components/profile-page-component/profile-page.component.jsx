import { useSelector } from "react-redux";
import BreadCrumb from "../bread-crumb/bread-crumb.compnent";
import EditField from "../edit-field/edit-field.component";

import {
  InnerComponentContainer,
  ProfilePageComponentContainer,
} from "./profile-page-compnent.styles";

import { selectCurrentUser } from "../../store/user/user.selector";

const ProfilePageComponent = () => {
  const links = [];

  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser, "currentUser");
  return (
    <ProfilePageComponentContainer>
      <InnerComponentContainer>
        <EditField
          accessToken={"name/appActionToken"}
          label="Name"
          field={
            currentUser?.displayName ? currentUser?.displayName : "Your Name"
          }
        />
        <hr />
        <EditField
          accessToken={"email/editRequest"}
          label="Email"
          field={
            currentUser?.email ? currentUser?.email : "something@something.com"
          }
        />
        <hr />
        <EditField
          label="Mobile number"
          field={
            currentUser?.mobileNumber ? currentUser?.mobileNumber : "023456789"
          }
        />
        <hr />
        <EditField label="Password" field="***********" />
        <hr />
        <EditField
          label="Address"
          field={
            currentUser?.address
              ? currentUser?.address
              : "123 asdasdasds asdasasd, 21321"
          }
        />
      </InnerComponentContainer>
    </ProfilePageComponentContainer>
  );
};

export default ProfilePageComponent;
