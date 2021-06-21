import React from 'react';

import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collection.components';

import CollectionsOverview from '../../components/collections-overview/collections-overview.components';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
    <Route
      exact
      path={`${match.path}/:collectionId`}
      component={CollectionPage}></Route>
  </div>
);

export default ShopPage;
