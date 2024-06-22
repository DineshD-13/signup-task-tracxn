import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../component/Css/OtpVerificationPage.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const OtpVerificationPage = () => {
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('user@example.com'); // Placeholder for the email address
  const [emailVisible, setEmailVisible] = useState(false); // State to toggle email visibility
  const router = useNavigate()
useEffect(()=>{
setEmail(localStorage.getItem('email'))
},[])
  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleOnSubmitOtp = async (e) => {
    e.preventDefault();
    const url = "https://signup-task.vercel.app/verify-otp";
    try {
      const response = await axios.post(url, {otp,email}, {
        headers: {
          'Content-Type': 'application/json',
          // You can add more headers here if needed
        }
      });
      if(response.status === 201 ||response.status === 200){
        router("/jobs")
      }else{

        console.log('Response:', response.data.message,response.status); // Handle the response data
      }          
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const resendOtp = async () => {
    // Logic to resend OTP
    console.log('Resend OTP');
  };

  return (
    <div className="otp-container">
      <form className="otp-form" onSubmit={handleOnSubmitOtp}>
        <h2>Verify OTP</h2>
        <div className="form-group">
          <label htmlFor="otp">Enter OTP</label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={otp}
            onChange={handleChange}
            required
          />
        </div>
        <div className="email-info">
          <p>We've sent an OTP to {email}. Please check your email and enter the OTP below.</p>
        </div>
        <button type="submit" className="submit-button">Verify</button>
      
      </form>
    </div>
  );
};

export default OtpVerificationPage;
