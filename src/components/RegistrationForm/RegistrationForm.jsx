import { useDispatch } from 'react-redux';
import s from './RegistrationForm.module.css';
import { Field, Form, Formik } from 'formik';
import { register } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        navigate('/contacts');
      })
      .catch(() => {
        // TODO - Change for toaster
        alert('This email is already registered.');
      });
    options.resetForm();
  };

  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field type="text" name="name" placeholder="Enter your name" required />
          </label>
          <label className={s.label}>
            <span>E-mail</span>
            <Field type="email" name="email" placeholder="Enter your e-mail" required />
          </label>
          <label className={s.label}>
            <span>Password</span>
            <Field type="password" name="password" placeholder="Enter your password" required />
          </label>
          <button type="submit" className={s.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;
