import classNames from 'classnames/bind';
import styles from './TagsPopular.module.scss';
import TagItem from '../TagItem/TagItem';
const cx = classNames.bind(styles);
function TagsPopular({ data }) {
  return (
    <div className={cx('wrapper-tags-popular')}>
      <div className={cx('container')}>
        <div className={cx('tags')}>
          {data.map((tag, index) => (
            <div key={index}>
              <TagItem data={tag} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TagsPopular;
