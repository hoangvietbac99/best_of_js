import classNames from 'classnames/bind';
import styles from './FeatureItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function FeatureItem({ data }) {
  const stars = Math.round(data.stars / 100) / 10;
  const tag = data.tags[0];
  return (
    <div className={cx('wrapper-feature-item')}>
      <div className={cx('container')}>
        <div className={cx('avt')}>
          <img src={`https://avatars.githubusercontent.com/u/${data.owner_id}?v=3&s=$50`} alt="" />
        </div>
        <div className={cx('information')}>
          <div className={cx('name')}>
            <Link to={`/projects/${data.full_name}`}>{data.name}</Link>
          </div>
          <div className={cx('star')}>
            <span>{`+${stars}k`}</span>
            <FontAwesomeIcon className={cx('icon')} icon={faStar} />
          </div>
          <div className={cx('btn')}>
            <button>{tag}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureItem;
