import styled from "styled-components";
import { Link } from "react-router-dom";

export const ComponentsOutlet = styled.div`
  padding: 20px;
`;

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  padding: 0px 20px;
  justify-content: space-between;
  position: sticky;
  z-index: 1000;
  top: 0;
  border-bottom: 1px black solid;
  background-color: white;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 0px;
  display: grid;
  place-items: center;
`;

export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  svg {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
