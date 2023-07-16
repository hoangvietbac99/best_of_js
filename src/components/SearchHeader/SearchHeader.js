import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchHeader.module.scss';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ResultSearch from '../ResultSearch/ResultSearch';
import kyProject from '../../components/../api/kyProject';
const cx = classNames.bind(styles);
function SearchHeader() {
  const inputRef = useRef();
  const [tag, setTag] = useState([]);
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
  const getTag = (tag) => {
    setValueInput(tag);
  };
  useEffect(() => {
    async function getData() {
      try {
        const response = await kyProject.get(`projects.json`).json();
        setTag(response.tags);
      } catch (error) {
        console.error('Fail:', error);
      }
    }
    getData();
  }, []);
  return (
    <div className={cx('wrapper-search-header')}>
      <Tippy
        visible={visible}
        interactive
        onClickOutside={() => setVisible(false)}
        placement="bottom-start"
        render={(attrs) => (
          <div tabIndex="-1" {...attrs} className={cx('result')}>
            {tag.map((tag, index) => (
              <div key={index}>
                <ResultSearch data={tag} onClick={(tag) => getTag(tag)} />
              </div>
            ))}
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
