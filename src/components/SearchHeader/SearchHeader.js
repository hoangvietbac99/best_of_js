import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchHeader.module.scss';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown
  // faXmark
} from '@fortawesome/free-solid-svg-icons';
import ResultSearch from '../ResultSearch/ResultSearch';

const cx = classNames.bind(styles);
function SearchHeader() {
  const inputRef = useRef();
  const [visible, setVisible] = useState(false);
  const [valueInput, setValueInput] = useState([]);

  const handleFocus = () => {
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };
  const handleChangeValue = (e) => {
    const value = e.target.value;
    if (!value.startsWith(' ')) {
      setValueInput(value);
    }
  };
  const handleSetValueInput = () => {
    setVisible(false);
  };
  const handleClearInput = () => {
    setValueInput([]);
  };
  return (
    <div className={cx('wrapper-search-header')}>
      <Tippy
        visible={visible}
        interactive
        onClickOutside={() => setVisible(false)}
        placement="bottom-start"
        render={(attrs) => (
          <div tabIndex="-1" {...attrs}>
            <div className={cx('result')}>
              <ResultSearch onClick={() => handleSetValueInput()} />
            </div>
          </div>
        )}>
        <div className={cx('container')} onClick={() => setVisible(true)}>
          <div className={cx('wrapper-search')}>
            <input
              onChange={(e) => handleChangeValue(e)}
              value={valueInput}
              ref={inputRef}
              className={cx('input-search')}
              type="text"
              placeholder="Pick tags or enter keywords"
            />
          </div>
          <div className={cx('clear-input')}>
            <FontAwesomeIcon
              onClick={() => handleClearInput()}
              className={cx('icon')}
              // icon={faXmark}
            />
          </div>
          <div className={cx('wrapper-arrow')}>
            <div className={cx('btn-arrow')} onClick={() => handleFocus()}>
              <div className={cx('line')}></div>
              <FontAwesomeIcon className={cx('icon')} icon={faChevronDown} />
            </div>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default SearchHeader;
