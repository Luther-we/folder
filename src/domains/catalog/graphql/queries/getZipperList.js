// les queries étant utiles à plusieurs page
// le nom du fichier est toujours du nom de la constante qu'il contient en camelCase
// une seule query par fichier
// le suffixe list est utilisé dans le cas où la query retourne un tableau d'éléments
// un export default

import { gql } from "@apollo/client";

const GET_ZIPPER_LIST = gql`
  query getZipperList() {
    ...
  }
`;

export default GET_ZIPPER_LIST;
