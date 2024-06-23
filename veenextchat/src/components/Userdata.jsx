import React, { useEffect, useRef , useContext} from 'react'
import { VeeContext } from "@/components/context/Chatcontext";

const Userdata = () => {
  const { test,activechatdata } = useContext(VeeContext);
  return (
<div className="mediafiles" id="mymedia">
  <div className="charheader">
    <div className="chatscreenheader">
      <div className="userdata">
        <div className="usersname">
          Contact info
          <small className="small">
            {" "}
            <img src="/Vector (47).svg" alt="" /> Verified
          </small>
        </div>
      </div>
      <div className="usersettings">
        <div className="search">
          <span className="material-symbols-outlined">cancel</span>
        </div>
      </div>
    </div>
  </div>
  <div className="mediaextradata">
    <div className="recepientprofile">
      <div className="recepientphoto">
        <img src={activechatdata?.avatar} alt="" />
      </div>
      <div className="recepientdetails">
        <div className="recepientname" id="pname" >{activechatdata?.name} </div>
        <div className="recepientnumber" id="pphone" > {activechatdata?.phoneNumber}  </div>
      </div>
    </div>
    <div className="recepientinfo">
      <div className="infotitle">Info</div>
      <div className="infotext" id="ptext">


      </div>
    </div>
    <div className="recentmedia">
      <div className="mediatitle">Media, Links and Documents</div>
      <div className="mediacontainer" id="mediablob">
        {/* <div class="media">
                                  <img src="https://images.unsplash.com/photo-1704642406927-d454ea541612?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy"
                                      alt="">
                              </div> */}
      </div>
    </div>
    <div className="messagesettings">
      <div className="marked">
        <div className="icon">
          <span className="material-symbols-outlined">star</span>
        </div>
        <div className="messagetext">Marked messages</div>
      </div>
      <div className="notification">
        <div className="icon">
          <span className="material-symbols-outlined">notifications</span>
        </div>
        <div className="messagetext">Notifications</div>
      </div>
    </div>
  </div>
  <div className="messagesettings nb">
    <div className="settings">
      <div className="icon">
        <span className="material-symbols-outlined">settings</span>
      </div>
      <div className="messagetext">Settings</div>
    </div>
  </div>
</div>

  )
}

export default Userdata