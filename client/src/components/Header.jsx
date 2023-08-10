import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <>
    {isLoggedIn?
    <div className="nav-times">
        <ul className="flex">
          <li className="px-6">
            <Link to='/create'>Create</Link>
          </li>
          <li className="px-6">
            <Link to='/view'>View</Link>
          </li>
          <li className="px-6">
            <Link to='profile'>Profile</Link>
          </li>
        </ul>
      </div>:
      <div className="nav-times">
        <ul className="flex">
        <li className="px-6"><Link ro='/'>Home</Link></li>
          <li className="px-6">
            <Link to='/signinup'>try it now</Link>
          </li>
         
        </ul>
      </div>}
      
    </>
  );
};

export default Header;
