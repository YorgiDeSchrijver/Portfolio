import { type RouteConfig, index, layout } from '@react-router/dev/routes';

export default [
  layout('routers/_layout.tsx', [index('routes/index.tsx')]),
] satisfies RouteConfig;
