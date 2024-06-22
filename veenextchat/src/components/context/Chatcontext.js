"use client";

import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Toaster, toast } from "sonner";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
// Create the context
export const VeeContext = createContext();


export const VeeContextProvider = ({ children }) => {
    const router = useRouter();
    const [test, setTest] = useState('');
    const [allprofiles, setAllprofile] = useState([]);
    const [chatdata, setChatdata] = useState([]);
    const [activeuserid, setactiveuserid] = useState('');
    


    async function refreshAccessToken() {
        try {
          const refreshToken = Cookies.get("refresh_token");
          if (!refreshToken) {
            throw new Error("Refresh token not found");
          }
          const response = await axios.post(
            "'https://veejobapi.vercel.app/api/token/refresh/",
            { refresh: refreshToken }
          );
          const newAccessToken = response.data.access;
          const newRefreshToken = response.data.refresh;
          // Cookies.set('access_token', newAccessToken); // Save new access token
          // Cookies.set('refresh_token', newRefreshToken); // Save new refresh token
          Cookies.set("access_token", response.data.access, { expires: 14 });
          Cookies.set("refresh_token", response.data.refresh, { expires: 14 });
          console.log("token refreshed");
          return newAccessToken; // Return the new access token
        } catch (error) {
          throw new Error("Failed to refresh access token");
        }
      };
    
    const axiosInstance = axios.create({
        baseURL: "https://veejobapi.vercel.app/", // Update base URL
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Request interceptor
      axiosInstance.interceptors.request.use(
        async (config) => {
          const access = Cookies.get("access_token");
          if (access) {
            const arrayToken = access.split(".");
            const tokenPayload = JSON.parse(atob(arrayToken[1]));
            const isExpired =
              Math.floor(new Date().getTime() / 1000) >= tokenPayload.exp;
            if (isExpired) {
              try {
                const newAccessToken = await refreshAccessToken();
                config.headers.Authorization = `Bearer ${newAccessToken}`;
                return config;
              } catch (error) {
                console.error("Failed to refresh access token:", error);
                //   VanillaToasts.create({
                //     title: 'Error!',
                //     text:  'Session Expired' ,
                //     type: 'error',
                //     timeout: 5000
                // });
    
                setTimeout(function () {
                  // Redirect to success.html with the random ID as a parameter
                  // window.location.href = `login.html`;
                  router.replace("/auth/login");
                }, 2000); // 2000 milliseconds = 2 seconds
                return Promise.reject(new Error("Failed to refresh access token"));
              }
            } else {
              config.headers.Authorization = `Bearer ${access}`;
            }
          } else {
            // Access token not found, handle redirect to login or show error message
            console.log("Access token not found");
            // Example: Redirect to login page
            // window.location.href = '/login';
            //   VanillaToasts.create({
            //     title: 'Error!',
            //     text:  'Session Expired' ,
            //     type: 'error',
            //     timeout: 5000
            // });
            console.log("session expired");
    
            setTimeout(function () {
              // Redirect to success.html with the random ID as a parameter
              router.replace("/auth/login");
            }, 2000); // 2000 milliseconds = 2 seconds
            return Promise.reject(new Error("Access token not found"));
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      // Response interceptor
      axiosInstance.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          // Handle errors
          return Promise.reject(error);
        }
      );

    
      function fdata() {
        axiosInstance.get('/chatdashboard') // Update endpoint for protected route
          .then(response => {
            continuation(response)
            // setAllprofile(response.data.allprofile);
            // setChatdata(response.data.usecase);
          })
          .catch(error => {
            console.error(error.message);

          });
      }


      function continuation(response){
        
        const access = Cookies.get("access_token");
        const arrayToken = access.split('.');
        const tokenPayload = JSON.parse(atob(arrayToken[1]));
        console.log(tokenPayload)
        setactiveuserid(tokenPayload?.user_id)
        let data = response?.data?.usecase
        let allusers = response?.data?.allprofile
        let newArray = [];
        let allusersarray = []
      
        if (data?.length > 0) {
          data.forEach(item => {
            const isSender = item?.sender?.id === tokenPayload?.user_id;
            const isReceiver = item?.reciever?.id === tokenPayload?.user_id;
        
            const user = isSender ? item.reciever : item.sender;
            const profile = isSender ? item.receiver_profile : item.sender_profile;
        
            newArray.push({
              id: isSender ? item.reciever.id : item.sender.id,
              userid: item.id,
              message_id: item.messageid,
              name: `${user.first_name} ${user.last_name}`,
              time: '', // Example value
              message: '',
              lastSeen: profile.last_seen,
              status: profile.profile_status,
              quote: profile.bio,
              phoneNumber: profile.phonenumber,
              email: user.email,
              avatar: profile.avatar,
            });
          });
          
        }
      
          if (allusers.length > 0) {
            allusers.forEach(item => {  
             
              allusersarray.push({
                id: item?.user?.id,
                name: `${item?.user?.first_name} ${item?.user?.last_name}`,
                avatar: item?.avatar,
                userid: item?.user?.id,
                email: item?.user?.email,
                lastSeen: item?.last_seen,
                quote: item?.bio,
                phoneNumber: item?.phonenumber,
              });
      
          })
        }
      
      
        setAllprofile(allusersarray)
        console.log(allusersarray);
        setChatdata(newArray)
  
      }

      useEffect(() => {
        fdata();
      }, []);
    return (
        <VeeContext.Provider
          value={{
            test,
            allprofiles,
            chatdata
          }}
        >
          {children}
        </VeeContext.Provider>
      );
    };