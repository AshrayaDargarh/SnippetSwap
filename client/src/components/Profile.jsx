import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import ChangePassword from "./ChangePassword";

const initialState={
  userName:'',
  firstName:'',
  lastName:'',
  email:'',
  password:''
}
const Profile = () => {
  const [user, setUser] = useState(initialState);
  const [logo, setLogo] = useState("");
  const {logout}=useAuth()
  useEffect(() => {
    getUser();
  }, []);
  async function getUser() {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:3001/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
      setLogo(res.data.firstName[0]);
      console.log("user=", res.data);
    } catch (error) {
      console.log(error.response);
    }
  }
  async function handleSubmit(e)
  {
    e.preventDefault()
    try{
      const token=localStorage.getItem('token')
      const res=await axios.patch(`http://localhost:3001/user/${user._id}`,user,{headers:{Authorization:`Bearer ${token}`}})
      console.log(res.data)
    }catch(error)
    {
      console.log(error.response)
    }
  }
  function handleChange(e)
  {
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  return (
    <div >
       <form className="flex flex-col justify-center items-center mt-20 " onSubmit={handleSubmit}>
      <div className="w-20 bg-blue-400 h-20 rounded-full flex justify-center items-center">
        <p className="text-4xl font-extrabold"> {logo}</p>
      </div>
      <div className="mt-6 text-2xl font-bold">
        <p>Welcome, {user.firstName + " " + user.lastName}</p>
      </div>
     
      <div className="mt-5">
        <label htmlFor="userName" className="block text-lg">
          User Name
        </label>
        <input
          type="text"
          value={user.userName}
          placeholder="Enter user name"
          name="userName"
          id="userName"
          className="bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="firstName" className="block text-lg">
          First Name
        </label>
        <input
          type="text"
          value={user.firstName}
          placeholder="Enter first name"
          name="firstName"
          id="firstName"
          className="bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="lastName" className="block text-lg">
          Last Name
        </label>
        <input
          type="text"
          value={user.lastName}
          placeholder="Enter last name"
          name="lastName"
          id="lastName"
          className="bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mt-5">
        <label htmlFor="email" className="block text-lg">
          Email
        </label>
        <input
          type="text"
          value={user.email}
          placeholder="Enter your email"
          name="email"
          id="email"
          className="bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg"
          readOnly
        />
      </div>
      <div className="mt-6 ">
      <button className='bg-sky-600 p-2 mx-2 rounded-md' >Update Profile</button>
        <button className='bg-sky-600 p-2 rounded-md' type='button' onClick={logout}>Log out</button>
      </div>
      </form>
      <div className="flex justify-center">
      <ChangePassword id={user._id}/>
      </div>    
      </div>
  );
};

export default Profile;
