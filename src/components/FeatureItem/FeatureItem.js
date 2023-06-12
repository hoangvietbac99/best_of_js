import classNames from "classnames/bind";
import styles from "./FeatureItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
const cx = classNames.bind(styles);
function FeatureItem() {
    return (
        <div className={cx("wrapper-feature-item")}>
            <div className={cx("container")}>
                <div className={cx("avt")}>
                    <img src="https://bestofjs.org/logos/ant.svg" alt="" />
                </div>
                <div className={cx("information")}>
                    <div className={cx("name")}>
                        <a href="/">Ant Design Mobile</a>
                    </div>
                    <div className={cx("star")}>
                        <span> +37</span>
                        <FontAwesomeIcon className={cx("icon")} icon={faStar} />
                    </div>
                    <div className={cx("btn")}>
                        <button>Mobile</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureItem;
