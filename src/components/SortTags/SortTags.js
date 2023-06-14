import classNames from 'classnames/bind';
import styles from './SortTags.module.scss';
const cx = classNames.bind(styles);
const sort = [
  {
    title: 'By number of project'
  },
  {
    title: 'Alphabetical order'
  }
];
function SortTags() {
  return (
    <div className={cx('wrapper-sort-tags')}>
      <div className={cx('container')}>
        {sort.map((item, index) => (
          <div className={cx('item')} key={index}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SortTags;
