import 'modern-normalize';
import '../index.css';
import './App.css';

// import ContactList from './ContactList/ContactList';
// import ContactForm from './ContactForm/ContactForm';
// import SearchBox from './SearchBox/SearchBox';
// import { useDispatch } from 'react-redux';
// import { Suspense, useEffect } from 'react';
// import { fetchContacts } from '../redux/contacts/operations';
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

// function App() {
//   const dispatch = useDispatch();

//   // Викликаємо операцію запиту для отримання контактів
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <header>
//         <AppBar />
//       </header>
//       <main>
//       <div className="mainWrap">
//           <ContactForm />
//           <SearchBox />
//           <ContactList />
//         </div>
//       </main>
//     </>
//   );
// }
