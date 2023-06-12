import classNames from "classnames/bind";
import ky from "ky";
import styles from "./ResultSearch.module.scss";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
function ResultSearch({ onClick }) {
    const [tags, setTags] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await ky(
                "https://bestofjs-static-api.vercel.app/projects.json",
                {
                    retry: {
                        limit: 10,
                        methods: ["get"],
                        statusCodes: [413],
                        backoffLimit: 3000,
                    },
                }
            ).json();
            const data = await response.tags;
            return setTags(data);
        }
        getData();
    }, []);
    return (
        <div className={cx("wrapper-result-search")}>
            {tags.map((tag, index) => (
                <div key={index} className={cx("item-tag")}>
                    <span className={cx("tag")}>{tag.name}</span>
                </div>
            ))}
        </div>
    );
}

export default ResultSearch;
