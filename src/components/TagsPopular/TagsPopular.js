import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./TagsPopular.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import TagItem from "../TagItem/TagItem";
const cx = classNames.bind(styles);
function TagsPopular() {
    return (
        <div className={cx("wrapper-tags-popular")}>
            <div className={cx("container")}>
                <div className={cx("tags")}>
                    <TagItem />
                    <TagItem />
                    <TagItem />
                    <TagItem />
                    <TagItem />
                    <TagItem />
                    <TagItem />
                    <TagItem />
                    <TagItem />
                    <TagItem />
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

export default TagsPopular;
