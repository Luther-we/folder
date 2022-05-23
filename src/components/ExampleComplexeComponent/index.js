import React from "react";
import { PropTypes } from "prop-types";
import { Container } from "./styled";

const ExampleComplexeComponent = ({ dataTestId, className }) => {
  return <Container data-testid={dataTestId} className={className}></Container>;
};

ExampleComplexeComponent.propTypes = {
  /*
   * Optional dataTestId
   */
  dataTestId: PropTypes.string,
  /*
   * Optional className
   */
  className: PropTypes.string,
};

ExampleComplexeComponent.defaultProps = {
  dataTestId: "TimerSelect",
  className: null,
};

export default ExampleComplexeComponent;
