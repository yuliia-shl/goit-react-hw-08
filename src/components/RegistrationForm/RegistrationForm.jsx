import s from './RegistrationForm.module.css';
import { Field, Form, Formik } from 'formik';

const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const handleSubmit = value => {};

  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field type="text" name="name" placeholder="Enter your name" />
          </label>
          <label className={s.label}>
            <span>E-mail</span>
            <Field type="email" name="email" placeholder="Enter your e-mail" />
          </label>
          <label className={s.label}>
            <span>Password</span>
            <Field type="text" name="password" />
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
