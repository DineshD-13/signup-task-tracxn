import React, { useState } from 'react';
import "../component/Css/first.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Navpage () {
  const router = useNavigate()
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
          ...userData,
          [name]: value
        });
      };
    
      const handleOnSubmitUserData = async (e) => {
        e.preventDefault();
        const url = "https://signup-task.vercel.app/signup";
        try {
          const response = await axios.post(url, userData, {
            headers: {
              'Content-Type': 'application/json',
              // You can add more headers here if needed
            }
          });
          if(response.status === 201){
            localStorage.setItem('email', userData.email);
            router("/otp")
          }else{

            console.log('Response:', response.data.message,response.status); // Handle the response data
          }          
        } catch (error) {
          alert(error.response.data.error);
        }
      };
    
      return (
        <div className="signup-container">
          <form className="signup-form" onSubmit={handleOnSubmitUserData}>
            <h2>Sign Up</h2>
            <div className="form-group">
              <label htmlFor="username">Name</label>
              <input
                type="text"
                id="username"
                name="username"
                value={userData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">Sign Up</button>
          </form>
        </div>
      );

    }
export default Navpage;