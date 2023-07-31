import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './HeaderMain.module.scss';
import logos from '../../assets/logos';
import linkPages from '../../pages/linksPages';
import DropdownBM from '../DropdownBM/DropdownBM';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faMoon, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';
import { GithubOutlined } from '@ant-design/icons';
const cx = classNames.bind(styles);

const menuPages = [
  {
    Title: 'Home',
    docTitle: 'The best of JavaScript, HTML and CSS',
    to: linkPages.homePage
  },
  {
    Title: 'Project',
    docTitle: 'All Projects',
    to: linkPages.projectPage
  },
  {
    Title: 'Tags',
    docTitle: 'All Tags',
    to: linkPages.tagsPage
  }
];
const subMenu = [
  {
    title: 'Project',
    docTitle: 'All Projects',
    link: linkPages.projectPage
  },
  {
    title: 'Tags',
    docTitle: 'All Tags',
    link: linkPages.tagsPage
  },
  {
    title: 'Monthly Rankings',
    docTitle: 'Monthly Rankings',
    link: linkPages.monthlyRanking
  },
  {
    title: 'Hall of Fame',
    docTitle: 'Hall of Fame',
    link: linkPages.hallOfFame
  },
  {
    title: 'Timeline',
    docTitle: 'Timeline',
    link: linkPages.timeline
  },
  {
    title: 'About',
    docTitle: 'About',
    link: linkPages.about
  },
  {
    title: 'Rising Starts',
    link: 'https://risingstars.js.org/2022/en'
  },
  {
    title: 'State of JS',
    link: 'https://stateofjs.com/en-us/'
  }
];
const morePages = [
  {
    title: 'Monthly rankings',
    link: linkPages.monthlyRanking
  },
  {
    title: 'Hall of fame',
    link: linkPages.hallOfFame
  },
  {
    title: 'Timeline',
    link: linkPages.timeline
  },
  {
    title: 'About',
    link: linkPages.about
  },
  {
    title: 'Rising Starts',
    link: 'https://risingstars.js.org/2022/en'
  },
  {
    title: 'State of JS',
    link: 'https://stateofjs.com/en-us/'
  }
];
function HeaderMain() {
  const [visible, setVisible] = useState(false);
  const [logout, setLogout] = useState(false);
  const [theme, setTheme] = useState(false);

  const menuMore = (attrs) => (
    <div tabIndex="-1" {...attrs}>
      <div className={cx('wrapper-dropdown-more')}>
        <div className={cx('wrapper-dropdown')}>
          <div className={cx('container')}>
            {morePages.map((page, index) => (
              <Link
                key={index}
                to={page.link}
                className={cx('link-page')}
                onClick={() => clearActive()}>
                <div className={cx('item-dropdown')}>{page.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  const clearActive = () => {
    const underline = document.getElementsByClassName(cx('active-line'));
    if (underline.length === 1) {
      underline[0].classList.remove(cx('active-line'));
    } else return;
  };
  const logOut = (attrs) => (
    <div tabIndex="-1" {...attrs}>
      <div className={cx('wrapper-dropdown-account')}>
        <DropdownBM />
      </div>
    </div>
  );
  const handleClose = () => {
    document.getElementById('home').checked = false;
  };
  useEffect(() => {
    ///change theme
    if (theme === true) {
      document.body.classList.add(cx('dark-mode'));
    } else if (theme === false) {
      document.body.classList.remove(cx('dark-mode'));
    }

    //reload
    const activeURL = document.URL.slice(21); // 21 is baseurl
    //active underline
    const removeLine = document.getElementsByClassName(cx('active-line'));
    const underlined = document.getElementsByClassName(cx('line'));
    const pageAtive = document.getElementsByClassName(cx('btn-page'));
    // title page
    const removeText = document.getElementsByClassName(cx('text-color'));
    const linkPage = document.getElementsByClassName(cx('link-page'));

    //handle click
    for (let i = 0; i <= pageAtive.length - 1; i++) {
      pageAtive[i].addEventListener('click', function () {
        if (removeLine.length === 1) {
          removeLine[0].classList.remove(cx('active-line'));
        }
        underlined[i].classList.add(cx('active-line'));

        if (removeText.length === 1) {
          removeText[0].classList.remove(cx('text-color'));
        }
        linkPage[i].classList.add(cx('text-color'));
      });
    }
    // handle reload
    const setActiveURL = () => {
      for (let i = 0; i <= linkPage.length - 1; i++) {
        const links = linkPage[i].attributes.href.value;
        if (links === activeURL) {
          underlined[i].classList.add(cx('active-line'));
          linkPage[i].classList.add(cx('text-color'));
        }
      }
    };
    window.onbeforeunload = setActiveURL();
    window.onload = setActiveURL();
    //click logo come back home
    const logoLink = document.getElementsByClassName(cx('logo-page'));
    logoLink[0].addEventListener('click', function () {
      if (removeLine.length === 1) {
        removeLine[0].classList.remove(cx('active-line'));
      }
      underlined[0].classList.add(cx('active-line'));

      if (removeText.length === 1) {
        removeText[0].classList.remove(cx('text-color'));
      }
      linkPage[0].classList.add(cx('text-color'));
    });
  }, [theme]);
  return (
    <header className={cx('wrapper-header-main')}>
      <div className={cx('container')}>
        <div className={cx('header-left')}>
          <Link
            to={linkPages.homePage}
            className={cx('logo')}
            onClick={() => (document.title = 'The best of JavaScript, HTML and CSS')}>
            <img className={cx('logo-page')} src={logos.logoPage} alt="" />
          </Link>
          <div className={cx('menu-page')}>
            <div className={cx('pages')}>
              {menuPages.map((page, index) => (
                <div
                  className={cx('btn-page')}
                  key={index}
                  onClick={() => {
                    document.title = page.docTitle;
                  }}>
                  <NavLink to={page.to} className={cx('link-page')}>
                    <span className={cx('title')}>{page.Title}</span>
                  </NavLink>
                  <div className={cx('line')}></div>
                </div>
              ))}
            </div>
            <Tippy
              visible={visible}
              interactive
              placement="bottom-start"
              render={menuMore}
              onClickOutside={() => setVisible(false)}>
              <button className={cx('more-page')} onClick={() => setVisible(!visible)}>
                More
                <FontAwesomeIcon className={cx('icon')} icon={faChevronDown} />
              </button>
            </Tippy>
          </div>
        </div>
        {/* right */}
        <div className={cx('header-right')}>
          <div className={cx('account-theme')}>
            <Tippy
              visible={logout}
              interactive
              placement="bottom-end"
              render={logOut}
              onClickOutside={() => setLogout(false)}>
              <button className={cx('btn-account')} onClick={() => setLogout(!logout)}>
                <img
                  className={cx('avt-account')}
                  src="https://avatars.githubusercontent.com/u/121035291?v=4&size=32"
                  alt=""
                />
                <FontAwesomeIcon className={cx('icon')} icon={faChevronDown} />
              </button>
            </Tippy>
            <button className={cx('theme')} onClick={() => setTheme(!theme)}>
              <FontAwesomeIcon icon={theme ? faSun : faMoon} className={cx('icon')} />
            </button>
          </div>
          <div className={cx('partition')}></div>
          <div className={cx('discord-github')}>
            <a
              className={cx('link-to')}
              href="https://discord.com/invite/rdctdFX2qR"
              target="blank">
              {theme ? (
                <img alt="" src={logos.darkDc} className={cx('icon')} />
              ) : (
                <img alt="" src={logos.discord} className={cx('icon')} />
              )}
            </a>
            <a
              className={cx('link-to')}
              href="https://github.com/bestofjs/bestofjs-webui"
              target="blank">
              <GithubOutlined className={cx('icon')} />
            </a>
          </div>
          <div className={cx('menu-home')}>
            <label className={cx('label')} htmlFor="home">
              <FontAwesomeIcon icon={faBars} className={cx('icon')} />
            </label>
          </div>
          <input type="checkbox" className={cx('input-home')} id="home" />
          <div className={cx('sub-menu')}>
            <label htmlFor="home">
              <FontAwesomeIcon className={cx('icon')} icon={faXmark} />
            </label>
            <div className={cx('menu')}>
              {subMenu.map((title, index) => (
                <div className={cx('item')} key={index} onClick={() => handleClose()}>
                  <NavLink to={title.link}>{title.title}</NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderMain;
