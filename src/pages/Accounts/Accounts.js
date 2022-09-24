import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import Loading from '~/components/Loading/Loading';
import {
    accountsStatusSelector,
    isAuthSelector,
} from '~/redux/Selectors/authSelector';
import styles from './Accounts.module.scss';
import Container from './Container/Container';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function Accounts() {
    const navigate = useNavigate();

    const status = useSelector(accountsStatusSelector);
    const isAuth = useSelector(isAuthSelector);

    if (isAuth) {
        navigate('/profile', { replace: true });
    }

    return (
        <div className={cx('wrapper')}>
            {status === 'pending' ? <Loading /> : ''}
            <img
                className={cx('background-img')}
                src="../../assets/images/background-recruitment.jpg"
                alt="background-recruitment"
            />

            <Container />
        </div>
    );
}
