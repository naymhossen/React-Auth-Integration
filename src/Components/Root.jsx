import { Outlet } from "react-router";
import Header from "./Header";


const Root = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;