import { lazy } from 'react';
import { RouteRecord } from './type';

const routeModuleList: RouteRecord[] = [];

const Router: RouteRecord[] = [
  {
    path: '/',
    Component: lazy(() => import('@/pages/Home')),
  },
];

export default Router;
