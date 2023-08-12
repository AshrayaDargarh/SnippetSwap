import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Header = () => {
  const { isLoggedIn,logout } = useAuth();


  return (
    <>
    {isLoggedIn?
    <div className="nav-times">
        <ul className="flex flex-wrap md:justify-center pt-2  ">
          <li className="px-6">
            <Link to='/create'>Create</Link>
          </li>
          <li className="px-6">
            <Link to='/view'>View</Link>
          </li>
          <li className="px-6 ">
            <Link to='/profile'>Profile</Link>
          </li>
        </ul>
      </div>:
      <div className="nav-times">
        <ul className="flex">
        <li className="px-6"><Link ro='/'>Home</Link></li>
          <li className="px-6">
            <Link to='/login'>try it now</Link>
          </li>
        </ul>
      </div>}
    </>
  );
};

export default Header;
