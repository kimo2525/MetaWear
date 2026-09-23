import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";
import DC_SHOP_DATA2 from "./DC_SHOP_DATA2";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  addCollectionAndDocuments,
} from "./utils/firebase/firebase.utils";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.action";
import ProductPage from "./routes/product/product.component";
import Footer from "./components/footer/footer.component";
import ProfilePage from "./routes/profile-page/profile-page";
import { getDoc } from "firebase/firestore";
import EmailActionHandler from "./routes/email-action-handler/email-action-handler";

const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   addCollectionAndDocuments("metas", DC_SHOP_DATA2);
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        const userDocRef = await createUserDocumentFromAuth(user);
        const userSnapshot = await getDoc(userDocRef);

        const userData = {
          uid: user.uid,
          ...userSnapshot.data(),
        };
        dispatch(setCurrentUser(userData));
      } else {
        dispatch(setCurrentUser(null));
      }
      // dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="youraccount/*" element={<ProfilePage />} />
        <Route path="auth/action" element={<EmailActionHandler />} />
      </Route>
    </Routes>
  );
};

export default App;
