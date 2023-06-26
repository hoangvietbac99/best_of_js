import classNames from 'classnames/bind';
import styles from './TagsPage.module.scss';
import { useEffect, useState } from 'react';
import kyProjects from '../../api/kyProject';
import Tippy from '@tippyjs/react/headless';
import TagsPopular from '../../components/TagsPopular/TagsPopular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SortTags from '../../components/SortTags/SortTags';

const cx = classNames.bind(styles);

function TagsPage() {
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState({ start: 0, end: 20 });
  const [length, setLenght] = useState(0);
  const [tag, setTag] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await kyProjects.get('projects.json').json();
        setTag(response.tags.slice(page.start, page.end));
        setLenght(response.tags.length);
      } catch (error) {
        console.log('Failed', error);
      }
    }
    getData();
  }, [page]);
  const handlePrev = () => {
    if (page.start > 1) {
      setPage({ start: page.start - 20, end: page.end - 20 });
    } else {
      return;
    }
  };
  const handleNext = () => {
    if (page.end < length - 1) {
      if (page.end > length - 20) {
        setPage({ start: page.start + 20, end: length });
      } else {
        setPage({ start: page.start + 20, end: page.end + 20 });
      }
    } else {
      return;
    }
  };
  const sort = (attrs) => (
    <div tabIndex="-1" {...attrs}>
      <div className={cx('wrapper-dropdown-more')}>
        <SortTags />
      </div>
    </div>
  );
  return (
    <main className={cx('wrapper-tag-page')}>
      <div className={cx('container')}>
        <div className={cx('title')}>
          <h1>All Tags</h1>
          <div className={cx('arrow')}>
            <Tippy
              visible={visible}
              interactive
              placement="bottom-end"
              render={sort}
              onClickOutside={() => setVisible(false)}>
              <button className={cx('sort')} onClick={() => setVisible(!visible)}>
                Sort: By total number of projects
                <FontAwesomeIcon className={cx('icon')} icon={faChevronDown} />
              </button>
            </Tippy>
            <div className={cx('arrow-pages')}>
              <span>{`Showing ${page.start + 1} - ${page.end} of ${length} `}</span>
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
          <TagsPopular data={tag} />
        </div>
      </div>
    </main>
  );
}

export default TagsPage;
