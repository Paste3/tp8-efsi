import { Outlet } from "react-router-dom";
import MyNavBar from "./NavBar";
const Layout = () => {
    return (
        <>
            <MyNavBar></MyNavBar>
            <Outlet />
        </>
    );
};

export default Layout;