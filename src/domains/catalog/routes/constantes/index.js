export const groupId = ":groupId";
export const paginationId = ":pagination";
export const product = "product";
export const productId = ":productId";
export const planning = "planning";
export const planningId = ":planningId";

export const newElement = "new";
export const edit = "edit";

export const PRODUCTS_ROUTES = {
  new: newElement,
  groupId: groupId,
  editGroupId: `${groupId}/${edit}`,
  paginationInGroupId: `${groupId}/${paginationId}`,
  newProduct: `${groupId}/${product}/${newElement}`,
  product: `${groupId}/${product}/${productId}`,
  planningId: `${groupId}/${planning}/${planningId}`,
  newPlanning: `${groupId}/${planning}/${newElement}`,
};
