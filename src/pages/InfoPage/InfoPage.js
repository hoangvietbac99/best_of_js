import classNames from 'classnames/bind';
import styles from './InfoPage.module.scss';
import { GithubOutlined, HomeOutlined, StarOutlined, LinkOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import kyServerless from '../../api/kyServerless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faChevronDown,
  faCodeCommit,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import logos from '../../assets/logos';
import ReactTimeAgo from 'react-time-ago';
const cx = classNames.bind(styles);
function InfoPage() {
  const { name, full_name } = useParams();
  const [github, setGithub] = useState([]);
  const [data, setData] = useState([]);
  const [tags, settags] = useState([]);
  const [npm, setNpm] = useState([]);
  const [bundle, setBundle] = useState([]);
  const [dependencies, setDependencies] = useState([]);
  const [time, setTime] = useState({ created: 0, lastCommit: 0 });
  useEffect(() => {
    async function getData() {
      try {
        // api serverless
        const response = await kyServerless
          .get(`api/project-details`, {
            searchParams: {
              fullName: `${name}/${full_name}`
            }
          })
          .json();
        setData(response);
        setGithub(response.github);
        settags(response.tags);
        setNpm(response.npm);
        setDependencies(response.npm.dependencies);
        setBundle(response.bundle);
        setTime({ created: response.github.created_at, lastCommit: response.github.last_commit });
      } catch (error) {
        console.log('Fail:', error);
      }
    }
    getData();
  }, []);
  const stars = Math.round(github.stargazers_count / 100) / 10;
  return (
    <main className={cx('wrapper-info-page')}>
      <div className={cx('container')}>
        <div className={cx('info')}>
          <div className={cx('title')}>
            <div className={cx('avt')}>
              <img
                src={`https://avatars.githubusercontent.com/u/${github.owner_id}?v=3&s=75`}
                alt=""
              />
            </div>
            <div className={cx('desc')}>
              <h2>{data.name}</h2>
              <p>{data.description}</p>
              <div className={cx('tags')}>
                {tags.map((tag, index) => (
                  <div key={index}>
                    <button>
                      <span>{tag}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={cx('right')}>
            <div className={cx('external')}>
              <div>
                <a target="blank" href={`https://github.com/${github.full_name}`}>
                  <button>
                    <GithubOutlined className={cx('icon')} />
                    <span>{github.name}</span>
                  </button>
                </a>
              </div>
              {github.homepage !== '' && (
                <div>
                  <a target="blank" href={github.homepage}>
                    <button>
                      <HomeOutlined className={cx('icon')} />
                      <span>{github.name}</span>
                    </button>
                  </a>
                </div>
              )}
              {npm.name !== '' && (
                <div>
                  <a target="blank" href={`https://www.npmjs.com/package/${npm.name}`}>
                    <button>
                      <img src={logos.npm} alt="" />
                      <span>{npm.name}</span>
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Github Github Github Github Github Github */}
        <div className={cx('github')}>
          <div className={cx('title')}>
            <GithubOutlined className={cx('icon')} />
            <span>
              {`GitHub ${stars}k`} <StarOutlined className={cx('icon')} />
            </span>
          </div>
          <div className={cx('desc')}>
            <div className={cx('link-github')}>
              <a target="blank" href={`https://www.npmjs.com/package/${github.name}`}>
                {github.full_name}
                <LinkOutlined className={cx('icon')} />
              </a>
            </div>
            {/* time ago*/}
            <div className={cx('time')}>
              <span>
                Created <ReactTimeAgo date={time.created} locale="en-VN" />, last commit{' '}
                <ReactTimeAgo date={time.lastCommit} locale="en-VN" />
              </span>
            </div>
            <div className={cx('contributors')}>
              <FontAwesomeIcon className={cx('icon')} icon={faUserGroup} />
              <span>{`${github.contributor_count} contributors`}</span>
            </div>
            <div className={cx('commits')}>
              <FontAwesomeIcon className={cx('icon')} icon={faCodeCommit} />
              <span>{`${github.commit_count} commits`}</span>
            </div>
          </div>
          <div className={cx('stars')}>
            <span>
              39 <FontAwesomeIcon icon={faStar} className={cx('icon')} /> added yesterday (hard
              code)
            </span>
          </div>
        </div>
        {/* NPM-NPM-NPM-NPM-NPM-NPM-NPM-NPM-NPM- */}
        {isNaN(npm.name) && (
          <div className={cx('npm')}>
            <div className={cx('title')}>
              <img src={logos.npm} className={cx('icon')} />
              <span>Package on NPM</span>
            </div>
            <div className={cx('link-npm')}>
              <a target="blank" href={`https://www.npmjs.com/package/${github.name}`}>
                <span>{github.name}</span>
                <LinkOutlined className={cx('icon')} />
              </a>
              <div className={cx('version')}>{npm.version}</div>
            </div>
            <div className={cx('chart')}>Monthly downloads on NPM (pending)</div>
            {dependencies.length !== 0 && (
              <div className={cx('dependencies')}>
                <button className={cx('title')}>
                  <label htmlFor="depen">
                    <FontAwesomeIcon icon={faChevronDown} className={cx('icon')} />{' '}
                    {`${dependencies.length} dependencies`}
                  </label>
                </button>
                <input type="checkbox" id="depen" />
                <ul className={cx('library')}>
                  {dependencies.map((item, index) => (
                    <a href={`https://www.npmjs.com/package/${item}`} target="blank" key={index}>
                      <li>{item}</li>
                    </a>
                  ))}
                </ul>
              </div>
            )}
            {bundle.gzip !== undefined && (
              <div className={cx('size-data')}>
                <button className={cx('title')}>
                  <label htmlFor="size">
                    <FontAwesomeIcon icon={faChevronDown} className={cx('icon')} />{' '}
                    {`Bundle Size Data`}
                  </label>
                </button>
                <input type="checkbox" id="size" />
                <div className={cx('bundle')}>
                  <p>{`${Math.round(bundle.gzip / 100) / 10} kB (Minified + Gzipped)`}</p>
                  <p>{`${Math.round(bundle.size / 100) / 10} kB (Minified + Gzipped)`}</p>
                  <p>
                    <a target="blank" href={`https://bundlephobia.com/package/${bundle.name}`}>
                      View details on{' '}
                      <i>
                        Bundle Phobia <LinkOutlined className={cx('icon')} />
                      </i>
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
        <div className={cx('readme')}>
          <span>
            <FontAwesomeIcon icon={faBook} className={cx('icon')} /> {`Read Me`}
          </span>
        </div>
      </div>
    </main>
  );
}

export default InfoPage;
