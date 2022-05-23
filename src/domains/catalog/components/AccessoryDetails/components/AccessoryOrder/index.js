// Un component controller est appelé pour gérer l'affichage conditionnel d'un élément

import React from "react";
import { PropTypes } from "prop-types";
import useAccessoryOrderController from "src/domains/AccessoryOrder/hooks/useAccessoryOrderController";
import useAccessoryOrderControllerForm from "src/domains/AccessoryOrder/hooks/useAccessoryOrderControllerForm";
import { Container } from "./styled";

const AccessoryOrder = ({ isInitialEditable }) => {
  const { isEditable, toggleEditable } =
    useAccessoryOrderController(isInitialEditable);

  const { getInput } = useAccessoryOrderControllerForm();

  return (
    <Container data-testid="AccessoryOrder">
      <button onClick={toggleEditable}></button>
      {getInput()}
      {isEditable ? <AccessoryOrderEdit /> : <AccessoryOrderDisplay />}
    </Container>
  );
};

AccessoryOrder.propTypes = {
  /*
   * Optional isInitialEditable
   */
  isInitialEditable: PropTypes.bool,
};

AccessoryOrder.defaultProps = {
  isInitialEditable: false,
};

export default AccessoryOrder;
