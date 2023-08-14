import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import CreateIcon from "../assets/icons/CreateIcon";
import ViewIcon from "../assets/icons/ViewIcon";
import ProfileIcon from "../assets/icons/ProfileIcon";
const Header = () => {
  const { isLoggedIn,logout } = useAuth();
  return (
    <>
    {isLoggedIn?
    <div className="nav-times mb-8">
        <ul className="flex flex-wrap justify-center items-center sm:flex-row flex-col sm:gap-0 gap-3">
          <li className="px-6">
            <Link to='/create' className="flex items-center text-2xl font-bold"><img src="../../logo.svg"/><span>SnippetSwap</span></Link> 
          </li>
         
          <li className="px-6">
            <Link to='/create'> <button className=" px-3 py-2 rounded-md  bg-slate-800 hover:bg-slate-900 hover:duration-300 transition-all flex justify-center gap-2 items-center "><CreateIcon /> Create</button></Link>
          </li>
          <li className="px-6">
            <Link to='/view'>
            <button className=" px-3 py-2 rounded-md  bg-slate-800 hover:bg-slate-900 hover:duration-300 transition-all flex justify-center gap-2 items-center ">
             <ViewIcon/> View</button></Link>
          </li>
          <li className="px-6 ">
            <Link to='/profile'>
            <button className=" px-3 py-2 rounded-md  bg-slate-800 hover:bg-slate-900 hover:duration-300 transition-all flex justify-center gap-2 items-center ">
             <ProfileIcon/> Profile</button></Link>
          </li>
        </ul>
      </div>:
      <div className="nav-times">
        <ul className="flex flex-wrap justify-center items-center">
        <li className="px-20">
            <Link to='/create' className="flex items-center text-2xl font-bold"><img src="../../logo.svg"/><span>SnippetSwap</span></Link> 
          </li>
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
