import { Link } from 'react-router-dom'; 

const Nav = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link to='/' className="btn btn-ghost text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8">
                    <Link to='/'>Home</Link>
                    <Link to='/Static'>Static</Link>
                    <Link to='/Dashboard'>Dashboard</Link>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <Link to='/Button1' className="btn">Button1</Link >
                <Link to='/Button2' className="btn">Button2</Link >
            </div>
        </div>
    );
};

export default Nav;