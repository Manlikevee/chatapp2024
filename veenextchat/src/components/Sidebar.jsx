import React, { useEffect, useRef , useContext} from 'react'
import { VeeContext } from "@/components/context/Chatcontext";
import UserStories from './UserStories';


const Sidebar = () => {
  const storiesData = [
    {
      image: 'https://unsplash.com/photos/v0rV35-V-_Y/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzE5MTY3NDk1fA&force=true&w=640',
      title: 'User 1',
      stories: [
        { url: 'https://unsplash.com/photos/v0rV35-V-_Y/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzE5MTY3NDk1fA&force=true&w=640', type: 'image' },
        { url: 'https://unsplash.com/photos/yvG81vSKQp0/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzE5MTY5NDEyfA&force=true&w=640', type: 'image' },
      ],
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'User 2',
      stories: [
        { url: 'https://unsplash.com/photos/hx_nol2JvK8/download?force=true&w=640', type: 'image' },
        { url: 'https://unsplash.com/photos/uKTAhW299jY/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzE5MTcxMzgxfA&force=true&w=640', type: 'image' },
      ],
    },
    // Add more user stories here...
  ];
  const { chatdata, newupdateactiveuser, activeuserid, activechat } = useContext(VeeContext);
  return (
<div className="sidebar" id="sidebar">
  <div className="sidebarheader">
    <div className="chatscreenheader">
      <div className="userdata">
        <div className="profilephoto">
      
        </div>
        <div className="usersname">
          <div>
            {" "}
            <small className="small uname">
              {" "}
              <span id="correctusername"> </span>
           
            </small>
          </div>
          <small className="small" id="correctemail" />
        </div>
      </div>
      <div className="usersettings">
        <div className="search">
          {" "}
          <span className="material-symbols-outlined">add_comment</span>
        </div>
        <div className="toggle">
          <span className="material-symbols-outlined">more_vert</span>
        </div>
        <div className="toggle srch" id="srch" >
          <span className="material-symbols-outlined">search</span>
        </div>
      </div>
    </div>
  </div>
  
  <div className="sidebardatas" id="search">
    <div className="closed" >
      x
    </div>
    <div className="searchinput">
      <input type="text" placeholder="Search" />{" "}
      <span className="material-symbols-outlined">search</span>
    </div>
  </div>
  <div className="sidebardatas">
    <div className="infotitle">
      Stories
    </div>
    <UserStories storiesData={storiesData} />
  </div>
  <div className="sidebarextradata" id="msgdta">
    <div className="sidebardatas">
      <div className="infotitle" id="switch">
        Messages{" "}
        <a href="#" >
          back
        </a>
      </div>
      <div className="newchats chatbubbles" id="newchats"></div>
      <div className="chatbubbles h" id="allchat">


      {chatdata?.length > 0 ? (
        <>
    {chatdata?.map((info, index) => (

<div
className={`chatbubbled chatnum ${info.userid === activechat ? 'activebubble' : ''}`}
key={index}
onClick={() => newupdateactiveuser(info?.userid)}
>
  <div className="userdata">
    <div className="profilephoto">
      <img src="image 116.png" alt="" />
    </div>
    <div className="usersname">
      <div>
        <small className="small mg">
          <div className="uname">
           
            {info.name}
          </div>
          <div className="time">
            <i className="fa fa-spinner fa-spin spinning" />
            <span>
              {" "}
            {info?.time}
            </span>
          </div>
        </small>
      </div>
      <small className="small twolines">
        {info?.message || 'Click Here To Start A Conversation'}
      </small>
    </div>
  </div>
</div>

    ))}
    </>
      ) : ('Loadinggggggggggggg')

}

      <div className="chatbubbled chatnum21" >
                                <div className="userdata">
                                  <div className="profilephoto">
                                    <img src="/image 116.png" alt="" />
                                  </div>
                                  <div className="usersname">
                                    <div>
                                      <small className="small mg">
                                        <div className="uname">Odah Victor</div>
                                        <div className="time">
                                
                                          <span> 10:26 PM </span>
                                        </div>
                                      </small>
                                    </div>
                                    <small className="small twolines">start chatting</small>
                                  </div>
                                </div>
                              </div>

      </div>
    </div>
  </div>
  <div className="messagesettings">
    <div className="logoutbtn" style={{ cursor: "pointer" }}>
      <div className="logout">
        <div className="icon">
          <span className="material-symbols-outlined">logout</span>
        </div>
        <div className="messagetext">Logout</div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Sidebar