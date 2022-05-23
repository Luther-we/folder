import React from "react";
import { Navigate, Route } from "react-router-dom";
import RequireAuth from "services/router/RequiredAuth";
import { GLOBAL_ROUTES } from "src/domains/core/constants";
import { PRODUCTS_ROUTES } from "./constantes";

const ProductGroupList = React.lazy(() =>
  import("src/domains/product/pages/ProductGroupList")
);

const ProductGroupDetail = React.lazy(() =>
  import("src/domains/product/pages/ProductGroupDetail")
);

const ProductDetails = React.lazy(() =>
  import("src/domains/product/pages/ProductDetails")
);

const ProductGroupNew = React.lazy(() =>
  import("src/domains/product/pages/ProductGroupNew")
);

const ProductNew = React.lazy(() =>
  import("src/domains/product/pages/ProductNew")
);

const ProductGroupEdit = React.lazy(() =>
  import("src/domains/product/pages/ProductGroupEdit")
);

const WorkshopCapacityBooking = React.lazy(() =>
  import("src/domains/product/pages/WorkshopCapacityBooking")
);

const productRoutes = () => {
  return (
    <Route path={GLOBAL_ROUTES.PRODUCTS}>
      <Route
        index
        element={
          <RequireAuth>
            <ProductGroupList />
          </RequireAuth>
        }
      />

      <Route
        path={PRODUCTS_ROUTES.new}
        element={
          <RequireAuth>
            <ProductGroupNew />
          </RequireAuth>
        }
      />
      <Route
        path={PRODUCTS_ROUTES.groupId}
        element={
          <RequireAuth>
            <ProductGroupDetail />
          </RequireAuth>
        }
      />
      <Route
        path={PRODUCTS_ROUTES.newProduct}
        element={
          <RequireAuth>
            <ProductNew />
          </RequireAuth>
        }
      />
      <Route
        path={PRODUCTS_ROUTES.productId}
        element={
          <RequireAuth>
            <ProductDetails />
          </RequireAuth>
        }
      />
      <Route
        path={PRODUCTS_ROUTES.paginationInGroupId}
        element={
          <RequireAuth>
            <ProductGroupDetail />
          </RequireAuth>
        }
      />
      <Route
        path={PRODUCTS_ROUTES.editGroupId}
        element={
          <RequireAuth>
            <ProductGroupEdit />
          </RequireAuth>
        }
      />
      <Route
        path={PRODUCTS_ROUTES.planningId}
        element={
          <RequireAuth>
            <WorkshopCapacityBooking />
          </RequireAuth>
        }
      />

      <Route
        path="*"
        element={<Navigate to={GLOBAL_ROUTES.PRODUCTS} replace />}
      />
    </Route>
  );
};

export default productRoutes;
