// placer ici tous les éléments lié au formulaire
// le formulaire d'un élément de formulaire est crée dans l'un des parents, utilisé useFormContext

import { useFormContext } from "react-hook-form";

const useAccessoryOrderForm = () => {
  const { control } = useFormContext();

  const getInput = () => {
    // ...
  };

  return { getInput };
};

export default useAccessoryOrderForm;
