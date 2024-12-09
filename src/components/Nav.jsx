import { NavLink, useLocation } from "react-router-dom";

// import { NavLink, useLocation } from "react-router-dom";


const Nav = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div>
            <div className={`my-7 mx-16 rounded-xl ${isHomePage ? 'bg-[#9538E2] text-white' : 'bg-white text-black'}`}>
                <div className="navbar px-32 py-7">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                <NavLink
                                    className={({ isActive }) =>
                                        `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
                                    }
                                    to="/"
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
                                    }
                                    to="/statistics"
                                >
                                    Statistics
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
                                    }
                                    to="/dashboard"
                                >
                                    Dashboard
                                </NavLink>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-2xl font-bold" style={{ color: isHomePage ? 'white' : 'black' }}>Gadget Heaven</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-5">
                            <NavLink
                                className={({ isActive }) =>
                                    `font-bold ${isActive
                                        ? isHomePage ? 'text-white' : 'text-black'
                                        : isHomePage ? 'text-white' : 'text-black'
                                    }`
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `font-bold ${isActive
                                        ? isHomePage ? 'text-white' : 'text-black'
                                        : isHomePage ? 'text-white' : 'text-black'
                                    }`
                                }
                                to="/statistics"
                            >
                                Statistics
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `font-bold ${isActive
                                        ? isHomePage ? 'text-white' : 'text-black'
                                        : isHomePage ? 'text-white' : 'text-black'
                                    }`
                                }
                                to="/dashboard"
                            >
                                Dashboard
                            </NavLink>
                            <NavLink
                                className="btn -mt-3 font-bold bg-[#9538E2] text-white"
                                to="/signUp"
                            >
                                Sign Up
                            </NavLink>
                        </ul>
                    </div>
                    <div className="navbar-end gap-4">
                        <div tabIndex="0" role="button" className="btn btn-circle hidden lg:block pt-3 drop-shadow-3xl rounded-full border">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </div>
                        <button className="btn btn-circle hidden lg:block pl-3 drop-shadow-2xl rounded-full border">
                            <img width="26" height="26" src="https://img.icons8.com/ios/50/like--v1.png" alt="like icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
