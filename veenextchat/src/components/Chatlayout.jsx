
'use client';
import React from 'react'
import Sidebar from './Sidebar'
import Userdata from './Userdata'
import Chatarea from './Chatarea'

const Chatlayout = () => {
  return (
    <main>

        <div className="container" >

<Sidebar/>

<div className="chatscreen" id="chatscreen">

<div className="chatbody" id="cdata">

<Chatarea/>
<Userdata/>
</div>
</div>
            </div>
            </main>
  )
}

export default Chatlayout