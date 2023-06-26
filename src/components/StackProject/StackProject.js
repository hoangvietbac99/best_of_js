import classNames from 'classnames/bind';
import styles from './StackProject.module.scss';
import { Link } from 'react-router-dom';
import { BookOutlined, GithubOutlined, HomeOutlined, StarOutlined } from '@ant-design/icons';
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
                <GithubOutlined className={cx('icon')} />
              </a>
              <a className={cx('external')} href={data.url} target="blank">
                <HomeOutlined className={cx('icon')} />
              </a>
              <div className={cx('external')}>
                <BookOutlined className={cx('icon')} />
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
          <StarOutlined className={cx('icon')} />
        </div>
      </div>
    </div>
  );
}

export default StackProject;
