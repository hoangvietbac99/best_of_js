import ky from 'ky';
// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './HallOfFame.module.scss';
import Author from '../../components/Author/Author';
const cx = classNames.bind(styles);
function HallOfFame() {
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await ky('https://bestofjs-static-api.vercel.app/hof.json', {
        retry: {
          limit: 10,
          methods: ['get'],
          statusCodes: [413],
          backoffLimit: 3000
        }
      }).json();
      const data = await response.heroes;
      return setHeroes(data);
    }
    getData();
  }, []);
  return (
    <main className={cx('wrapper-hall-of-fame')}>
      <div className={cx('container')}>
        <h1>JavaScript Hall of Fame</h1>
        <p>
          Here are some of the greatest developers, authors and speakers of the JavaScript
          community. It is like the basket-ball Hall of Fame... except they are all still in
          activity!
        </p>
        <div className={cx('author')}>
          {heroes.map((hero, index) => (
            <div className={cx('item')} key={index}>
              <Author hero={hero} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default HallOfFame;
// HallOfFame.PropTypes = {
//   hero: PropTypes.object
// };
