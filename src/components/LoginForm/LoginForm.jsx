import s from './LoginForm.module.css';
import { Field, Form, Formik } from 'formik';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = value => {};

  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>E-mail</span>
            <Field type="email" name="email" placeholder="Enter your e-mail" required />
          </label>
          <label className={s.label}>
            <span>Password</span>
            <Field type="password" name="password" placeholder="Enter your password" required />
          </label>
          <button type="submit" className={s.btn}>
            Log In
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
