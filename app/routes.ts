import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  layout('routes/_layout.tsx', [
    index('routes/_index.tsx'),
    route('about', 'routes/about.tsx'),
    route('projects', 'routes/projects.tsx'),
    route('contacts', 'routes/contacts.tsx'),
  ]),
] satisfies RouteConfig;
