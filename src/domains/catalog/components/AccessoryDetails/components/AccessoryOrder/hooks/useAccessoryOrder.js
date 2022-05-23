// placer ici les éléments de logique propre à AccessoryOrderController

import { useState } from "react";

const useAccessoryOrder = ({ isInitialEditable }) => {
  const [isEditable, setIsEditable] = useState(isInitialEditable);

  const toggleEditable = () => {
    setIsEditable((prev) => !prev.isEditable);
  };

  return {
    isEditable,
    toggleEditable,
  };
};

export default useAccessoryOrder;
