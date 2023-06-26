import classNames from 'classnames/bind';
import styles from './FeaturedPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import kyProjects from '../../api/kyProject';
import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import Button from '../../components/Button/Button';
import SortProject from '../../components/SortProject/SortProject';
import {
  faAnglesLeft,
  faAnglesRight,
  faChevronDown,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import StackProject from '../../components/StackProject/StackProject';
const cx = classNames.bind(styles);
function FeaturedPage() {
  const [feature, setFeature] = useState([]);
  const [show, setShow] = useState(false);
  const [page, setPage] = useState({ start: 0, end: 30 });
  const [length, setLenght] = useState(0);
  const checkIcon = (a) => {
    return a.icon;
  };
  useEffect(() => {
    async function getData() {
      try {
        const response = await kyProjects.get('projects.json').json();
        const tagsArr = response.projects;
        const arr = tagsArr.filter(checkIcon);
        setFeature(arr.slice(page.start, page.end));
        setLenght(arr.length);
      } catch (error) {
        console.log('Failed', error);
      }
    }
    getData();
  }, [page]);
  const handlePrev = () => {
    if (page.start > 1) {
      setPage({ start: page.start - 30, end: page.end - 30 });
    } else {
      return;
    }
  };
  const handleStart = () => {
    setPage({ start: 0, end: 30 });
  };
  const handleEnd = () => {
    setPage({ start: length - 31, end: length });
  };
  const handleNext = () => {
    if (page.end <= length - 1) {
      setPage({ start: page.start + 30, end: page.end + 30 });
    } else {
      return;
    }
  };
  const sort = (attrs) => (
    <div tabIndex="-1" {...attrs}>
      <div>
        <SortProject />
      </div>
    </div>
  );
  console.log(feature);
  return (
    <div className={cx('wrapper-featured-page')}>
      <div className={cx('container')}>
        <div className={cx('title')}>
          <h1>
            <FontAwesomeIcon className={cx('icon')} icon={faStar} /> Featured projects
          </h1>
          <p>An arbitrary selection of important projects with distinct logos.</p>
          <div className={cx('arrow')}>
            <Tippy
              visible={show}
              interactive
              placement="bottom-end"
              render={sort}
              onClickOutside={() => setShow(false)}>
              <div onClick={() => setShow(!show)}>
                <Button>
                  <span>Sort: By total number of stars</span>
                  <FontAwesomeIcon className={cx('icon')} icon={faChevronDown} />
                </Button>
              </div>
            </Tippy>
            <div className={cx('arrow-pages')}>
              {`Showing ${page.start + 1} - ${page.end} of ${length} `}
              <button onClick={() => handlePrev()}>
                <FontAwesomeIcon className={cx('icon')} icon={faChevronLeft} />
              </button>
              <button onClick={() => handleNext()}>
                <FontAwesomeIcon className={cx('icon')} icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
        <div className={cx('content')}>
          {feature.map((item, index) => (
            <div key={index}>
              <StackProject data={item} />
            </div>
          ))}
        </div>
        <div className={cx('arrow-project')}>
          <div className={cx('btn')}>
            <button onClick={() => handleStart()}>
              <FontAwesomeIcon icon={faAnglesLeft} />
            </button>
            <button onClick={() => handlePrev()}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button onClick={() => handleNext()}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <button onClick={() => handleEnd()}>
              <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPage;
