import { Link } from "react-router-dom";
import { BreadCrumbContainer } from "./bread-crumb.styles";

const BreadCrumb = ({ links }) => {
  return (
    <BreadCrumbContainer>
      {links.map((ele, idx) => (
        <>
          <Link to={ele.href}>{ele.label}</Link>
          {idx < links.length - 1 && " / "}
        </>
      ))}
    </BreadCrumbContainer>
  );
};

export default BreadCrumb;
