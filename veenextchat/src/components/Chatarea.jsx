import React, { useEffect, useRef , useContext} from 'react'
import { VeeContext } from "@/components/context/Chatcontext";
import Messagegenerator from './chattypes/Messagegenerator';
const Chatarea = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const chatDataRef = useRef(null);
  const { test,activechatdata, conversationdata } = useContext(VeeContext);
  const adjustChatDataHeight = () => {
    const container = containerRef.current;
    const header = headerRef.current;
    const footer = footerRef.current;
    const chatData = chatDataRef.current;

    if (container && header && footer && chatData) {
        const availableHeight = container.clientHeight - header.clientHeight - footer.clientHeight;
        chatData.style.height = `${availableHeight}px`;
    }
};

useEffect(() => {
  adjustChatDataHeight();
  window.addEventListener('resize', adjustChatDataHeight);

  return () => {
      window.removeEventListener('resize', adjustChatDataHeight);
  };
}, []);

  return (

        <div className="chatcontainer" ref={containerRef}>
  <div className="charheader" ref={headerRef}>
    <div className="chatscreenheader">
      <div className="userdata">

        <div className="profilephoto">
          <img src={activechatdata?.avatar} alt="" id="profilephoto" />
      

        </div>
        <div className="usersname">
          <div>
      

            <small className="small uname">
      
              <span id="usersname">
           {activechatdata?.name}
              </span>
            </small>
          </div>
          <small className="small" id="lastseen" />
        </div>
      </div>
      <div className="usersettings">
        <div className="search" >
          <span className="material-symbols-outlined">search</span>
        </div>
        <div className="toggle">
          <span className="material-symbols-outlined">more_vert</span>
        </div>
      </div>
    </div>
  </div>
  <div className="blurpreview" id="blurredpreview"  />
  <div className="chatdata" id="chatData" ref={chatDataRef}>
    <div id="chatContainer">

{activechatdata && conversationdata && (<Messagegenerator messagedata={conversationdata} />)}



    </div>
  </div>
  <div className="chatfooter" ref={footerRef} >
    <div className="chatinputbox activebox" id="normalmessage">
      <div className="emoji" >
        <span className="material-symbols-outlined">mood</span>
      </div>
      <div className="attachment">
        <div className="attachmentdata" id="attachmentdata">
          <div className="attachcontent">
            <div className="attachiconthree">
              <span className="material-symbols-outlined">description</span>
            </div>
            <div className="attachtext">Document</div>
          </div>
          <div className="attachcontent">
            <div className="attachicon">
              {/* <input
                type="file"
                name=""
                className="file-upload-input"
                id="myimg"
                accept=".jpg, .jpeg, .png, .gif"
              /> */}
              <span className="material-symbols-outlined">photo_library</span>
            </div>
            <div className="attachtext">Photo</div>
          </div>
          <div className="attachcontent">
            <div className="attachicontwo">
              <span className="material-symbols-outlined">ballot</span>
            </div>
            <div className="attachtext">Poll</div>
          </div>
        </div>
        <span
          className="material-symbols-outlined"
       
        >
          attach_file_add
        </span>
      </div>
      <div className="textareasection">
        <div id="qtd" />
        <div className="input">
          <input type="hidden" name="" id="quotedid" />
          <textarea
            name=""
      
            id="mymessage"
            rows={1}
            placeholder="Write a message"
            defaultValue={""}
          />
        </div>
      </div>
      <div
        className="attachment snd"
        id="attachmentbtn"
     
      >
        <span className="material-symbols-outlined">send</span>
      </div>
    </div>
    <div className="chatinputbox" id="audiomessage">
      <button id="recordButton">Record</button>
      <button id="stopButton" disabled="">
        Stop
      </button>
      <button style={{ display: "none" }} id="playButton" disabled="">
        Play
      </button>
      <div className="emoji">
        <span className="material-symbols-outlined">mood</span>
      </div>
      <div className="textareasection">
        <div className="input">
          <div style={{ display: "none" }}>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <div id="recordingText" style={{ display: "none" }}>
            <img src="Audio Frame.png" alt="" />
            <img src="Audio Frame.png" alt="" />
            <img src="Audio Frame.png" alt="" />
            <img src="Audio Frame.png" alt="" />
          </div>
          <div id="attachmentContainer" />
          <audio id="audioPlayback" controls="" style={{ display: "none" }} />
        </div>
      </div>
      <button id="sendButton" style={{ display: "none" }}>
        <div className="attachment snd" id="attachmentbtn">
          <span className="material-symbols-outlined">send</span>
        </div>
      </button>
    </div>
    <small className="copyright">COPYRIGHT MANLIKE VEEE</small>
  </div>
</div>


  )
}

export default Chatarea