import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Handle cross-origin script errors (e.g. Disqus embed script loading) gracefully
if (typeof window !== 'undefined') {
  const originalOnError = window.onerror;
  window.onerror = function (msg, url, lineNo, columnNo, error) {
    const msgStr = String(msg || '');
    if (msgStr.includes('Script error') || (url && url.includes('disqus'))) {
      return true; // Suppress cross-origin script errors from triggering runtime error overlays
    }
    if (originalOnError) {
      return originalOnError.call(window, msg, url, lineNo, columnNo, error);
    }
    return false;
  };

  window.addEventListener(
    'error',
    (event: ErrorEvent) => {
      const msgStr = String(event.message || '');
      if (msgStr.includes('Script error') || event.filename?.includes('disqus')) {
        event.stopImmediatePropagation();
        event.preventDefault();
      }
    },
    true
  );

  window.addEventListener(
    'unhandledrejection',
    (event: PromiseRejectionEvent) => {
      const reasonStr = String(event.reason || '');
      if (reasonStr.includes('Script error') || reasonStr.includes('disqus')) {
        event.preventDefault();
      }
    },
    true
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);


