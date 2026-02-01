import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

const STALE_TIME_MS = 60 * 1000;

async function prepare(): Promise<void> {
  if (import.meta.env.DEV) {
    const { worker } = await import('@outstaff-frontend/msw');
    await worker.start({ onUnhandledRequest: 'bypass', quiet: true });
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME_MS,
      retry: 1,
    },
  },
});

const router = createRouter({ routeTree });

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Root element #root not found');
}

prepare()
  .then(() => {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </StrictMode>
    );
  })
  .catch((err) => {
    console.error('Failed to start app:', err);
    rootEl.innerHTML = '<p role="alert">Failed to start the app. Check the console.</p>';
  });
