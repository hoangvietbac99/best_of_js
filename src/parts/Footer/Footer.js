import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import logos from "../../assets/logos";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const directLinks = [
    {
        title: "Project",
        to: "/project",
        p: "All projects tracked by Best of JS",
    },
    {
        title: "Tags",
        to: "/tags",
        p: "The +180 tags manually picked to classify all projects",
    },
    {
        title: "Hall Of Fame",
        to: "/hall-of-fame",
        p: "Some of the most influent members of the community",
    },
    {
        title: "Timeline",
        to: "/timeline",
        p: "2006 - 2020 in 20 projects, a short story from jQuery to Rome",
    },
    {
        title: "About",
        to: "/about",
        p: "Why do we track the best of JavaScript since 2015",
    },
];

const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx("wrapper-footer")}>
            <div className={cx("wrapper-container")}>
                <div className={cx("scroll-top")}></div>
                <div className={cx("container")}>
                    <section className={cx("footer-top")}>
                        <div className={cx("logo-github")}>
                            <img
                                className={cx("logo")}
                                src={logos.logoFooter}
                                alt=""
                            />
                            <div className={cx("github")}>
                                <img src={logos.github} alt="" />
                                <span>v0.36.0</span>
                            </div>
                        </div>
                        <div className={cx("direct-links")}>
                            <h4>DIRECT LINKS</h4>
                            <ul className={cx("describe")}>
                                {directLinks.map((direct, index) => (
                                    <li key={index} className={cx("item")}>
                                        <div className={cx("link-to-page")}>
                                            <Link to={direct.to}>
                                                {direct.title}
                                            </Link>
                                        </div>
                                        <span>{direct.p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={cx("related-projects")}>
                            <h4>RELATED PROJECTS</h4>
                            <div className={cx("rising-state")}>
                                <div className={cx("rising")}>
                                    <div className={cx("link")}>
                                        <a
                                            href="https://risingstars.js.org/2022/en"
                                            target="blank"
                                        >
                                            JavaScript Rising Stars
                                            <FontAwesomeIcon
                                                className={cx("icon")}
                                                icon={faRightFromBracket}
                                            />
                                        </a>
                                    </div>
                                    <span>
                                        Our annual round-up about the JavaScript
                                        landscape
                                    </span>
                                </div>
                                <div className={cx("img")}>
                                    <img
                                        className={cx("img-js")}
                                        src={logos.risingStars}
                                        alt=""
                                    />
                                </div>
                                <div className={cx("rising")}>
                                    <div className={cx("link")}>
                                        <a
                                            href="https://risingstars.js.org/2022/en"
                                            target="blank"
                                        >
                                            State of JS
                                            <FontAwesomeIcon
                                                className={cx("icon")}
                                                icon={faRightFromBracket}
                                            />
                                        </a>
                                    </div>
                                    <span>
                                        The biggest annual JavaScript-specific
                                        survey
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={cx("footer-bottom")}>
                        <div className={cx("wrapper-bt")}>
                            <div className={cx("paragraph")}>
                                <p>
                                    Data is updated from GitHub everyday, the
                                    last update was 13 hours ago (at 4:23 AM).
                                </p>
                            </div>
                            <div className={cx("paragraph")}>
                                <p>
                                    <i>Best of JS</i> is a project by{" "}
                                    <a href="https://www.michaelrambeau.com/">
                                        Michael Rambeau
                                    </a>
                                    , made in Osaka, Japan.
                                </p>
                            </div>
                            <div className={cx("paragraph")}>
                                <p>
                                    Powered by{" "}
                                    <a href="https://vercel.com/">
                                        <img
                                            src="https://bestofjs.org/svg/vercel.svg"
                                            alt=""
                                        />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className={cx("footer-line")}></div>
        </footer>
    );
}

export default Footer;
