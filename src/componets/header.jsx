import {NavLink} from "react-router-dom";


const Header = () => {
    return(
        <header className="w-[80%] h-[45px] flex justify-evenly text-blue-700 text-2xl font-bold">
            <NavLink to="/dummyTable" className="hover:text-green-600 transition">Dummy Table</NavLink>
            <NavLink to="/dummyChart" className="hover:text-green-600 transition">Dummy Chart</NavLink>
            <NavLink to="/dummyList" className="hover:text-green-600 transition">Dummy List</NavLink>
        </header>
    )
}
export default Header;