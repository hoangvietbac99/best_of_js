import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx("wrapper-header")}>
            <div className={cx("container")}>
                <div className={cx("header-main")}>
                    <HeaderMain />
                </div>
                <div className={cx("header-search")}>
                    <SearchHeader />
                </div>
            </div>
        </header>
    );
}

export default Header;
