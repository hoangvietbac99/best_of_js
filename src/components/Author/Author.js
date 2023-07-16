import classNames from 'classnames/bind';
import styles from './Author.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faEarth } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Author({ hero }) {
  const flws = Math.round(hero.followers / 100) / 10;
  const projects = hero.projects;
  const titleBlog = hero.blog;
  return (
    <div className={cx('wrapper-author')}>
      <div className={cx('container')}>
        <div className={cx('avatar')}>
          <img src={hero.avatar} alt="" />
          <div className={cx('info')}>
            <div>
              <span>{hero.name}</span>
              <p className={cx('user-git')}>{hero.username}</p>
              <p className={cx('user-git')}>{`${flws}k followers`}</p>
            </div>
          </div>
        </div>
        <div className={cx('projects')}>
          {projects.map((project, index) => (
            <div key={index}>
              <button>{project}</button>
            </div>
          ))}
        </div>
        <div className={cx('bio')}>
          <span>{hero.bio}</span>
        </div>
        <div className={cx('blog')}>
          <FontAwesomeIcon className={cx('icon')} icon={faEarth} />
          <a target="blank" href={hero.blog}>
            {titleBlog}
          </a>
        </div>
        <div className={cx('modules')}>
          <FontAwesomeIcon className={cx('icon')} icon={faBox} />
          <a
            target="blank"
            href={`https://www.npmjs.com/~${hero.npm}`}>{`${hero.modules} modules and npm`}</a>
        </div>
      </div>
    </div>
  );
}

export default Author;
