import classnames from "classnames/bind";
import styles from "./BroadProject.module.scss";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import StackProject from "../StackProject/StackProject";
// import { Link } from "react-router-dom";
const cx = classnames.bind(styles);

function BroadProject({ data }) {
    return (
        <div className={cx("wrapper-broad-project")}>
            <div className={cx("container")}>
                <div className={cx("broad-project")}>
                    <div className={cx("broad")}>
                        {/* {data.map((item, index) => ( */}
                        <div>
                            <StackProject />
                        </div>
                        {/* ))} */}
                        {/* <Link to="/" className={cx("view-full")}>
                            <span>
                                View full rankings
                                <FontAwesomeIcon
                                    className={cx("icon")}
                                    icon={faAnglesRight}
                                />
                            </span>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BroadProject;
