import classNames from 'classnames/bind';
import styles from './Accounts.module.scss';
import Container from './Container/Container';

const cx = classNames.bind(styles);

export default function Accounts() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('background-img')}
        src="../../assets/images/background-recruitment.jpg"
        alt="background-recruitment"
      />

      <Container />
    </div>
  );
}
