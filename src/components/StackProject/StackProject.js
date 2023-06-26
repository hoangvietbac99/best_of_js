import classNames from 'classnames/bind';
import styles from './StackProject.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faStar } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logos from '../../assets/logos';
const cx = classNames.bind(styles);
function StackProject({ data }) {
  const tags = data.tags;
  const stars = Math.round(data.stars / 100) / 10;
  return (
    <div className={cx('wrapper-stack-project')}>
      <div className={cx('container')}>
        <div className={cx('avt')}>
          <img
            src={
              data.icon
                ? `https://bestofjs.org/logos/${data.icon}`
                : `https://avatars.githubusercontent.com/u/${data.owner_id}?v=3&s=50`
            }
            alt=""
          />
        </div>
        <div className={cx('information')}>
          <div className={cx('name-link')}>
            <Link to={`/projects/${data.full_name}`}>{data.name}</Link>
            <div className={cx('link')}>
              <a className={cx('external')} href={`https://github.com/${data.name}`} target="blank">
                <img className={cx('icon')} src={logos.github} alt="" />
              </a>
              <a className={cx('external')} href={data.url} target="blank">
                <FontAwesomeIcon className={cx('icon')} icon={faHome} />
              </a>
              <div className={cx('external')}>
                <FontAwesomeIcon className={cx('icon')} icon={faBookmark} />
              </div>
            </div>
          </div>
          <div className={cx('desc')}>
            {data.description.length > 60
              ? `${data.description.substring(0, 60)}...`
              : data.description}
          </div>
          <div className={cx('language')}>
            {tags.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
        </div>
        <div className={cx('time')}></div>
        <div className={cx('star')}>
          <span>{`+${stars}k`}</span>
          <FontAwesomeIcon className={cx('icon')} icon={faStar} />
        </div>
      </div>
    </div>
  );
}

export default StackProject;
