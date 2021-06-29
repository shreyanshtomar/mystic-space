import React, { lazy, Suspense } from 'react';
//import Directory from '../../components/directory/directory.components';
import './homepage.styles.scss';

const Directory = lazy(() =>
  import('../../components/directory/directory.components')
);

const HomePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='homepage'>
        <Directory />
      </div>
    </Suspense>
  );
};

export default HomePage;
