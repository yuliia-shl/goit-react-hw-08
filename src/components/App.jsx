import 'modern-normalize';
import '../index.css';

import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { refreshUser } from '../redux/auth/operations';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import PrivateRoute from './PrivateRoute';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <>
      {/* <Suspense fallback={<h3>Loading data...</h3>}> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* </Suspense> */}
    </>
  );
}

export default App;
