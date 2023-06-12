import classNames from "classnames/bind";
import styles from "./StackProject.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faStar } from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function StackProject({ data }) {
    // const name = data.name;
    return (
        <div className={cx("wrapper-stack-project")}>
            <div className={cx("container")}>
                <div className={cx("avt")}>
                    <img
                        src="https://avatars.githubusercontent.com/u/97241560?v=3&s=50"
                        alt=""
                    />
                </div>
                <div className={cx("information")}>
                    <div className={cx("name-link")}>
                        <Link to={`/`}>Name Project</Link>
                        <div className={cx("link")}>
                            <div>
                                <FontAwesomeIcon
                                    className={cx("icon")}
                                    icon={faHome}
                                />
                            </div>
                            <div>
                                <FontAwesomeIcon
                                    className={cx("icon")}
                                    icon={faBookmark}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx("desc")}>
                        The React library to build dashboards fast.
                    </div>
                    <div className={cx("language")}>
                        <button>React</button>
                        <button>Dashbroad</button>
                        <button>TailwinCSS</button>
                    </div>
                </div>
                <div className={cx("time")}></div>
                <div className={cx("star")}>
                    <span>+357</span>
                    <FontAwesomeIcon className={cx("icon")} icon={faStar} />
                </div>
            </div>
        </div>
    );
}

export default StackProject;
