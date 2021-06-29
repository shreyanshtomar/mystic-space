import React, { lazy, Suspense } from 'react';

import { Route } from 'react-router-dom';

const CollectionPage = lazy(() =>
  import('../collection/collection.components')
);

const CollectionsOverview = lazy(() =>
  import(
    '../../components/collections-overview/collections-overview.components'
  )
);

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Suspense fallback={<div>Loading...</div>}>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverview}></Route>
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}></Route>
    </Suspense>
  </div>
);

export default ShopPage;
