import { render, Suspense } from 'solid-js/web';
import { Router } from '@solidjs/router';
import { HopeProvider } from '@hope-ui/solid';
import { App } from './App';
import './index.css';

const main = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser');
    worker.start();
  }

  const root = document.getElementById('root');
  render(
    () => (
      <HopeProvider>
        <Router>
          <Suspense>
            <App />
          </Suspense>
        </Router>
      </HopeProvider>
    ),
    root!
  );
};

main();
