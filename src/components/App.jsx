import 'modern-normalize';
import '../index.css';

// import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
// import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
// import LoginPage from '../pages/LoginPage/LoginPage';
import Layout from './Layout/Layout';
import ContactsPage from '../pages/ContactsPage/ContactsPage';

function App() {
  return (
    <>
      {/* <HomePage />
        <RegistrationPage />
        <LoginPage /> */}
      {/* <Suspense fallback={<h3>Loading data...</h3>}> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
      {/* </Suspense> */}
    </>
  );
}

export default App;
