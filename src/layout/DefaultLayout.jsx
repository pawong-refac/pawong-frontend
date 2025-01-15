import Header from "../components/Common/Header/Header";
import NavBar from "../components/Common/NavBar/NavBar";
import AppPages from "../route/AppPages";
import ScrollToTop from "./ScrollToTop";

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <ScrollToTop />
            <AppPages />
            <NavBar />
        </>
    );
};

export default DefaultLayout;