import classNames from 'classnames/bind';
import styles from './Validation.module.scss';
import { useField } from 'formik';

const cx = classNames.bind(styles);

export const InputValidation = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={cx('text-input')} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={cx('error')}>{meta.error}</div>
      ) : null}
    </>
  );
};
