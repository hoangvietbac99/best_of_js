import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './ProjectPage.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAnglesLeft,
  faAnglesRight,
  faChevronDown,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import SortProject from '../../components/SortProject/SortProject';
import StackProject from '../../components/StackProject/StackProject';
import Button from '../../components/Button/Button';
import kyProjects from '../../api/kyProject';
const cx = classNames.bind(styles);
function ProjectPage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState({ start: 0, end: 30 });
  const [length, setLenght] = useState(0);
  useEffect(() => {
    async function getData() {
      try {
        const response = await kyProjects.get(`projects.json`).json();
        setData(response.projects.sort((a, b) => -a.stars + b.stars).slice(page.start, page.end));
        setLenght(response.projects.length);
      } catch (error) {
        console.log('Failed:', error);
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
  const [visible, setVisible] = useState(false);
  const sort = (attrs) => (
    <div tabIndex="-1" {...attrs}>
      <div>
        <SortProject />
      </div>
    </div>
  );
  return (
    <main className={cx('wrapper-project-page')}>
      <div className={cx('container')}>
        <div className={cx('title')}>
          <h1> All Project</h1>
          <div className={cx('arrow')}>
            <Tippy
              visible={visible}
              interactive
              placement="bottom-end"
              render={sort}
              onClickOutside={() => setVisible(false)}>
              <div onClick={() => setVisible(!visible)}>
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
          {data.map((item, index) => (
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
    </main>
  );
}

export default ProjectPage;
