import classnames from "classnames/bind";
import styles from "./HomePage.module.scss";
import BroadProject from "../../components/BroadProject/BroadProject";
import Features from "../../components/Features/Features";
import TagsPopular from "../../components/TagsPopular/TagsPopular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
    faPlus,
    faTag,
    faChevronDown,
    faFireFlameCurved,
    faGift,
    faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
const cx = classnames.bind(styles);
const select = [
    {
        title: "To day",
    },
    {
        title: "This week",
    },
    {
        title: "This month",
    },
    {
        title: "This year",
    },
];
function HomePage() {
    const [visible, setVisible] = useState(false);
    const menu = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <div className={cx("wrapper-dropdown-menu")}>
                {select.map((item, index) => (
                    <div key={index}>
                        <span>{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
    return (
        <main className={cx("wrapper-home-page")}>
            <div className={cx("container")}>
                <h1>The best of JavaScript, HTML and CSS</h1>
                <div className={cx("broad-project")}>
                    <div className={cx("broad")}>
                        <div className={cx("hot-project")}>
                            <div className={cx("title-pj")}>
                                <FontAwesomeIcon
                                    className={cx("icon")}
                                    icon={faFireFlameCurved}
                                />
                                <div className={cx("title")}>
                                    <h3>Hot Projects</h3>
                                    <span>
                                        BY NUMBER OF STARS ADDED{" "}
                                        <b>THE LAST 24 HOURS</b>
                                    </span>
                                </div>
                                <Tippy
                                    visible={visible}
                                    interactive
                                    placement="bottom-end"
                                    render={menu}
                                    onClickOutside={() => setVisible(false)}
                                >
                                    <div
                                        className={cx("btn")}
                                        onClick={() => setVisible(!visible)}
                                    >
                                        <button>
                                            Today
                                            <FontAwesomeIcon
                                                className={cx("icon")}
                                                icon={faChevronDown}
                                            />
                                        </button>
                                    </div>
                                </Tippy>
                            </div>
                            <BroadProject data={[]} />
                        </div>
                        <div className={cx("recently")}>
                            <div className={cx("title-pj")}>
                                <FontAwesomeIcon
                                    className={cx("icon")}
                                    icon={faGift}
                                />
                                <div className={cx("title")}>
                                    <h3>Recently Added Projects</h3>
                                    <span>
                                        LATEST ADDITIONS TO <i>BEST OF JS</i>
                                    </span>
                                </div>
                            </div>
                            <BroadProject />
                        </div>
                    </div>
                    <div className={cx("feature")}>
                        <Features />
                        <div className={cx("popular")}>
                            <div className={cx("title-tag")}>
                                <FontAwesomeIcon
                                    className={cx("icon")}
                                    icon={faTag}
                                />
                                <div className={cx("title")}>
                                    <h3>Popular Tags</h3>
                                </div>
                            </div>
                            <TagsPopular />
                        </div>
                    </div>
                </div>
                <div className={cx("ranking")}>
                    <div className={cx("title-pj")}>
                        <FontAwesomeIcon
                            className={cx("icon")}
                            icon={faCalendar}
                        />
                        <div className={cx("title")}>
                            <h3>Monthly Rankings</h3>
                        </div>
                    </div>
                    <BroadProject />
                </div>
                <div className={cx("evaluate")}>
                    <div className={cx("content")}>
                        <h3>
                            <FontAwesomeIcon
                                className={cx("icon")}
                                icon={faHeart}
                            />
                            Do you find Best of JS useful?
                        </h3>
                        <p>
                            Show your appreciation by starring the project on
                            GitHub, or becoming a sponsor. Thank you for your
                            support!
                        </p>
                    </div>
                    <div className={cx("link")}>
                        <div className={cx("btn")}>
                            <a
                                target="blank"
                                href="https://github.com/bestofjs/bestofjs-webui"
                            >
                                Star On GitHub 2,196
                                <FontAwesomeIcon
                                    className={cx("icon")}
                                    icon={faStar}
                                />
                            </a>
                        </div>
                        <div className={cx("btn")}>
                            <a
                                target="blank"
                                href="https://github.com/sponsors/michaelrambeau"
                            >
                                Sponsor
                                <FontAwesomeIcon
                                    className={cx("icon")}
                                    icon={faHeart}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cx("evaluate")}>
                    <div className={cx("content")}>
                        <h3>
                            <FontAwesomeIcon
                                className={cx("icon")}
                                icon={faPlus}
                            />
                            Do you want more projects?
                        </h3>
                        <p>
                            Best of JS is a curated list of about 1500
                            open-source projects related to the web platform and
                            Node.js. If you want to suggest a new project,
                            please click on the following link: recommend a new
                            project.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
