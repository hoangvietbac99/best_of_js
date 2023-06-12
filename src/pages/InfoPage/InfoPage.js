import classNames from "classnames/bind";
import styles from "./InfoPage.module.scss";
import { useParams } from "react-router-dom";
const cx = classNames.bind(styles);
function InfoPage() {
    const { name } = useParams();
    console.log(name);
    return (
        <main className={cx("wrapper-info-page")}>
            <div className={cx("container")}>User {name}</div>
        </main>
    );
}

export default InfoPage;
