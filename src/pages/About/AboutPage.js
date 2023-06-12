import classNames from "classnames/bind";
import styles from "./AboutPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
const cx = classNames.bind(styles);
function AboutPage() {
    return (
        <main className={cx("wrapper-about-page")}>
            <div className={cx("container")}>
                <h1>About</h1>
                <div className={cx("content")}>
                    <div>
                        <h3>Why Best of JS?</h3>
                        <p>
                            Javascript, HTML and CSS are advancing faster than
                            ever, we are going full speed on innovation. Amazing
                            open-source projects are released almost everyday.
                        </p>
                        <p>
                            • How to stay up-to-date about the latest
                            tendencies?
                        </p>
                        <p>
                            • How to check quickly the projects that really
                            matter, <b>now</b> and not 6 months ago?
                        </p>
                        <p>
                            Best of JS was created in 2015 to address these
                            questions.
                        </p>
                    </div>
                    <div>
                        <h3>Concept</h3>
                        <p>
                            Checking the number of stars on GitHub is a good way
                            to check project popularity but it does not tell you
                            when the stars have been added.
                        </p>
                        <p>
                            Best of JS takes "snapshot" of GitHub stars every
                            day, for a curated list of 1800 projects, to detect
                            the trends over the last months.
                        </p>
                    </div>
                    <div>
                        <h3>How it works</h3>
                        <p>
                            First, a list of projects related to the web
                            platform and Node.js (JavaScript, Typescript, but
                            also HTML and CSS) is stored in our database.
                        </p>
                        <p>
                            Every time we find a new interesting project, we add
                            it to the database.
                        </p>
                        <p>
                            Then everyday, an automatic task checks project data
                            from GitHub, for every project stored and generates
                            data consumed by the web application
                        </p>
                        <p>
                            The web application displays the total number of
                            stars and their variation over the last days.
                        </p>
                    </div>
                    <div>
                        <h3>Do you want more projects?</h3>
                        <p>
                            Rather than scanning all existing projects on
                            GitHub, we focus on a curated list of projects we
                            find "interesting", based on our experience and on
                            things we read on the internet.
                        </p>
                        <p>As a result, some great projects must be missing!</p>
                        <p>
                            Create a GitHub issue{" "}
                            <a
                                target="blank"
                                href="https://github.com/michaelrambeau/bestofjs/issues/new?template=add-a-project-to-best-of-javascript.md"
                            >
                                here
                            </a>{" "}
                            to suggest a new project to add.
                        </p>
                    </div>
                    <div>
                        <h3>Show your support!</h3>
                        <p>
                            If you find the application useful, you can star the
                            project's repository on{" "}
                            <a
                                target="blank"
                                href="https://github.com/bestofjs/bestofjs-webui"
                            >
                                GitHub
                            </a>{" "}
                            or{" "}
                            <a
                                target="blank"
                                href="https://github.com/sponsors/michaelrambeau"
                            >
                                become a sponsor
                            </a>
                            .
                        </p>
                        <p>
                            Thank you for your support, We are all made of stars
                            star{" "}
                            <FontAwesomeIcon
                                className={cx("icon")}
                                icon={faStar}
                            />{" "}
                            !
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AboutPage;
