import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

const navigationMenu = [
    {
        title: 'Tuyển dụng',
        to: '/recruitment/user',
        role: ['user'],
    },
    {
        title: 'Tuyển dụng',
        to: '/recruitment/recruiter',
        role: ['recruiter'],
    },
    {
        title: 'Tạo CV',
        to: '/cv',
        role: ['user'],
    },
    {
        title: 'Làm bài test',
        to: '/test-user',
        role: ['user'],
    },
    {
        title: 'Test Manage',
        to: '/test-manage',
        role: ['recruiter', 'admin'],
    },
    {
        title: 'Blog',
        to: '/blog',
        role: ['user', 'recruiter', 'admin'],
    },
];

function Navigation({ role }) {
    const renderMenu = () => {
        return navigationMenu.map((option, index) => {
            const roleMenu = option.role.some((item) => item === role);
            if (roleMenu) {
                return (
                    <li key={index} className={cx('navigation-item')}>
                        <Link
                            className={cx('navigation-item-link')}
                            to={option.to}
                        >
                            <span>{option.title}</span>
                        </Link>
                    </li>
                );
            }
        });
    };

    return (
        <div className={cx('wrapper')}>
            <ul className={cx('navigation-list')}>{renderMenu()}</ul>
        </div>
    );
}

Navigation.propTypes = {
    role: PropTypes.string.isRequired,
};

export default Navigation;
