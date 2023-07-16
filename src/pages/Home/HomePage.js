import classnames from 'classnames/bind';
import styles from './HomePage.module.scss';
import BroadProject from '../../components/BroadProject/BroadProject';
import Features from '../../components/Features/Features';
import TagsPopular from '../../components/TagsPopular/TagsPopular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faPlus,
  faTag,
  faChevronDown,
  faFireFlameCurved,
  faGift,
  faCalendar,
  faAnglesRight,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import kyRaking from '../../api/kyRanking';
import Button from '../../components/Button/Button';
import kyProjects from '../../api/kyProject';
import linkPages from '../linksPages';
const cx = classnames.bind(styles);
const select = [
  {
    title: 'To day'
  },
  {
    title: 'This week'
  },
  {
    title: 'This month'
  },
  {
    title: 'This year'
  }
];
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
function HomePage() {
  const [hotPj, setHotPj] = useState([]);
  const [ranking, setRanking] = useState([]);
  const [dataRank, setDataRank] = useState(`latest`);
  const [popular, setPopular] = useState([]);
  const [visible, setVisible] = useState(false);
  const [recently, setResently] = useState([]);
  const [order, setOrder] = useState({ isFirst: Boolean, isLatest: Boolean });
  const [date, setDate] = useState({ year: '', month: '' });
  const menu = (attrs) => (
    <div tabIndex="-1" {...attrs}>
      <div className={cx('wrapper-dropdown-menu')}>
        {select.map((item, index) => (
          <div key={index}>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );

  useEffect(() => {
    async function getData() {
      try {
        //hot projects
        const responseHot = await kyProjects.get(`projects.json`).json();
        setResently(responseHot.projects.slice(0, 5));
        setHotPj(responseHot.projects.sort((a, b) => -a.trends.daily + b.trends.daily).slice(0, 5));
        setPopular(responseHot.tags.slice(0, 10));
        //ranking project
        const respRank = await kyRaking.get(`monthly/${dataRank}`).json();
        setOrder({ isFirst: respRank.isFirst, isLatest: respRank.isLatest });
        setDate({ year: respRank.year, month: respRank.month });
        setRanking(respRank.trending.slice(0, 5));
      } catch (error) {
        console.log('Failed:', error);
      }
    }
    getData();
  }, [dataRank]);
  let year = date.year;
  let month = date.month;
  const prevMonth = () => {
    if (order.isFirst === true) {
      return;
    }
    if (month === 1) {
      year = year - 1;
      month = 12;
    } else {
      month = month - 1;
    }
    month = month.toString().padStart(2, '0');
    return setDataRank(`${year}/${year}-${month}.json`);
  };
  /// next month ranking
  const nextMonth = () => {
    if (order.isLatest === true) {
      return;
    }
    if (month === '12') {
      month = 1;
      year = year + 1;
    } else {
      month = month + 1;
    }
    month = month.toString().padStart(2, '0');
    return setDataRank(`${year}/${year}-${month}.json`);
  };
  return (
    <main className={cx('wrapper-home-page')}>
      <div className={cx('container')}>
        <h1>The best of JavaScript, HTML and CSS</h1>
        <div className={cx('broad-project')}>
          <div className={cx('broad')}>
            <div className={cx('hot-project')}>
              <div className={cx('title-pj')}>
                <FontAwesomeIcon className={cx('icon')} icon={faFireFlameCurved} />
                <div className={cx('title')}>
                  <h3>Hot Projects</h3>
                  <span>
                    BY NUMBER OF STARS ADDED <b>THE LAST 24 HOURS</b>
                  </span>
                </div>
                <Tippy
                  visible={visible}
                  interactive
                  placement="bottom-end"
                  render={menu}
                  onClickOutside={() => setVisible(false)}>
                  <div className={cx('btn')} onClick={() => setVisible(!visible)}>
                    <Button>
                      <span>Today</span>
                      <FontAwesomeIcon className={cx('icon')} icon={faChevronDown} />
                    </Button>
                  </div>
                </Tippy>
              </div>
              <BroadProject data={hotPj} />
              <Link to="/" className={cx('view-full')}>
                <span>
                  View full rankings
                  <FontAwesomeIcon className={cx('icon')} icon={faAnglesRight} />
                </span>
              </Link>
            </div>
            <div className={cx('recently')}>
              <div className={cx('title-pj')}>
                <FontAwesomeIcon className={cx('icon')} icon={faGift} />
                <div className={cx('title')}>
                  <h3>Recently Added Projects</h3>
                  <span>
                    LATEST ADDITIONS TO <i>BEST OF JS</i>
                  </span>
                </div>
              </div>
              <BroadProject data={recently} />
              <Link to="/" className={cx('view-full')}>
                <span>
                  View full rankings
                  <FontAwesomeIcon className={cx('icon')} icon={faAnglesRight} />
                </span>
              </Link>
            </div>
          </div>
          {/* FEATURE */}
          <div className={cx('feature')}>
            <Features />
            <div className={cx('popular')}>
              <div className={cx('title-tag')}>
                <FontAwesomeIcon className={cx('icon')} icon={faTag} />
                <div className={cx('title')}>
                  <h3>Popular Tags</h3>
                </div>
              </div>
              <TagsPopular data={popular} />
              <Link to="/tags" className={cx('view-full')}>
                <span>
                  View more
                  <FontAwesomeIcon className={cx('icon')} icon={faAnglesRight} />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className={cx('ranking')}>
          <div className={cx('title-pj')}>
            <FontAwesomeIcon className={cx('icon')} icon={faCalendar} />
            <div className={cx('title')}>
              <h3>Monthly Rankings</h3>
            </div>
            {/*  */}
          </div>
          <div className={cx('arrow')}>
            <button onClick={() => prevMonth()}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h2>{`${monthNames[month - 1]} ${year}`}</h2>
            <button onClick={() => nextMonth()}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <BroadProject data={ranking} />
          <Link to={linkPages.monthlyRanking} className={cx('view-full')}>
            <span>
              View full rankings
              <FontAwesomeIcon className={cx('icon')} icon={faAnglesRight} />
            </span>
          </Link>
        </div>
        <div className={cx('evaluate')}>
          <div className={cx('content')}>
            <h3>
              <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
              Do you find Best of JS useful?
            </h3>
            <p>
              Show your appreciation by starring the project on{' '}
              <a href="https://github.com/bestofjs/bestofjs-webui">GitHub</a>, or becoming a{' '}
              <a href="https://github.com/sponsors/michaelrambeau">sponsor</a>. Thank you for your
              support!
            </p>
          </div>
          <div className={cx('link')}>
            <div className={cx('btn')}>
              <a target="blank" href="https://github.com/bestofjs/bestofjs-webui">
                Star On GitHub 2,200
                <FontAwesomeIcon className={cx('icon')} icon={faStar} />
              </a>
            </div>
            <div className={cx('btn')}>
              <a target="blank" href="https://github.com/sponsors/michaelrambeau">
                Sponsor
                <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
              </a>
            </div>
          </div>
        </div>
        <div className={cx('evaluate')}>
          <div className={cx('content')}>
            <h3>
              <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
              Do you want more projects?
            </h3>
            <p>
              Best of JS is a curated list of about 1500 open-source projects related to the web
              platform and Node.js. If you want to suggest a new project, please click on the
              following link:{' '}
              <a href="https://github.com/michaelrambeau/bestofjs/issues/new?template=add-a-project-to-best-of-javascript.md">
                recommend a new project
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
