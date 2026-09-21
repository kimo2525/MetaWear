import styled from "styled-components";

export const BreadCrumbContainer = styled.div`
  width: 100%;

  a {
    color: black;

    transition: 200ms;
    &:hover {
      color: #1e51f2;
      text-decoration: underline;
      color: gray;
    }
  }
`;
