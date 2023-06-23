import classNames from 'classnames/bind';
// import ky from 'ky';
import Tippy from '@tippyjs/react/headless';
import styles from './ProjectPage.module.scss';
import { useState } from 'react';
import BroadProject from '../../components/BroadProject/BroadProject';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SortProject from '../../components/SortProject/SortProject';
const cx = classNames.bind(styles);
function ProjectPage() {
  // const [item, setitem] = useState([]);
  // useEffect(() => {
  //     async function getData() {
  //         const response = await ky(
  //             "https://bestofjs-static-api.vercel.app/projects.json?_limit=10",
  //             {
  //                 retry: {
  //                     limit: 10,
  //                     methods: ["get"],
  //                     statusCodes: [413],
  //                     backoffLimit: 3000,
  //                 },
  //             }
  //         ).json();
  //         const data = await response.projects;
  //         return setitem(data);
  //     }
  //     console.log(item);
  //     getData();
  // }, []);
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
          <h1>All Project</h1>
          <div className={cx('arrow')}>
            <Tippy
              visible={visible}
              interactive
              placement="bottom-end"
              render={sort}
              onClickOutside={() => setVisible(false)}>
              <button className={cx('sort')} onClick={() => setVisible(!visible)}>
                Sort: By total number of stars
                <FontAwesomeIcon className={cx('icon')} icon={faChevronDown} />
              </button>
            </Tippy>
            <div className={cx('arrow-pages')}>
              {`Showing 1 - 30 of 1800 `}
              <button>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
        <div className={cx('content')}>
          <BroadProject />
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;
