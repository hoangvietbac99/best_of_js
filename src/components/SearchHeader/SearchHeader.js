import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchHeader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ResultSearch from '../ResultSearch/ResultSearch';
import kyProject from '../../components/../api/kyProject';
const cx = classNames.bind(styles);
function SearchHeader() {
  const inputRef = useRef();
  const [showRs, setShowRs] = useState(false);
  const [tag, setTag] = useState([]);
  const [valueInput, setValueInput] = useState([]);

  const handleShowResult = () => {
    setShowRs(!showRs);
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
      <div className={cx('container')}>
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
          <div className={cx('btn-arrow')} onClick={() => handleShowResult()}>
            <div className={cx('line')}></div>
            <FontAwesomeIcon className={cx('icon')} icon={faChevronDown} />
          </div>
        </div>
        {showRs && (
          <div className={cx('result')}>
            {tag.map((tag, index) => (
              <div key={index}>
                <ResultSearch data={tag} onClick={(tag) => getTag(tag)} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchHeader;
