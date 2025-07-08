import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { HelmetProvider } from "react-helmet-async";

const Layout = () => {
    return(
        <>
            <HelmetProvider>
                <Header />
                <Outlet />
                <Footer />
            </HelmetProvider>
        </>
        
    )
}

export default Layout