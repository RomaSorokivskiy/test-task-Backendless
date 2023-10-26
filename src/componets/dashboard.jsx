import Header from "./header";
import {Outlet} from "react-router-dom";


const Dashboard = () => {
    return(
        <div className="flex w-full h-full justify-center items-center flex-col">
            <Header/>
            <Outlet/>
        </div>
    )
}
export default Dashboard;