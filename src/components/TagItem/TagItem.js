import classNames from 'classnames/bind';
import styles from './TagItem.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function TagItem({ data }) {
  return (
    <div className={cx('wrapper-tag-item')}>
      <div className={cx('container')}>
        <Link to={`projects/${data.code}`}>
          <span>{data.name}</span>
        </Link>
      </div>
    </div>
  );
}

export default TagItem;
