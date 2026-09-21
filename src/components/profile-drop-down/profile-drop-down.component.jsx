import { NavLink } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ProfileDropDownContainer } from "./profile-drop-down.styles";

const ProfileDropDown = ({ setOpenProfile, openProfile }) => {
  return (
    <ProfileDropDownContainer>
      <NavLink
        onClick={() => {
          setOpenProfile(!openProfile);
        }}
        as="span"
        to="/youraccount"
      >
        Account
      </NavLink>
      <NavLink
        as="span"
        onClick={() => {
          signOutUser();
          setOpenProfile(false);
        }}
      >
        SIGN OUT
      </NavLink>
    </ProfileDropDownContainer>
  );
};

export default ProfileDropDown;
