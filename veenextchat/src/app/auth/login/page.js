'use client'
import Loginsideone from '@/components/loginlayout/Loginsideone'
import Loginsidetwo from '@/components/loginlayout/Loginsidetwo'
import React, { useState } from 'react'
import { Toaster, toast } from 'sonner'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';
const page = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsloading] = useState(false);
    
    
    const submitLogin = async () => {
        setIsloading(true)
        const payload = {
          username,
          password
        };
        const url = 'https://veejobapi.vercel.app/token/';

        console.log(payload);
        axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            // Successful login
            toast.success(`Login successfully`);
            Cookies.set('access_token', response.data.access, { expires: 14 });
            Cookies.set('refresh_token', response.data.refresh, { expires: 14 });
            // Save access and refresh tokens to localStorage
            setTimeout(function() {
                window.location.href = `/`;
            }, 2000);
    
            const token = response.data.access;
            const arrayToken = token.split('.');
            const tokenPayload = JSON.parse(atob(arrayToken[1]));
            console.log(tokenPayload);
    
        })
        .catch(error => {
            // Failed login

            toast.error(error.response ? error.response.data.message || 'Invalid Username or Password' : 'Failed to connect to server');
            // Hide loading spinner and enable submit button

        });
    
        // Add logic to handle the login, e.g., API call to authenticate the user
      };
  return (
    <>
  <div className="overlay" id="overlay" />

  <div className="loginform">
<Loginsideone/>
<Loginsidetwo>
<div className="login">
        <label htmlFor="username">Username</label>
        <div className="lbx">
          <input
            type="text"
            id="username"
            placeholder="Enter Your Username/Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className="login">
        <label htmlFor="password">
          Password <small className="fpass">Forgot Password?</small>
        </label>
        <div className="lbx">
          <input
            type="password"
            id="password"
            placeholder="••••••••••••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="login">
        <button id="submitBtn" onClick={submitLogin}>
          Submit
        </button>
        <button id="loadingBtn" style={{ display: 'none' }} disabled>
         Loading
        </button>
      </div>
</Loginsidetwo>
  </div>
</>

  )
}

export default page