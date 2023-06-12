import classNames from "classnames/bind";
import styles from "./SortProject.module.scss";
const cx = classNames.bind(styles);
const sort = [
    {
        title: "By total number of stars",
    },
    {
        title: "By stars added yesterday",
    },
    {
        title: "By stars added the last 7 days",
    },
    {
        title: "By stars added the last 30 days",
    },
    {
        title: "By stars added the last 12 month",
    },
    {
        title: "By download the last 30 days",
    },
    {
        title: "By date of the latest commit",
    },
    {
        title: "By number of the contributonrs",
    },
    {
        title: "By date of creation (Oldest first)",
    },
    {
        title: "By date of addition on best of JS",
    },
    {
        title: "Best matching",
    },
    {
        title: "By date of the bookmark",
    },
];
function SortProject() {
    return (
        <div className={cx("wrapper-sort-project")}>
            <div className={cx("container")}>
                {sort.map((item, index) => (
                    <div className={cx("item")} key={index}>
                        <div>{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SortProject;
