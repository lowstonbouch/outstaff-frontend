/* eslint-disable */
// @ts-nocheck

import { createRootRoute, createRoute, notFound } from '@tanstack/react-router';
import { getArticle } from '@outstaff-frontend/api-client';
import { RootLayout } from './routes/__root';
import { HomePage } from './routes/index';
import { ArticlePage } from './routes/articles.$id';
import { RouteError } from './routes/route-error';
import { RootNotFound, ArticleNotFound } from './routes/route-not-found';

const rootRoute = createRootRoute({
  component: RootLayout,
  errorComponent: RouteError,
  notFoundComponent: RootNotFound,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const articlesIdRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/articles/$id',
  component: ArticlePage,
  loader: async ({ params }) => {
    const data = await getArticle({ path: { id: params.id }, responseStyle: 'data' });
    if (data == null) throw notFound();
    return data;
  },
  errorComponent: RouteError,
  notFoundComponent: ArticleNotFound,
});

const routeTree = rootRoute.addChildren([indexRoute, articlesIdRoute]);

export { routeTree, indexRoute, articlesIdRoute };
