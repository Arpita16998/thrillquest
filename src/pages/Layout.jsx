import React from "react" ;
import Navbar from "../components/Navbar/Navbar" ;
import {Outlet} from "react-router-dom" ;
import Footer from "../components/Footer/Footer" ;

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="pt-24">
                <Outlet />
            </main>
            <Footer />
        </>
    ); 
};

export default Layout;