import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

import { applyActionCode, reload } from "firebase/auth";
import { auth, updateUserDocument } from "../../utils/firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentUser } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";

const EmailActionHandler = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [searchParams] = useSearchParams();

  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  const mode = searchParams.get("mode");
  const oobCode = searchParams.get("oobCode");

  console.log(oobCode, "oobCode");
  useEffect(() => {
    const handleAction = async () => {
      if (!oobCode) {
        setStatus("invalid");
        return;
      }

      try {
        await applyActionCode(auth, oobCode);
        console.log(auth.currentUser, "USER AFTER APPLY ACTION CODE");
        const user = auth.currentUser;

        if (user) {
          await reload(user);

          const updatedEmail = user.email;

          const updatedUser = await updateUserDocument(user.uid, {
            email: updatedEmail,
          });
          console.log(updatedUser, "updatedUser");
          dispatch(setCurrentUser(updatedUser));
        }

        setStatus("success");
      } catch (error) {
        console.error(error);

        setError(error.message);
        setStatus("error");
      }
    };

    handleAction();
  }, [mode, oobCode]);

  if (status === "loading") {
    return <p>Verifying your email...</p>;
  }

  if (status === "success") {
    return (
      <div>
        <h2>Email address changed</h2>

        <p>Your new email address has been verified successfully.</p>

        <Link to="/profile">Return to your profile</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Unable to verify email</h2>

      <p>This verification link is invalid or has expired.</p>
    </div>
  );
};

export default EmailActionHandler;
