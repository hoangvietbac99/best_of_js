import classNames from 'classnames/bind';
import styles from './MoreBtn.module.scss';
import { Link } from 'react-router-dom';
import linkPages from '../../pages/linksPages';
const cx = classNames.bind(styles);
const morePages = [
  {
    title: 'Monthly rankings',
    link: linkPages.monthlyRanking
  },
  {
    title: 'Hall of fame',
    link: linkPages.hallOfFame
  },
  {
    title: 'Timeline',
    link: linkPages.timeline
  },
  {
    title: 'About',
    link: linkPages.about
  },
  {
    title: 'Rising Starts',
    link: 'https://risingstars.js.org/2022/en'
  },
  {
    title: 'State of JS',
    link: 'https://stateofjs.com/en-us/'
  }
];
function MoreBtn() {
  return (
    <div className={cx('wrapper-dropdown')}>
      <div className={cx('container')}>
        {morePages.map((page, index) => (
          <Link key={index} to={page.link} className={cx('link-page')}>
            <div className={cx('item-dropdown')}>{page.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MoreBtn;
