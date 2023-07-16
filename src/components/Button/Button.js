import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({ children }) {
  return (
    <button className={cx('wrapper-button')}>
      <div className={cx('container')}>{children}</div>
    </button>
  );
}

export default Button;
