import { BrowserRouterProps } from 'react-router-dom';

export interface RouteRecord {
  path: string;
  meta?: {
    /** Name / title of the route */
    title?: string;
  };
  /** Path which is redirect to. */
  redirect?: string;
  /** React component of the router, which is loaded lazily */
  Component?: React.FC<BrowserRouterProps> | (() => any);
  children?: RouteRecord[];
}
