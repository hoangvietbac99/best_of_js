import classNames from 'classnames/bind';
import styles from './DropDown.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function DropDown({ data }) {
  return (
    <div className={cx('wrapper-dropdown')}>
      <div className={cx('container')}>
        {data.map((item, index) => (
          <div key={index}>
            <Link to={item.link} className={cx('item')}>
              <span>{item.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DropDown;
