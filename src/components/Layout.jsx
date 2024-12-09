import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from"./Nav"

const Layout = () => {
    return (
        <div className="w-11/12 mx-auto ">
            {/* Navbar */}
            
            {/* change part */}
            <div>
                <Outlet></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Layout;