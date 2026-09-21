import { useSelector } from "react-redux";
import BreadCrumb from "../../components/bread-crumb/bread-crumb.compnent";
import { selectCurrentUser } from "../../store/user/user.selector";
import { Route, Routes } from "react-router-dom";
import ProfilePageComponent from "../../components/profile-page-component/profile-page.component";
import EditName from "../../components/edit-account-name/edit-account-name.component";

const ProfilePage = () => {
  const links = [];

  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser, "currentUser");

  return (
    <Routes>
      <Route index element={<ProfilePageComponent />} />
      <Route
        path="appActionToken"
        element={<EditName currentName={currentUser.displayName} />}
      />
    </Routes>
  );
};

export default ProfilePage;
