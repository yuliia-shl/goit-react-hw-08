import 'modern-normalize';
import '../index.css';
import './App.css';

import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import { useDispatch } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import Navigation from './Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';

function App() {
  const dispatch = useDispatch();

  // Викликаємо операцію запиту для отримання контактів
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <header>
        <Navigation />
        <div className="mainWrap">
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      </header>
      <main>
        <HomePage />
        <RegistrationPage />
        <LoginPage />
        {/* <Suspense fallback={<h3>Loading data...</h3>}>
          <Routes>
            <Route path="/" element={HomePage} />
          </Routes>
        </Suspense> */}
      </main>
    </>
  );
}

export default App;
