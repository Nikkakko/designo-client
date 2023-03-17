import React from 'react';
import styled from 'styled-components';
import {
  Outlet,
  RouterProvider,
  Link,
  ReactRouter,
  Route,
  RootRoute,
} from '@tanstack/react-router';
import { About, Contact, Design, Home, Location } from './pages';
import { Footer, Header } from './layout';
import { device } from './mediaQueries';

const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const designRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/design/$category',
  component: Design,
});
const locationRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/location',
  component: Location,
});
const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  designRoute,
  locationRoute,
  contactRoute,
]);

const router = new ReactRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function Root() {
  return (
    <Main>
      <Header />
      <Outlet />
      <Footer />
    </Main>
  );
}

const App = () => {
  return <RouterProvider router={router} />;
};

const Main = styled.main`
  width: 100%;
  min-height: 100vh;

  /* @media ${device.tablet} {
    padding: 0px 40px;
  } */
`;

export default App;
