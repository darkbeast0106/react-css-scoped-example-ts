import { Link, Outlet } from "react-router-dom";

function Layout() {
    return ( <>
    <nav>
        <ul>
            <li>
                <Link to={"/"}>Main Page</Link>
            </li>
            <li>
                <Link to={"/other"}>Other Page</Link>
            </li>
        </ul>
    </nav>
    <main>
        <Outlet />
    </main>
    </> );
}

export default Layout;