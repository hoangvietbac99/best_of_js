import { Fragment } from "react";
import Footer from "../../parts/Footer/Footer";
import Header from "../../parts/Header/Header";
function LayoutMain({ children }) {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
}

export default LayoutMain;
