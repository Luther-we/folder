// Types commun au domaine actuel

import PropTypes from 'prop-types';
import SelectItem from 'src/domains/core/types/selectItem';

const AccessoryListElementTypes = PropTypes.exact({
  /*
   * Optional quantity
   */
  quantity: PropTypes.number,
  /*
   * Optional type
   */
  type: SelectItem,
  /*
   * Optional price
   */
  price: PropTypes.number,
  /*
   * Optional priceSpec
   */
  priceSpec: SelectItem,
  /*
   * Optional receivedSite
   */
  receivedSite: SelectItem,
  /*
   * Optional adress
   */
  adress: SelectItem,
  /*
   * Optional receivedDate
   */
  receivedDate: PropTypes.instanceOf(Date),
});

AccessoryListElementTypes.defaultProps = {
  quantity: null,
  type: null,
  price: null,
  priceSpec: null,
  receivedSite: null,
  adress: null,
  receivedDate: null,
};

export default AccessoryListElementTypes;
