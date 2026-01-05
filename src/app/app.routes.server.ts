import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Dynamic routes handled client-side
  {
    path: 'quiz/:roadmapId',
    renderMode: RenderMode.Client
  },
  {
    path: 'project/:id',
    renderMode: RenderMode.Client
  },
  // All other static routes can be prerendered
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
