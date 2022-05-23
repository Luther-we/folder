// ici les fragments utilisés dans le cadre du domaine en question (pour cet exemple, utilisé uniquement dans le domaine catalog par plusieurs éléments de ce domaine)
// le fichier est toujours suffixé de Fragment
// le fichier porte le nom de la contante qu'il contient en camelCase


import { gql } from '@apollo/client';

export const PAGE_INFO_FRAGMENT = gql`
  fragment PageInfoFragment on PageInfo {
    message
    path
  }
`;
