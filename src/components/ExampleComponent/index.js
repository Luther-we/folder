import React from "react";
import { PropTypes } from "prop-types";
import { Container } from "./styled";

const ExampleComponent = ({ dataTestId, className }) => {
  return <Container data-testid={dataTestId} className={className}></Container>;
};

ExampleComponent.propTypes = {
  /*
   * Optional dataTestId
   */
  dataTestId: PropTypes.string,
  /*
   * Optional className
   */
  className: PropTypes.string,
};

ExampleComponent.defaultProps = {
  dataTestId: "Button",
  className: null,
};

export default ExampleComponent;
