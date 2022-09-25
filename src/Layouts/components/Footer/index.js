import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import images from '~/assets/images';
import config from '~/config';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Row>
                    <Col lg={5}>
                        <div className={cx('footer-left')}>
                            <Link to={config.routes.home}>
                                <img
                                    className={cx('logo')}
                                    src={images.logoL}
                                    alt="Logo"
                                />
                            </Link>
                            <div className={cx('text-item')}>
                                Hotline: 076 3030 364
                            </div>
                            <div className={cx('text-item')}>
                                Email: hotro@viec.co
                            </div>
                            <div className={cx('text-item')}>
                                Trụ sở: 03 Trưng Nữ Vương, Bình Hiên, Hải Châu,
                                Đà Nẵng
                            </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <Row>
                            <Col lg={4}>
                                <h3 className={cx('title')}>Công ty</h3>
                                <div className={cx('text-item')}>
                                    <Link to="/vechungtoi">Về chúng tôi</Link>
                                </div>
                                <div className={cx('text-item')}>
                                    <Link to="/vechungtoi">Blog</Link>
                                </div>
                                <div className={cx('text-item')}>
                                    <Link to="/vechungtoi">Tuyển dụng</Link>
                                </div>
                                <div className={cx('text-item')}>
                                    <Link to="/vechungtoi">
                                        Hợp tác cùng Jobcare
                                    </Link>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <h3 className={cx('title')}>Chính sách</h3>
                                <div className={cx('text-item')}>
                                    <Link to="/vechungtoi">
                                        Chính sách bảo mật
                                    </Link>
                                </div>
                                <div className={cx('text-item')}>
                                    <Link to="/vechungtoi">
                                        Chính sách hợp tác
                                    </Link>
                                </div>
                                <div className={cx('text-item')}>
                                    <Link to="/vechungtoi">
                                        Quy chế sàn TMĐT Jobcare
                                    </Link>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <h3 className={cx('title')}>Mạng xã hội</h3>
                                <Row>
                                    <Col lg={3}>
                                        <Link className={cx('social-item')}>
                                            {images.svg.facebook}
                                        </Link>
                                    </Col>
                                    <Col lg={3}>
                                        <Link className={cx('social-item')}>
                                            {images.svg.instagram}
                                        </Link>
                                    </Col>
                                    <Col lg={3}>
                                        <Link className={cx('social-item')}>
                                            {images.svg.youtube}
                                        </Link>
                                    </Col>
                                    <Col lg={3}>
                                        <Link className={cx('social-item')}>
                                            {images.svg.twitter}
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Footer;
