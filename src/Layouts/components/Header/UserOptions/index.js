import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './UserOptions.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function UserOptions({ user }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-left')}>
                    {user.avatar ? (
                        <img
                            className={cx('avatar')}
                            src={user.avatar}
                            alt="Avatar"
                        />
                    ) : (
                        <img
                            className={cx('avatar')}
                            src={images.avatarDefault}
                            alt="Avatar"
                        />
                    )}
                </div>
                <div className={cx('header-right')}>
                    <div className={cx('user-name')}>{user.fullname}</div>
                    <div className={cx('user-email')}>{user.email}</div>
                </div>
            </div>
            <ul className={cx('option')}>
                <hr />
                <ul className={cx('option-list')}>
                    <li className={cx('option-item')}>
                        <Link to="/">Trang cá nhân</Link>
                    </li>
                </ul>

                <hr />
                <ul className={cx('option-list')}>
                    <li className={cx('option-item')}>
                        <Link to="/">Viết blog</Link>
                    </li>
                    <li className={cx('option-item')}>
                        <Link to="/">Bài viết đã lưu</Link>
                    </li>
                </ul>

                <hr />
                <ul className={cx('option-list')}>
                    <li className={cx('option-item')}>
                        <Link to="/">Cài đặt</Link>
                    </li>
                    <li className={cx('option-item')}>
                        <Link to="/">Đăng xuất</Link>
                    </li>
                </ul>
            </ul>
        </div>
    );
}

UserOptions.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserOptions;
