import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import styles from "./HeaderMain.module.scss";
import logos from "../../assets/logos";
import linkPages from "../../pages/linksPages";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMoon } from "@fortawesome/free-solid-svg-icons";
import MoreBtn from "../MoreBtn/MoreBtn";
import DropdownBM from "../DropdownBM/DropdownBM";

const menuPages = [
    {
        Title: "Home",
        to: linkPages.homePage,
    },
    {
        Title: "Project",
        to: linkPages.projectPage,
    },
    {
        Title: "Tags",
        to: linkPages.tagsPage,
    },
];
const cx = classNames.bind(styles);
function HeaderMain() {
    const [visible, setVisible] = useState(false);
    const [logout, setLogout] = useState(false);
    const menuMore = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <div className={cx("wrapper-dropdown-more")}>
                <MoreBtn />
            </div>
        </div>
    );
    const logOut = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <div className={cx("wrapper-dropdown-account")}>
                <DropdownBM />
            </div>
        </div>
    );
    useEffect(() => {
        //reload
        const activeURL = document.URL.slice(21); // 21 is baseurl
        //active underline
        const removeLine = document.getElementsByClassName(cx("active-line"));
        const underlined = document.getElementsByClassName(cx("line"));

        const pageAtive = document.getElementsByClassName(cx("btn-page"));
        // title page
        const removeText = document.getElementsByClassName(cx("text-color"));
        const linkPage = document.getElementsByClassName(cx("link-page"));

        //handle click
        for (let i = 0; i <= pageAtive.length - 1; i++) {
            pageAtive[i].addEventListener("click", function () {
                if (removeLine.length === 1) {
                    removeLine[0].classList.remove(cx("active-line"));
                }
                underlined[i].classList.add(cx("active-line"));

                if (removeText.length === 1) {
                    removeText[0].classList.remove(cx("text-color"));
                }
                linkPage[i].classList.add(cx("text-color"));
            });
        }
        // handle reload
        const setActiveURL = () => {
            for (let i = 0; i <= linkPage.length - 1; i++) {
                const links = linkPage[i].attributes.href.value;
                if (links === activeURL) {
                    underlined[i].classList.add(cx("active-line"));
                    linkPage[i].classList.add(cx("text-color"));
                }
            }
        };
        window.onload = setActiveURL();
        //click logo come back home
        const logoLink = document.getElementsByClassName(cx("logo-page"));
        logoLink[0].addEventListener("click", function () {
            removeLine[0].classList.remove(cx("active-line"));
            underlined[0].classList.add(cx("active-line"));

            removeText[0].classList.remove(cx("text-color"));
            linkPage[0].classList.add(cx("text-color"));
        });
    }, []);
    return (
        <header className={cx("wrapper-header-main")}>
            <div className={cx("container")}>
                <div className={cx("header-left")}>
                    <Link to={linkPages.homePage} className={cx("logo")}>
                        <img
                            className={cx("logo-page")}
                            src={logos.logoPage}
                            alt=""
                        />
                    </Link>
                    <div className={cx("menu-page")}>
                        <div className={cx("pages")}>
                            {menuPages.map((page, index) => (
                                <div className={cx("btn-page")} key={index}>
                                    <Link
                                        to={page.to}
                                        className={cx("link-page")}
                                    >
                                        <span className={cx("title")}>
                                            {page.Title}
                                        </span>
                                    </Link>
                                    <div className={cx("line")}></div>
                                </div>
                            ))}
                        </div>
                        <Tippy
                            visible={visible}
                            interactive
                            // delay={[100, 100]}
                            placement="bottom-start"
                            render={menuMore}
                            onClickOutside={() => setVisible(false)}
                        >
                            <button
                                className={cx("more-page")}
                                onClick={() => setVisible(!visible)}
                            >
                                More
                                <FontAwesomeIcon
                                    className={cx("icon")}
                                    icon={faChevronDown}
                                />
                            </button>
                        </Tippy>
                    </div>
                </div>
                {/* right */}
                <div className={cx("header-right")}>
                    <div className={cx("account-theme")}>
                        <Tippy
                            visible={logout}
                            interactive
                            // delay={[100, 100]}
                            placement="bottom-end"
                            render={logOut}
                            onClickOutside={() => setLogout(false)}
                        >
                            <button
                                className={cx("btn-account")}
                                onClick={() => setLogout(!logout)}
                            >
                                <img className={cx("avt-account")} alt="" />
                                <FontAwesomeIcon
                                    className={cx("icon")}
                                    icon={faChevronDown}
                                />
                            </button>
                        </Tippy>
                        <button className={cx("theme")}>
                            <FontAwesomeIcon
                                icon={faMoon}
                                className={cx("icon")}
                            />
                        </button>
                    </div>
                    <div className={cx("partition")}></div>
                    <div className={cx("discord-github")}>
                        <a
                            className={cx("link-to")}
                            href="https://discord.com/invite/rdctdFX2qR"
                            target="blank"
                        >
                            <img
                                alt=""
                                src={logos.discord}
                                className={cx("icon")}
                            />
                        </a>
                        <a
                            className={cx("link-to")}
                            href="https://github.com/bestofjs/bestofjs-webui"
                            target="blank"
                        >
                            <img
                                alt=""
                                src={logos.github}
                                className={cx("icon")}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderMain;
