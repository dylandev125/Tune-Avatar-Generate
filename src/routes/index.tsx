import AppLayout from 'layout/AppLayout';
import { lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const WelcomePage = lazy(() => import('views/WelcomePage'));
const MintPage = lazy(() => import('views/MintPage'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AppLayout>
          <Routes>
            <Route path='/' element={<WelcomePage/>}></Route>
            {/* <Route path='/' element={<Navigate to="/launchpad" replace />}></Route> */}
            <Route path='/mint' element={<MintPage/>}></Route>

          </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
