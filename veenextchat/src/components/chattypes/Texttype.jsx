import React, { useEffect, useRef , useContext} from 'react'
import { VeeContext } from "@/components/context/Chatcontext";

const Texttype = ({messagedata}) => {
    const { activeuserid,  } = useContext(VeeContext);
    const isActiveUser = messagedata?.senderid === activeuserid;
    // console.log(messagedata);
  return (
    <div
    className={isActiveUser ? 'completemessagesent' : 'completemessagerec'}
  >
    <div
      className={isActiveUser ? 'messagesent' : 'messagerec'}
      id={messagedata?.id ? messagedata.id : ''}
    >
      <div className="edgecontrol">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={16}
          viewBox="0 0 20 16"
          fill="none"
        >
          <path
            d={isActiveUser
              ? 'M18.5039 3.6641C20.1503 2.56645 19.3733 3.61246e-06 17.3944 3.52596e-06L2.60673e-06 -9.53989e-08L1.90735e-06 16L18.5039 3.6641Z'
              : 'M1.49615 3.6641C-0.150327 2.56645 0.626734 3.61246e-06 2.60555 3.52596e-06L20 -9.53989e-08L20 16L1.49615 3.6641Z'}
            fill={isActiveUser ? 'var(--greenbar)' : 'var(--greybar)'}
          />
        </svg>
      </div>
      <div className="chatbubble">
        <div className="www">
          {messagedata?.message} 
          <span className="smallspan">
            {/* <ion-icon name="checkmark-done-outline" /> */}
          </span>
        </div>
        <div
          className="qts"
          style={{ display: 'flex', gap: 14, fontSize: 19, fontWeight: 900 }}
        >
          <div className="quot" >
            {/* <ion-icon name="arrow-undo-outline" /> */}
          </div>
          <div className="edit">
            {/* <ion-icon name="create-outline" /> */}
          </div>
          <div className="delete" >
            {/* <ion-icon name="trash-outline" /> */}
          </div>
        </div>
      </div>
    </div>
    <div className="messageopt" >
      <span className="material-symbols-outlined">reply</span>
    </div>
  </div>
  )
}

export default Texttype