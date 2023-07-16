import classNames from 'classnames/bind';
import styles from './Features.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import FeatureItem from '../FeatureItem/FeatureItem';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import kyProjects from '../../api/kyProject';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
function Features() {
  const [feature, setFeature] = useState([]);
  const checkIcon = (a) => {
    return a.icon;
  };
  useEffect(() => {
    async function getData() {
      try {
        const response = await kyProjects.get('projects.json').json();
        const tagsArr = response.projects;
        const arr = tagsArr.filter(checkIcon);
        const featureRandom = [];
        const random = (arr) => {
          for (let i = 0; i <= 4; i++) {
            let rand = arr[Math.floor(Math.random() * arr.length)];
            featureRandom.push(rand);
          }
        };
        random(arr);
        setFeature(featureRandom);
      } catch (error) {
        console.log('Failed', error);
      }
    }
    getData();
    setInterval(() => {
      getData();
    }, 10000);
  }, []);

  return (
    <div className={cx('wrapper-feature')}>
      <div className={cx('container')}>
        <div className={cx('title-project')}>
          <FontAwesomeIcon className={cx('icon')} icon={faStar} />
          <div className={cx('title')}>
            <h3>Featured Projects</h3>
            <span>RANDOM ORDER</span>
          </div>
        </div>
        <div className={cx('feature')}>
          <div className={cx('line-infiniti')}></div>
          {feature.map((item, index) => (
            <div key={index}>
              <FeatureItem data={item} />
            </div>
          ))}
          <Link to="/featured" className={cx('view-full')}>
            <span>
              View more
              <FontAwesomeIcon className={cx('icon')} icon={faAnglesRight} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Features;
