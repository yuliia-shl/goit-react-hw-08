import s from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { register } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

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
        toast(t => (
          <div className={s.errorWrap}>
            <span className={s.error}>
              This email is already registered, try to{' '}
              <a href="/login" className={s.errorLink}>
                Log in
              </a>
            </span>
            <button onClick={() => toast.dismiss(t.id)} className={s.errorBtn}>
              Dismiss
            </button>
          </div>
        ));
      });
    options.resetForm();
  };

  return (
    <>
      {/* TODO Додати валідацію форми  */}
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
