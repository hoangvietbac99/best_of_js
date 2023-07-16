import classNames from 'classnames/bind';
import styles from './RankingPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import StackProject from '../../components/StackProject/StackProject';
import kyRanking from '../../api/kyRanking';
import { number } from 'prop-types';
const cx = classNames.bind(styles);
function RankingPage() {
  const [data, setData] = useState([]);
  const [dateRank, setDateRank] = useState('latest');
  const [order, setOrder] = useState({ isFirst: Boolean, isLatest: Boolean });
  const [date, setDate] = useState({ year: number, month: number });
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
  useEffect(() => {
    ///call dateRank
    async function getData() {
      try {
        const response = await kyRanking.get(`monthly/${dateRank}`).json();
        setOrder({ isFirst: response.isFirst, isLatest: response.isLatest });
        setDate({ year: response.year, month: response.month });
        setData(response.trending.slice(0, 49));
      } catch (error) {
        console.log('Failed', error);
      }
    }
    getData();
  }, [dateRank]);
  let year = date.year;
  let month = date.month;
  /// prev month ranking
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
    return setDateRank(`${year}/${year}-${month}.json`);
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
    return setDateRank(`${year}/${year}-${month}.json`);
  };
  return (
    <main className={cx('wrapper-ranking-page')}>
      <div className={cx('container')}>
        <div className={cx('title')}>
          <FontAwesomeIcon className={cx('icon')} icon={faCalendar} />
          <h1>Monthly Rankings</h1>
        </div>
        <div className={cx('arrow')}>
          <button onClick={() => prevMonth()}>
            <FontAwesomeIcon className={cx('icon')} icon={faChevronLeft} />
          </button>
          <h2>{`${monthNames[month - 1]} ${year}`}</h2>
          <button onClick={() => nextMonth()}>
            <FontAwesomeIcon className={cx('icon')} icon={faChevronRight} />
          </button>
        </div>
        <div className={cx('rankings')}>
          {data.map((item, index) => (
            <div key={index}>
              <StackProject data={item} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default RankingPage;
