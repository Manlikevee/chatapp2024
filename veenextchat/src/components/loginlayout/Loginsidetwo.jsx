import React from 'react'

const Loginsidetwo = ({children}) => {
  return (
    <div className="loginlogin">
      <div className="loginforms">
        <div className="ltitle">Login</div>
        <div className="sso">
          You can login with your registered account or quick login with Our
          Mobile App .
        </div>
        <div className="applogin" onclick="qrpopup()">
          {/* <ion-icon name="logo-vimeo" />  */}
          Login with Mobile App
        </div>


{children}
        <div className="create">
          Don’t have an account? <a href="register.html">Create one!</a>
        </div>
      </div>
    </div>
  )
}

export default Loginsidetwo