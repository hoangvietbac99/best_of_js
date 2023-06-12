import classNames from "classnames/bind";
import styles from "./DropdownBM.module.scss";
const cx = classNames.bind(styles);
const logOut = [
    {
        title: "Bookmarks",
        to: "/",
    },
    {
        title: "Sign out",
        to: "/",
    },
];
function DropdownBM() {
    return (
        <div className={cx("wrapper-logout")}>
            <div className={cx("container")}>
                {logOut.map((item, index) => (
                    <div key={index} className={cx("item")}>
                        {item.title}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DropdownBM;
