import classNames from "classnames/bind";
import styles from "./TagItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function TagItem() {
    return (
        <div className={cx("wrapper-tag-item")}>
            <div className={cx("container")}>
                <span>React</span>
                {
                    <div className={cx("language")}>
                        <div>
                            <img
                                src="https://bestofjs.org/logos/react.svg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://bestofjs.org/logos/react.svg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://bestofjs.org/logos/react.svg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://bestofjs.org/logos/react.svg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://bestofjs.org/logos/react.svg"
                                alt=""
                            />
                        </div>
                        <button>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                }
            </div>
        </div>
    );
}

export default TagItem;
