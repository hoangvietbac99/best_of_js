import classNames from "classnames/bind";
import styles from "./Features.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import FeatureItem from "../FeatureItem/FeatureItem";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Features() {
    return (
        <div className={cx("wrapper-feature")}>
            <div className={cx("container")}>
                <div className={cx("title-project")}>
                    <FontAwesomeIcon className={cx("icon")} icon={faStar} />
                    <div className={cx("title")}>
                        <h3>Featured Projects</h3>
                        <span>RANDOM ORDER</span>
                    </div>
                </div>
                <div className={cx("feature")}>
                    <FeatureItem />
                    <FeatureItem />
                    <FeatureItem />
                    <FeatureItem />
                    <FeatureItem />
                    <Link to="/featured" className={cx("view-full")}>
                        <span>
                            View more
                            <FontAwesomeIcon
                                className={cx("icon")}
                                icon={faAnglesRight}
                            />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Features;
