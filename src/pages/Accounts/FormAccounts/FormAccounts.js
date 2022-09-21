import classNames from 'classnames/bind';
import styles from './FormAccounts.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { ButtonSubmit } from '~/StyledComponent/Button';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function FormAccounts({ form }) {
  const formikRef = useRef(null);

  useEffect(() => {
    // console.log();
    formikRef.current.handleReset();
    // if (!form) {
    // }
  }, [form]);

  return (
    <div className={cx('wrapper')}>
      <Formik
        innerRef={formikRef}
        initialValues={{
          fullname: '',
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        validationSchema={Yup.object({
          fullname: Yup.string().required('Mục này không được để trống!'),
          email: Yup.string()
            .email('Email không hợp lệ')
            .required('Mục này không được để trống!'),
          password: Yup.string()
            .min(8, 'Mật khẩu phải có ít nhất là 8 ký tự!')
            .required('Mục này không được để trống!'),
          passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Mật khẩu không trùng khớp!')
            .required('Mục này không được để trống!'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          {/* Full name */}
          <div className={cx('form-group')}>
            {!form ? (
              <>
                <div className={cx('label-form-accounts')}>
                  <label htmlFor="fullname">Tên của bạn?</label>
                </div>
                <div className={cx('input-block')}>
                  <Field
                    className={cx('input-text')}
                    name="fullname"
                    type="text"
                  />
                </div>
                <div className={cx('error-message')}>
                  <ErrorMessage name="fullname" />
                </div>
              </>
            ) : (
              ''
            )}
          </div>

          {/* Email */}
          <div className={cx('form-group')}>
            <div className={cx('label-form-accounts')}>
              <label htmlFor="email">Địa chỉ Email</label>
            </div>
            <div className={cx('input-block')}>
              <Field className={cx('input-text')} name="email" type="email" />
            </div>
            <div className={cx('error-message')}>
              <ErrorMessage name="email" />
            </div>
          </div>

          {/* Password */}
          <div className={cx('form-group')}>
            <div className={cx('label-form-accounts')}>
              <label htmlFor="password">Mật khẩu</label>
            </div>
            <div className={cx('input-block')}>
              <Field
                className={cx('input-text')}
                name="password"
                type="password"
              />
            </div>
            <div className={cx('error-message')}>
              <ErrorMessage name="password" />
            </div>
          </div>
          {!form ? (
            <>
              <div className={cx('form-group')}>
                <div className={cx('input-block')}>
                  <Field
                    className={cx('input-text')}
                    name="passwordConfirmation"
                    type="password"
                  />
                </div>
                <div className={cx('error-message')}>
                  <ErrorMessage name="passwordConfirmation" />
                </div>
              </div>
            </>
          ) : (
            ''
          )}

          <ButtonSubmit type="submit" className={cx('button-form')}>
            {form ? <span>ĐĂNG NHẬP</span> : <span>ĐĂNG KÝ</span>}
          </ButtonSubmit>
        </Form>
      </Formik>
    </div>
  );
}

export default FormAccounts;
