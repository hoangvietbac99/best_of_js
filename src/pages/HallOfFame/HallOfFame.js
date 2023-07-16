import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './HallOfFame.module.scss';
import Author from '../../components/Author/Author';
import kyProjects from '../../api/kyProject';
const cx = classNames.bind(styles);
function HallOfFame() {
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await kyProjects(`hof.json`).json();
      const data = response.heroes;
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
          community.
        </p>
        <p>It is like the basket-ball Hall of Fame... except they are all still in activity!</p>
        <div className={cx('author')}>
          {heroes.map((hero, index) => (
            <div className={cx('item')} key={index}>
              <Author hero={hero} />
            </div>
          ))}
        </div>
        <div className={cx('member')}>
          <p>Do you want more members ?</p>
          <a
            href="https://github.com/michaelrambeau/bestofjs/issues/new?template=add-a-member-to-the-hall-of-fame.md"
            target="blank">
            Create an issue to recommend a new member
          </a>
        </div>
      </div>
    </main>
  );
}

export default HallOfFame;
