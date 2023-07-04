import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const CustomLink = ({ children, to, variant = "secondary", ...props }) => {
  return (
    <Link to={to}>
      <Button {...props} variant={variant}>
        {children}
      </Button>
    </Link>
  );
};

export default CustomLink;
