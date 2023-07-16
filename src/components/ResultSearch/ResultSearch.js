import classNames from 'classnames/bind';
import styles from './ResultSearch.module.scss';
const cx = classNames.bind(styles);
function ResultSearch({ data, onClick }) {
  const sendTag = () => {
    onClick(data.name);
  };
  return (
    <div className={cx('wrapper-result-search')}>
      <div className={cx('item-tag')} onClick={() => sendTag()}>
        <span className={cx('tag')}>{data.name}</span>
      </div>
    </div>
  );
}

export default ResultSearch;
