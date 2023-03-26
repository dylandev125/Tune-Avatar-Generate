import AppLayout from 'layout/AppLayout';
import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const WelcomePage = lazy(() => import('views/WelcomePage'));
const PromptPage = lazy(() => import('views/PromptPage'));
const CustomPage = lazy(() => import('views/CustomPage'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      {/* <AppLayout> */}
          <Routes>
            <Route path='/' element={<Navigate to='/tune' />} />
            <Route path='/custom' element={<CustomPage />} />
            <Route path='/tune' element={<WelcomePage/>}></Route>
            <Route path='/prompt' element={<PromptPage/>}></Route>
          </Routes>
      {/* </AppLayout> */}
    </BrowserRouter>
  );
};

export default AppRoutes;
