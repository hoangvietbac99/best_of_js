import classnames from 'classnames/bind';
import styles from './BroadProject.module.scss';

import StackProject from '../StackProject/StackProject';
const cx = classnames.bind(styles);

function BroadProject({ data }) {
  return (
    <div className={cx('wrapper-broad-project')}>
      <div className={cx('container')}>
        <div className={cx('broad-project')}>
          <div className={cx('broad')}>
            {data.map((item, index) => (
              <div key={index}>
                <StackProject data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BroadProject;
