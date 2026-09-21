import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { CgProfile } from "react-icons/cg";
import { ReactComponent as MetaIco } from "../../assets/metawear-logo-gray.svg";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  ComponentsOutlet,
} from "./navigation.styles";

import Search from "../../components/search/search.component";
import { fetchCategoriesStartAsync } from "../../store/categories/category.action";
import Footer from "../../components/footer/footer.component";
import ProfileDropDown from "../../components/profile-drop-down/profile-drop-down.component";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <MetaIco
            className="logo"
            styles={{ width: "50px", height: "50px" }}
          />
        </LogoContainer>
        <Search />
        {openProfile && (
          <ProfileDropDown
            openProfile={openProfile}
            setOpenProfile={setOpenProfile}
          />
        )}
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <CgProfile
              onClick={() => {
                setOpenProfile(!openProfile);
              }}
            />
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon setOpenProfile={setOpenProfile} />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <ComponentsOutlet>
        <Outlet />
      </ComponentsOutlet>
      <Footer />
    </Fragment>
  );
};

export default Navigation;
