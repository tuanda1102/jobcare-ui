import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Loading from '~/components/Loading/Loading';
import {
    accountsStatusSelector,
    isAuthSelector,
} from '~/redux/Selectors/authSelector';
import styles from './Accounts.module.scss';
import Container from './Container/Container';

const cx = classNames.bind(styles);

export default function Accounts() {
    const status = useSelector(accountsStatusSelector);
    const navigate = useNavigate();

    const isAuth = useSelector(isAuthSelector);

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
