import { Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import fallbackRender from './error-boundary/fallbackRender';
import FooterComponent from './footer';
import HeaderComponent from './header';

const LayoutComponent = () => {
  return (
    <div className="relative w-full h-full">
      <HeaderComponent />
      <div className="pt-16 flex flex-col mb-16">
        <ErrorBoundary fallbackRender={fallbackRender}>
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center items-center">
                <span>Loading...</span>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </div>
      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
