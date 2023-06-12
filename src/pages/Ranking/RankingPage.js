import ky from "ky";
import classNames from "classnames/bind";
import styles from "./RankingPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendar,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import StackProject from "../../components/StackProject/StackProject";
const cx = classNames.bind(styles);
function RankingPage() {
    const [items, setItems] = useState([]);
    // const handleNext = () => {nha vao thang/nam tra ve thang/nam};
    useEffect(() => {
        async function getData() {
            const response = await ky(
                "https://bestofjs-rankings.vercel.app/monthly/latest",
                {
                    retry: {
                        limit: 10,
                        methods: ["get"],
                        statusCodes: [413],
                        backoffLimit: 3000,
                    },
                }
            ).json();
            const data = await response.trending;
            return setItems(data.slice(0, 10));
        }
        getData();
    }, []);
    console.log(items);
    return (
        <main className={cx("wrapper-ranking-page")}>
            <div className={cx("container")}>
                <div className={cx("title")}>
                    <FontAwesomeIcon className={cx("icon")} icon={faCalendar} />
                    <h1>Monthly Rankings</h1>
                </div>
                <div className={cx("arrow")}>
                    <button>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <h2>May 2023</h2>
                    <button>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
                <div className={cx("rankings")}>
                    {items.map((item, index) => (
                        <div key={index}>
                            <StackProject />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default RankingPage;
