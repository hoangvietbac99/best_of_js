import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from "./TagsPage.module.scss";
import TagsPopular from "../../components/TagsPopular/TagsPopular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SortTags from "../../components/SortTags/SortTags";
const cx = classNames.bind(styles);

function TagsPage() {
    const [visible, setVisible] = useState(false);
    const sort = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <div className={cx("wrapper-dropdown-more")}>
                <SortTags />
            </div>
        </div>
    );
    return (
        <main className={cx("wrapper-tag-page")}>
            <div className={cx("container")}>
                <div className={cx("title")}>
                    <h1>All Tags</h1>
                    <div className={cx("arrow")}>
                        <Tippy
                            visible={visible}
                            interactive
                            placement="bottom-end"
                            render={sort}
                            onClickOutside={() => setVisible(false)}
                        >
                            <button
                                className={cx("sort")}
                                onClick={() => setVisible(!visible)}
                            >
                                Sort: By total number of stars
                                <FontAwesomeIcon
                                    className={cx("icon")}
                                    icon={faChevronDown}
                                />
                            </button>
                        </Tippy>
                        <div className={cx("arrow-pages")}>
                            {`Showing 1 - 20 of 224 `}
                            <button>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={cx("content")}>
                    <TagsPopular />
                </div>
            </div>
        </main>
    );
}

export default TagsPage;
