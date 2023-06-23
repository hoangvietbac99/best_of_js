import classNames from 'classnames/bind';
import styles from './MoreBtn.module.scss';
import { Link } from 'react-router-dom';
import linkPages from '../../pages/linksPages';
const cx = classNames.bind(styles);
const morePages = [
  {
    title: 'Monthly rankings',
    to: linkPages.monthlyRanking
  },
  {
    title: 'Hall of fame',
    to: linkPages.hallOfFame
  },
  {
    title: 'Timeline',
    to: linkPages.timeline
  },
  {
    title: 'About',
    to: linkPages.about
  },
  {
    title: 'Rising Starts',
    to: '/'
  },
  {
    title: 'State of JS',
    to: '/'
  }
];
function MoreBtn() {
  return (
    <div className={cx('wrapper-dropdown')}>
      <div className={cx('container')}>
        {morePages.map((page, index) => (
          <Link key={index} to={page.to} className={cx('link-page')}>
            <div className={cx('item-dropdown')}>{page.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MoreBtn;
