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
    const [activechat, setActivechat] = useState('');
    const [allprofiles, setAllprofile] = useState([]);
    const [activeprofile, setActiveprofile] = useState([]);
    const [gottendata, setgottendata] = useState([])
    const [chatdata, setChatdata] = useState([]);
    const [activeuserid, setactiveuserid] = useState('');
    const [conversationdata, setconversationdata] = useState([]);
    const [allChat, setAllchat] = useState([]);
    const [activechatdata, setActivechatdata] = useState([]);
    

    function newupdateactiveuser(id){

    console.log('clickedddddddd')

        setActivechat(id);

      
        updateActiveUser(id);
      }


      function updateActiveUser(id) {
        
        
        let active = id;
        console.log('active is ', active);
        console.log('all chat is',  chatdata)

        
        // Call createProfileIfNotExists and wait for it to finish
        if (!allChat.some(profile => profile.to_id == active || profile.from_id == active)) {
        //   createProfileIfNotExists(active)
        //   .then(() => {
        //       // Once createProfileIfNotExists is finished, continue with the rest of the code
  
        //       const activeProfile = AllChats.find(profile => profile.to_id == active || profile.from_id == active);
        //       console.log('activeprofile is ', activeProfile);
  
        //       activeuser = chatData.find(profile => String(profile.id) === String(active));
             
        //       activeprofiledata = activeuser
        //       // console.log('active user is', activeprofiledata);
        //       // alert('loading')

        //       conversationData = activeProfile.conversationDatas;
        //       console.log('convo data is', conversationData);
        //       console.log('activeuser is ',activeuser)
        //       document.getElementById('usersname').innerHTML = activeuser?.name;
        //       document.getElementById('lastseen').innerHTML = formatDateTime(activeuser?.lastSeen) ;
        //       document.getElementById('pname').innerHTML = `${activeuser?.name}`;
        //       document.getElementById('pphone').innerHTML = `${activeuser?.phoneNumber}`;
        //       document.getElementById('ptext').innerHTML = `${activeuser?.quote}`;
        //       document.getElementById('profilephoto').src = `${activeuser?.avatar}`
        //       myswitchmobile()
        //       showme();
        //       renderConversation();
        //       audplayer()
        //       const filteredArray = conversationData?.filter(obj => obj?.imageUrl && obj.type !== "deleted");
  
            
        //       adjustTextareaHeight();
        //       if (filteredArray) {
        //           const imagecontainer = document.getElementById('mediablob');
        //           imagecontainer.innerHTML = '';
        //           filteredArray.forEach(date => {
        //               const messageHTML = createimages(date);
        //               imagecontainer.innerHTML += messageHTML;
        //           });
        //       }
  
             
        //       console.log(active);
        //   })
        //   .catch(error => {
        //       console.error('Error creating profile:', error);
        //   });

        console.log('waitttt')
        } else{
          const myactiveProfile = allChat.find(profile => profile.to_id == active || profile.from_id == active);


       const activeuser = chatdata.find(profile => String(profile.userid) === String(active));
         
          setActiveprofile(myactiveProfile)
          console.log('active user is', activeuser);
          setActivechatdata(activeuser)
          // alert('already exist')
     
          setconversationdata(myactiveProfile.conversationDatas);
          console.log('convo data is', conversationdata);


          const filteredArray = conversationdata?.filter(obj => obj?.imageUrl && obj.type !== "deleted");

        


         
      

        }


    

    }

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
            setgottendata(response.data.usecase)
          })
          .catch(error => {
            console.error(error.message);

          });
      }

      function formatChatDateTime(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
      
        if (diffInDays === 0) {
          // Today: Show only time
          const options = {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          };
          return new Intl.DateTimeFormat('en-US', options).format(date);
        } else if (diffInDays === 1) {
          // Yesterday: Show 'Yesterday'
          return 'Yesterday';
        } else {
          // Other days: Show date in the format 'MM-DD-YYYY'
          const day = date.getDate().toString().padStart(2, '0');
          const month = (date.getMonth() + 1).toString().padStart(2, '0');
          const year = date.getFullYear();
          return `${month}-${day}-${year}`;
        }
      }
function getlasttime(id){
        const now = new Date();
        const mygdata = gottendata.find(gd => gd?.messageid?.messageid == id )
        
        if( mygdata  ){
      
          if(mygdata?.testj?.length > 0){
      
            return formatChatDateTime(mygdata?.testj?.pop()?.messagetime);
      
          }else{
           
           return formatChatDateTime(now);
          }
          
        } 
        else{
          return formatChatDateTime(now);
        }
      
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
              time: getlasttime(item.messageid),
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
     
        setChatdata(newArray)
        console.log('chatdata', newArray)

        fdatatwo(newArray)
      }

      let temporarydata 
      function aud (id) {
        
        // console.log('temp', temporarydata.find(au => au.userid == id || au.id == id))
        return  temporarydata.find(au => au.userid == id || au.id == id)
        }

async function fdatatwo(data) {
        temporarydata= data
        const access = Cookies.get("access_token");
        const arrayToken = access.split('.');
        const tokenPayload = JSON.parse(atob(arrayToken[1]));
        try {
          const response = await axiosInstance.get('/messagedashboard');
          console.log(response);
       
          // Redirect to success.html with the random ID as a parameter
          let allfetchmessage = []
          response?.data?.allmessages.forEach(item => {  
      
            if (item?.messageid?.sender?.id === tokenPayload?.user_id) {
            allfetchmessage.push({
              'chat_id': item?.messageid?.messageid,
               from_id: tokenPayload?.user_id, 
               to_id: aud(item?.messageid?.reciever?.id)?.userid,
                conversationDatas: item.testj
            });
      
          }
          else if (item?.messageid?.reciever?.id === tokenPayload?.user_id) {
            allfetchmessage.push({
              'chat_id': item?.messageid?.messageid,
               from_id: aud(item?.messageid?.sender?.id,)?.userid, 
               to_id:  tokenPayload?.user_id ,
                conversationDatas: item.testj
            });
      
      
          }
      
        
          })
     
          setAllchat(allfetchmessage) 
          console.log('all fetch', allfetchmessage)
      
        } catch (error) {
          console.error(error.message);
          toast.error(error.message || 'An Error Occurred')
        }
      
      }

      useEffect(() => {
        fdata();
      }, []);
    return (
        <VeeContext.Provider
          value={{
            test,
            allprofiles,
            chatdata,
            newupdateactiveuser,
            activeuserid,
            activechat,
            activechatdata,
            conversationdata
          }}
        >
          {children}
        </VeeContext.Provider>
      );
    };