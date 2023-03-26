import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import AppRoutes from 'routes';
import ErrorPage from 'views/Error';
import SuspensePage from 'views/Suspense';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <Suspense fallback={<SuspensePage />}>
          <AppRoutes />
        </Suspense>
      </ErrorBoundary>
  );
}

export default App;
