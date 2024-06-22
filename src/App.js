import React from 'react';
import { Route,BrowserRouter, Routes } from 'react-router-dom';
import JobListingPage from './component/joblistingPage';
import Navpage from './component/firstpage';
import OtpVerificationPage from './component/home';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path="/" exact element={<Navpage/>} />
      <Route path="/otp" exact element={<OtpVerificationPage/>} />
      <Route path="/jobs" exact element={<JobListingPage/>} />

      </Routes>
    </div>
  </BrowserRouter>
  );
};

export default App;
