import { useSelector } from "react-redux";
import BreadCrumb from "../../components/bread-crumb/bread-crumb.compnent";
import { selectCurrentUser } from "../../store/user/user.selector";
import { Route, Routes } from "react-router-dom";
import ProfilePageComponent from "../../components/profile-page-component/profile-page.component";
import EditName from "../edit-name/edit-name";
import EditEmail from "../edit-email/edit-email";

const ProfilePage = () => {
  const links = [];

  const currentUser = useSelector(selectCurrentUser);

  return (
    <Routes>
      <Route index element={<ProfilePageComponent />} />
      <Route
        path="name/:appActionToken"
        element={<EditName currentName={currentUser?.displayName || ""} />}
      />
      <Route
        path="email/:editRequest"
        element={<EditEmail currentName={currentUser?.email || ""} />}
      />
    </Routes>
  );
};

export default ProfilePage;
