import React from "react";
import LayoutPrsenter from "./LayoutPresenter";

const LayoutContainer: React.FC = (props) => {
  return <LayoutPrsenter>{props.children}</LayoutPrsenter>;
};

export default LayoutContainer;
