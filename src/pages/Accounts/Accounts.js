import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import config from '~/config';
import Loading from '~/components/Loading/Loading';
import {
    accountsStatusSelector,
    isAuthSelector,
} from '~/redux/Selectors/authSelector';
import styles from './Accounts.module.scss';
import Container from './Container/Container';
import images from '~/assets/images';

const cx = classNames.bind(styles);

export default function Accounts() {
    const navigate = useNavigate();

    const status = useSelector(accountsStatusSelector);
    const isAuth = useSelector(isAuthSelector);

    if (isAuth) {
        navigate(config.routes.profile, { replace: true });
    }

    return (
        <div className={cx('wrapper')}>
            {status === 'pending' ? <Loading /> : ''}
            <img
                className={cx('background-img')}
                src={images.backgroundAccounts}
                alt="background-recruitment"
            />

            <Container />
        </div>
    );
}
