import classNames from 'classnames/bind';
import styles from './Form.module.scss';

import { ButtonSubmit } from '~/StyledComponent/Button';
import { InputAccounts } from '~/StyledComponent/Input';

const cx = classNames.bind(styles);

function Form({ form }) {
  return (
    <div className={cx('wrapper')}>
      {!form ? (
        <>
          <label className={cx('label-form-accounts')} htmlFor="fullname">
            Tên của bạn?
          </label>
          <InputAccounts
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Họ và tên của bạn"
          />
        </>
      ) : (
        ''
      )}

      <label className={cx('label-form-accounts')} htmlFor="email">
        Email
      </label>
      <InputAccounts
        type="email"
        name="email"
        id="email"
        placeholder="Địa chỉ Email"
      />
      <InputAccounts
        type="text"
        name="password"
        id="password"
        placeholder="Mật khẩu"
      />
      <InputAccounts
        type="text"
        name="passwordConfirmation"
        id="passwordConfirmation"
        placeholder="Nhập lại mật khẩu"
      />
      <ButtonSubmit className={cx('button-form')}>
        {form ? <span>ĐĂNG NHẬP</span> : <span>ĐĂNG KÝ</span>}
      </ButtonSubmit>
    </div>
  );
}

export default Form;
