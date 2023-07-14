import React, { useState } from "react";
import './App.css';
import { Link } from 'react-router-dom';


function Login() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [name, setname] = useState('');
  const [vehicle, setvehicle] = useState('');

  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  const handleVehicleChange = (e) => {
    setvehicle(e.target.value);
  };

  const handleSubmit = (e) => {
    if(!name){
      alert("please enter the username")
    }
    else if(!vehicle){
      alert("please enter the vechile No")
    }
    else{
      alert("Login sucessful")
      // e.preventDefault();
      // Perform sign-in logic here, such as making an API call to authenticate the user
      console.log('Name:', name);
      console.log('Vehicle:', vehicle);
      // Reset form fields
      setname('');
      setvehicle('');
    }
  };
 

  
  

  return (
    <div className="container">
      <div className={`form-container ${isLoginForm ? "active" : ""}`} id="login-form">
        <h1>Login</h1>
        <form >
          <label htmlFor="username">Username</label>
          <input className="margin" type="text" id="username" name="username" placeholder="Enter username" value={name} onChange={handleNameChange} required/>
          <label htmlFor="password">Password</label>
          <input  className="margin" type="password" id="password"  placeholder="Enter password" value={vehicle} onChange={handleVehicleChange} required/>
          </form>
          <button  onClick={handleSubmit} type="submit">Login</button>
        <p>
          Don't have an account?{" "}
          <Link to="/signup"  id="signup-link" >
            New User
          </Link>
        </p>
      </div>
      
    </div>
  );
}

export default Login;