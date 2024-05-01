  const correctusername = document.getElementById('correctusername')
  const correctemail = document.getElementById('correctemail')
  function checkstatus() {
 const access = localStorage.getItem('refresh_token')
 
 if (document.readyState === 'complete' ) {
console.log('readyyyyyyyyy')
  if(!access){
    VanillaToasts.create({
      title: 'Error!',
      text:  'Please Login' ,
      type: 'error',
      timeout:  5000
  });
  
  window.location.href = `loginpage.html`;
   }
  
   if(access){
    const arrayToken = access.split('.');
    const tokenPayload = JSON.parse(atob(arrayToken[1]));
  
    if(tokenPayload?.token_type !== 'refresh'){
      VanillaToasts.create({
        title: 'Error!',
        text:  'Please Login' ,
        type: 'error',
        timeout: 5000
    });
    
    window.location.href = `loginpage.html`;
    }
    else{
      const value = Math.floor(new Date().getTime() / 1000) >= tokenPayload?.exp;

      console.log(tokenPayload?.exp)
      if(correctusername){
        correctusername.innerHTML = tokenPayload?.username
        correctemail.innerHTML = tokenPayload?.email
       
      }
      if(value){
        console.log(value)
        VanillaToasts.create({
          title: 'Error!',
          text:  'Session Expired' ,
          type: 'error',
          timeout: 5000
      });
      
      setTimeout(function() {
        // Redirect to success.html with the random ID as a parameter
        window.location.href = `loginpage.html`;
      }, 2000); // 2000 milliseconds = 2 seconds
      } else{
   

     
      }
      
    }
  
  
   }
  
 }
 else {
  setTimeout(checkstatus, 100); // Check again after 100 milliseconds
}


  
}

if (document.readyState !== 'complete') {
  checkstatus() 
}

function fdata() {
  axiosInstance.get('/chatdashboard') // Update endpoint for protected route
    .then(response => {
      console.log(response.data);

      // Assuming `allfetchmessage`, `genbubble`, and `alluserslist` are defined elsewhere
      // AllChats = allfetchmessage;
      // genbubble();
      // alluserslist();

      // Wrap the continuation call inside a Promise
      return new Promise((resolve, reject) => {
        resolve(response);
      });
    })
    .then(response => {
      // Call the continuation function after all operations are done
      bumblebee(response);
    })
    .catch(error => {
      console.error(error.message);
      VanillaToasts.create({
        title: 'Error!',
        text: error.message || 'An Error Occurred',
        type: 'error',
        timeout: 5000
      });
    });
}



function logout (){
  localStorage.clear()
  checkstatus() 
}

let activeuserid = 365251712

      
          let active = '';

          let ChatDatas = [
            // {
            //     "id": 1,
            //     "userid": 365251712,
            //     "name": "Victor Odah",
            //     "time": "Wednesday",
            //     "message": "Hey, I heard that you wanted...Hey, I heard that you wanted...",
            //     "lastSeen": "Today at 10:30 AM",
            //     "status": "Spring's arrival brings blossoms, and nature's gentle renewal.",
            //     "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
            //     "phoneNumber": "+1234567890",
            //     "email": "lara.mueller@example.com"
            // },
            // {
            //     "id": 2,
            //     "userid": 365252321712,
            //     "name": "John Smith",
            //     "time": "Thursday",
            //     "message": "Hi there! What's up? Hi there! What's up? Hi there! What's up?",
            //     "lastSeen": "Today at 9:00 AM",
            //     "status": "Enjoying the simple pleasures of life.",
            //     "quote": "The only way to do great work is to love what you do.",
            //     "phoneNumber": "+1987654321",
            //     "email": "john.smith@example.com"
            // },
            // {
            //     "id": 3,
            //     "userid": 36525232171257575,
            //     "name": "Emily Johnson",
            //     "time": "Friday",
            //     "message": "I saw the movie yesterday. It was amazing!",
            //     "lastSeen": "Today at 11:45 AM",
            //     "status": "Exploring the beauty of the world.",
            //     "quote": "In every walk with nature one receives far more than he seeks.",
            //     "phoneNumber": "+1122334455",
            //     "email": "emily.johnson@example.com"
            // },
            // {
            //     "id": 4,
            //     "userid": 52523217124734774,
            //     "name": "Chris Brown",
            //     "time": "Saturday",
            //     "message": "Did you catch the game last night? It was intense!",
            //     "lastSeen": "Today at 1:20 PM",
            //     "status": "Chasing dreams and goals.",
            //     "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            //     "phoneNumber": "+9988776655",
            //     "email": "chris.brown@example.com"
            // },
            // {
            //     "id": 5,
            //     "userid": 3652523217132732,
            //     "name": "Sophie Davis",
            //     "time": "Sunday",
            //     "message": "Let's plan a picnic next weekend. What do you think?",
            //     "lastSeen": "Today at 2:10 PM",
            //     "status": "Embracing the joy of togetherness.",
            //     "quote": "Happiness is a journey, not a destination.",
            //     "phoneNumber": "+5544332211",
            //     "email": "sophie.davis@example.com"
            // },
            // {
            //     "id": 6,
            //     "userid": 36525232171575752,
            //     "name": "Alex Turner",
            //     "time": "Monday",
            //     "message": "Hey, long time no see! How have you been?",
            //     "lastSeen": "Today at 3:30 PM",
            //     "status": "Dreaming big and making it happen.",
            //     "quote": "The future belongs to those who believe in the beauty of their dreams.",
            //     "phoneNumber": "+7788990011",
            //     "email": "alex.turner@example.com"
            // },
            // {
            //     "id": 7,
            //     "userid": 3652523217121111,
            //     "name": "Ethan Harris",
            //     "time": "Friday",
            //     "message": "Have you tried the new restaurant downtown? It's fantastic!",
            //     "lastSeen": "Today at 12:15 PM",
            //     "status": "Exploring new culinary adventures.",
            //     "quote": "One cannot think well, love well, sleep well, if one has not dined well.",
            //     "phoneNumber": "+1122334455",
            //     "email": "ethan.harris@example.com"
            // },
            // Add more objects for additional chat bubbles
        ];
        

        let chatData  = [

        ];

        function startchat() {

        }
          

let AllChats = []
          function aud (id) {
            console.log('hhh')
            return  ChatDatas.find(au => au.userid == id || au.id == id)
            }
            console.log(aud(activeuserid)?.name)
          

          
          // Calculate and set the height of the chat data section
            function adjustChatDataHeight() {
                var container = document.querySelector('.chatcontainer');
                var header = document.querySelector('.charheader');
                var footer = document.querySelector('.chatfooter');
                var chatData = document.getElementById('chatData');

                var availableHeight = container.clientHeight - header.clientHeight - footer.clientHeight;
                chatData.style.height = availableHeight + 'px';
            }

            // Call the function initially and whenever the window is resized
            adjustChatDataHeight();
            window.addEventListener('resize', adjustChatDataHeight);

            function adjustTextareaHeight() {
              // Get the textarea element
              var text = document.getElementById('mymessage');
          
              // Set initial rows attribute to 1 and resize
              text.setAttribute('rows', 1);
              resize(text);
          
              // Add input event listener to adjust height dynamically
              text.addEventListener('input', function() {
                  resize(text);
              });
          
              // Define the resize function
              function resize(textElement) {
                  textElement.style.height = 'auto';
                  // Calculate the maximum height for 3 rows
                  var maxHeight = textElement.scrollHeight > (textElement.clientHeight * 3) ? textElement.clientHeight * 2 : textElement.scrollHeight;
                  textElement.style.height = maxHeight + 'px';
              }
          }

          adjustTextareaHeight();
            

            function attachmenttoggle() {
                console.log('kekekek')
                const togglebtn = document.getElementById('attachmentbtn');
                const overlay = document.getElementById('overlay');
                const overlaydata = document.getElementById('attachmentdata');
            
                // Toggle the 'show' class on overlay and overlaydata
                overlay.classList.toggle('show');
                overlaydata.classList.toggle('show');
            }
            



let userconversation = ''
let userconversationdata = ''
if(userconversationdata){
   const pdd = JSON.parse(userconversationdata) 
  const parseddata = pdd.filter(fpd => fpd.from_id === activeuserid || fpd.to_id === activeuserid);
console.log('mpdara', pdd)
   if (parseddata){
    parseddata.forEach(item => {
      // Find the corresponding entry in ChatDatas array based on chat_id
      const chat = ChatDatas.find(chat => chat.id === item.chat_id);
      // If a matching entry is found, push it into chatData
      if (chat) {
          chatData.push(chat);
      }
  });
  AllChats = parseddata
   }
  // console.log('filtered parsed data',filteredparsedata)

  //  console.log(parseddata)

console.log(userconversation)

// userconversation = parseddata?.filter(pd => pd.chat_id == chat_id)
// console.log('parsebody is ',userconversation.conversationDatas) 

} else{
  console.log('hmmmmmmmmmmm')
}
    
            let activeconvo = 0




            let conversationData = [
    
            ];

            // let arrayOfMessages = localStorage.getItem('conversationdata');
            let arrayOfMessages
            if (arrayOfMessages){
              arrayOfMessages = JSON.parse(arrayOfMessages)
              let filteredMessages = arrayOfMessages.filter(message =>
                message.senderid === activeuserid || message.recieverid === activeuserid
              );
              conversationData = filteredMessages
              console.log('conversation data is', conversationData)
            }

         
            

            function createProfileIfNotExists(chat_id) {
              console.log('gottten id ', chat_id);
              console.log('ALL CHATS IS ', AllChats);
          
              // Return a promise from createProfileIfNotExists
              return new Promise((resolve, reject) => {
                  if (!AllChats.some(profile => profile.to_id == chat_id || profile.from_id == chat_id)) {
                      axiosInstance.get(`/usermessagecreate/${chat_id}`)
                          .then(response => {
                              const { id, message } = response.data;
          
                              VanillaToasts.create({
                                  title: 'Success!',
                                  text: message,
                                  type: 'success',
                                  timeout: 3000
                              });
          
                              console.log('ID:', id);
                              console.log('Message:', message);
                              AllChats.push({ 'chat_id': id, from_id: activeuserid, to_id: aud(chat_id).userid, conversationDatas: [] });
          
                              // Resolve the promise to indicate success
                              resolve();
                          })
                          .catch(error => {
                              console.error('Error fetching data:', error);
                              // Reject the promise to indicate failure
                              reject(error);
                          });
                  } else {
                      // If profile already exists, resolve immediately
                      resolve();
                  }
              });
          }


         let activeuser
        let activeprofiledata 

         function updateActiveUser(id) {
          active = id;
          console.log('active is ', active);
          
          // Call createProfileIfNotExists and wait for it to finish
          createProfileIfNotExists(active)
              .then(() => {
                  // Once createProfileIfNotExists is finished, continue with the rest of the code
      
                  const activeProfile = AllChats.find(profile => profile.to_id == active || profile.from_id == active);
                  console.log('activeprofile is ', activeProfile);
      
                  activeuser = chatData.find(profile => String(profile.id) === String(active));
                 
                  activeprofiledata = activeuser
                  console.log('active user is', activeprofiledata);
                 
      
                  conversationData = activeProfile.conversationDatas;
                  console.log('convo data is', conversationData);
      
                  document.getElementById('usersname').innerHTML = activeuser?.name;
                  document.getElementById('lastseen').innerHTML = `${activeuser?.lastSeen}`;
                  document.getElementById('pname').innerHTML = `${activeuser?.name}`;
                  document.getElementById('pphone').innerHTML = `${activeuser?.phoneNumber}`;
                  document.getElementById('ptext').innerHTML = `${activeuser?.quote}`;
                  renderConversation();
      
                  const filteredArray = conversationData?.filter(obj => obj?.imageUrl && obj.type !== "deleted");
      
                  showme();
                  adjustTextareaHeight();
                  if (filteredArray) {
                      const imagecontainer = document.getElementById('mediablob');
                      imagecontainer.innerHTML = '';
                      filteredArray.forEach(date => {
                          const messageHTML = createimages(date);
                          imagecontainer.innerHTML += messageHTML;
                      });
                  }
      
                  myswitchmobile()
                  console.log(active);
              })
              .catch(error => {
                  console.error('Error creating profile:', error);
              });
      }
      


        function mediashow(){
          const med = document.getElementById('mymedia')
          med.classList.toggle('mediashow')
        }
    // Sample conversation data in JSON format


    function createimages(data) {
      let imageHTML = '';
      imageHTML+= `
      <div class="media">
      <img src="${data?.imageUrl}" loading="lazy"
          alt="">
  </div>
      `
      return imageHTML;
    }


    function formatDateTime(dateString) {
      const date = new Date(dateString);
      const options = { 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
      };
      return new Intl.DateTimeFormat('en-US', options).format(date);
  }

    // Function to create HTML for each message
    function createMessageHTML(message) {
        let messageHTML = '';
        // senderid: activeuserid,
        // recieverid: activeuser?.userid,
        if (message.type === 'invite') {
            messageHTML += `
            <div ondblclick="blurpreview(${message.id})" class="${message.senderid === activeuserid ? 'completemessagesent' : 'completemessagerec'}">
            <div class="${message.senderid === activeuserid ? 'messagesent' : 'messagerec'} invite">
                                <div class="edgecontrol">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                        <path d="M18.5039 3.6641C20.1503 2.56645 19.3733 3.61246e-06 17.3944 3.52596e-06L2.60673e-06 -9.53989e-08L1.90735e-06 16L18.5039 3.6641Z" fill="var(--greenbar)"/>
                                    </svg>
                                </div>
                                <div class="chatbubble">
                                    <div class="invitetitle">You Have Been Invited To Join a Room</div>
                                    <div class="roomdetails">
                                        <div class="roomlogo">
                                            <div class="profilephoto">
                                                <img src="${message.imageSrc}" alt="">
                                            </div>
                                        </div>
                                        <div class="roomname">
                                            <div class="col">
                                                <div class="rname">${message.roomName}</div>
                                                <div>
                                                    <small class="smalls">${message.message}</small>
                                                </div>
                                            </div>
                                            <div class="joinbtn sendbtn"><button>Join</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="messageopt">
                            <span class="material-symbols-outlined">
                                reply
                                </span>
                        </div>
                            </div>
                            `;
        } 

        else if(message.type === 'voicenote'){
          messageHTML += `
          <div ondblclick="blurpreview(${message.id})" class="${message.senderid === activeuserid ? 'completemessagesent' : 'completemessagerec'}">
          <div class="${message.senderid === activeuserid ? 'messagesent' : 'messagerec'}" id="${message?.id  ? message?.id : ''}">
                              <div class="edgecontrol">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                              <path d="${message.senderid === activeuserid ? 'M18.5039 3.6641C20.1503 2.56645 19.3733 3.61246e-06 17.3944 3.52596e-06L2.60673e-06 -9.53989e-08L1.90735e-06 16L18.5039 3.6641Z' : 'M1.49615 3.6641C-0.150327 2.56645 0.626734 3.61246e-06 2.60555 3.52596e-06L20 -9.53989e-08L20 16L1.49615 3.6641Z'}" fill="${message.senderid === activeuserid ? 'var(--greenbar)' : 'var(--greybar)'}"/>
                          </svg>
                              </div>
                              <div class="chatbubble">
                              <div class='www'> 
                           
                              <div class="audio-player" data-url="https://res.cloudinary.com/viktortech/${message?.audio_url}">
                              <div class="player">
                                <button type="button" class="btn-play">
                                  <span class="material-icons icon-play">play_arrow</span>
                                  <span class="material-icons icon-pause">pause</span>
                                  <span class="material-icons icon-loop">loop</span>
                                </button>
                                <div class="timeline">
                                  <div class="line">
                                    <input dir="ltr" type="range" min="0" max="100" value="0">
                                  </div>
                                  <div class="data">
                                    <div class="current-time"></div>
                                    <div class="time">
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="user">
                                <img src="https://avatars.githubusercontent.com/u/3522573?&v=4" />
                                <span class="material-icons">mic</span>
                              </div>
                            </div>



                              <span class="smallspan"> ${formatDateTime(message.datetime)} 
                              <ion-icon name="checkmark-done-outline"></ion-icon>  </span> </div>
                              <div class="qts"  style="display: flex; gap: 14px; font-size: 19px;  font-weight: 900; ">
                                                     
                              <div class="quot"   onclick="replyto(${message.id})">
                                  <ion-icon name="arrow-undo-outline"></ion-icon>
                                </div>

                          
                              <div class="edit">
                              <ion-icon name="create-outline"></ion-icon>
                            </div>
                            <div class="delete"   onclick="deletemessage(${message.id})">
                            <ion-icon name="trash-outline"></ion-icon>
                            </div>
                            
                  
                          </div>
                              </div>
                          </div>
                          <div class="messageopt" onclick="replyto(${message.id})" >
                          <span class="material-symbols-outlined">
                              reply
                              </span>
                      </div>
                          </div>
                          `;
        }
        
        else if (message.type === 'image') {
          
            messageHTML += `
            <div  ondblclick="blurpreview(${message.id})" class="${message.senderid === activeuserid ? 'completemessagesent' : 'completemessagerec'}">
            <div class="${message.senderid === activeuserid ? 'messagesent' : 'messagerec'} imgmsg"  id="${message?.id  ? message?.id : ''}">
                                <div class="edgecontrol">
                                 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="${message.senderid === activeuserid ? 'M18.5039 3.6641C20.1503 2.56645 19.3733 3.61246e-06 17.3944 3.52596e-06L2.60673e-06 -9.53989e-08L1.90735e-06 16L18.5039 3.6641Z' : 'M1.49615 3.6641C-0.150327 2.56645 0.626734 3.61246e-06 2.60555 3.52596e-06L20 -9.53989e-08L20 16L1.49615 3.6641Z'}" fill="${message.senderid === activeuserid ? 'var(--greenbar)' : 'var(--greybar)'}"/>
                            </svg>


                                    
                                </div>
                                <div class="chatbubble" >
                                    <div class="chatimg">
                                        <img src="${message.imageUrl}" alt="" loading="lazy">
                                    </div>

                                    <div class='www' > 
                                    ${message?.message  ? message?.message : ''} 
                                    <span class="smallspan"> ${formatDateTime(message.datetime)} 
                                    <ion-icon name="checkmark-done-outline"></ion-icon>  </span> </div>

                                    <div class="qts"  style=" padding-bottom: 10px; display: flex; gap: 14px; font-size: 19px;  font-weight: 900; ">
                                                       
                                    <div class="quot"   onclick="replyto(${message.id})">
                                        <ion-icon name="arrow-undo-outline"></ion-icon>
                                      </div>

                                
                                    <div class="edit">
                                    <ion-icon name="create-outline"></ion-icon>
                                  </div>
                                  <div class="delete"   onclick="deletemessage(${message.id})">
                                  <ion-icon name="trash-outline"></ion-icon>
                                  </div>
                                  
                        
                                </div>
                         
                                </div>
                            </div>
                            <div class="messageopt"  onclick="replyto(${message.id})">
                            <span class="material-symbols-outlined">
                                reply
                                </span>
                        </div>
                            </div>
                            `; 
        } else if (message.type === 'text') {
            messageHTML += `
            <div ondblclick="blurpreview(${message.id})" class="${message.senderid === activeuserid ? 'completemessagesent' : 'completemessagerec'}">
            <div class="${message.senderid === activeuserid ? 'messagesent' : 'messagerec'}" id="${message?.id  ? message?.id : ''}">
                                <div class="edgecontrol">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="${message.senderid === activeuserid ? 'M18.5039 3.6641C20.1503 2.56645 19.3733 3.61246e-06 17.3944 3.52596e-06L2.60673e-06 -9.53989e-08L1.90735e-06 16L18.5039 3.6641Z' : 'M1.49615 3.6641C-0.150327 2.56645 0.626734 3.61246e-06 2.60555 3.52596e-06L20 -9.53989e-08L20 16L1.49615 3.6641Z'}" fill="${message.senderid === activeuserid ? 'var(--greenbar)' : 'var(--greybar)'}"/>
                            </svg>
                                </div>
                                <div class="chatbubble">
                                <div class='www'> 
                                ${message.message}
                                <span class="smallspan"> ${formatDateTime(message.datetime)} 
                                <ion-icon name="checkmark-done-outline"></ion-icon>  </span> </div>
                                <div class="qts"  style="display: flex; gap: 14px; font-size: 19px;  font-weight: 900; ">
                                                       
                                <div class="quot"   onclick="replyto(${message.id})">
                                    <ion-icon name="arrow-undo-outline"></ion-icon>
                                  </div>

                            
                                <div class="edit">
                                <ion-icon name="create-outline"></ion-icon>
                              </div>
                              <div class="delete"   onclick="deletemessage(${message.id})">
                              <ion-icon name="trash-outline"></ion-icon>
                              </div>
                              
                    
                            </div>
                                </div>
                            </div>
                            <div class="messageopt" onclick="replyto(${message.id})" >
                            <span class="material-symbols-outlined">
                                reply
                                </span>
                        </div>
                            </div>
                            `;
        }
        else if (message.type === 'replytext') {
          console.log(conversationData)
          console.log(message.quotedid)
          const messquote = conversationData.find(obj => String(obj.id) === String(message.quotedid));
          console.log('the message is ', messquote)
            messageHTML += `
            <div  class="${message.senderid === activeuserid ? 'completemessagesent' : 'completemessagerec'}">
            
            <div class="${message.senderid === activeuserid ? 'messagesent' : 'messagerec'}" id=${message.id ?  message.id : '#'}>
                                <div class="edgecontrol">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="${message.senderid === activeuserid ? 'M18.5039 3.6641C20.1503 2.56645 19.3733 3.61246e-06 17.3944 3.52596e-06L2.60673e-06 -9.53989e-08L1.90735e-06 16L18.5039 3.6641Z' : 'M1.49615 3.6641C-0.150327 2.56645 0.626734 3.61246e-06 2.60555 3.52596e-06L20 -9.53989e-08L20 16L1.49615 3.6641Z'}" fill="${message.senderid === activeuserid ? 'var(--greenbar)' : 'var(--greybar)'}"/>
                            </svg>
                                </div>
                                <div class="chatbubble quotedpost">
                                <a class="quoted" href="${message.quotedid ? '#' + message.quotedid : '#'}">
                                <div class="quotetext">
                                <div class="quotetitle uname">${messquote?.from} </div>
                                <small class="small twolines">
                                ${messquote?.message}  
                             
                                </div>    
                                </small>
                               </a>
                               <div class='www' ondblclick="blurpreview(${message.id})"> 
                               ${message.message}
                               <span class="smallspan"> ${formatDateTime(message.datetime)} 
                               <ion-icon name="checkmark-done-outline"></ion-icon>  </span> </div>
                               <div class="qts"  style="display: flex; gap: 14px; font-size: 19px;  font-weight: 900; ">
                                                       
                               <div class="quot"   onclick="replyto(${message.id})">
                                   <ion-icon name="arrow-undo-outline"></ion-icon>
                                 </div>

                           
                               <div class="edit">
                               <ion-icon name="create-outline"></ion-icon>
                             </div>
                             <div class="delete"   onclick="deletemessage(${message.id})">
                             <ion-icon name="trash-outline"></ion-icon>
                             </div>
                             
                   
                           </div>
                                </div>
                            </div>
                            <div class="messageopt"  onclick="replyto(${message.id})" >
                            <span class="material-symbols-outlined">
                                reply
                                </span>
                        </div>
                            </div>`;
        } else if (message.type === 'replyimg') {
          console.log(conversationData)
          const messquote = conversationData.find(obj => String(obj.id) === String(message.quotedid));
          console.log('the message is ', messquote)
            messageHTML += `
            <div class="${message.senderid === activeuserid ? 'completemessagesent' : 'completemessagerec'}">
            
            <div class="${message.senderid === activeuserid ? 'messagesent' : 'messagerec'}" id=${message.id ?  message.id : '#'}>
                                <div class="edgecontrol">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="${message.senderid === activeuserid ? 'M18.5039 3.6641C20.1503 2.56645 19.3733 3.61246e-06 17.3944 3.52596e-06L2.60673e-06 -9.53989e-08L1.90735e-06 16L18.5039 3.6641Z' : 'M1.49615 3.6641C-0.150327 2.56645 0.626734 3.61246e-06 2.60555 3.52596e-06L20 -9.53989e-08L20 16L1.49615 3.6641Z'}" fill="${message.senderid === activeuserid ? 'var(--greenbar)' : 'var(--greybar)'}"/>
                            </svg>
                                </div>
                                <div class="chatbubble quotedpost">



                                <a class="quoted" href="${message.quotedid ? '#' + message.quotedid : '#'}">
                                <div class="quotetext">
                                <div class="quotetitle uname">${messquote?.from} </div>
                                <small class="small twolines">
                                ${messquote?.message}  
                             
                                </div>    
                                </small>
                               </a>
                                      <div class="chatimg">
                                        <img src="${message.imageUrl}" alt="" loading="lazy">
                                    </div>
<div class='www' ondblclick="blurpreview(${message.id})"> 
${message.message}
<span class="smallspan"> ${formatDateTime(message.datetime)} 
<ion-icon name="checkmark-done-outline"></ion-icon>  </span> </div>

<div class="qts"  style="display: flex; gap: 14px; font-size: 19px;  font-weight: 900; ">
                                                       
<div class="quot"   onclick="replyto(${message.id})">
    <ion-icon name="arrow-undo-outline"></ion-icon>
  </div>


<div class="edit">
<ion-icon name="create-outline"></ion-icon>
</div>
<div class="delete"   onclick="deletemessage(${message.id})">
<ion-icon name="trash-outline"></ion-icon>
</div>

</div>
                                </div>
                            </div>
                            <div class="messageopt"  onclick="replyto(${message.id})" >
                            <span class="material-symbols-outlined">
                                reply
                                </span>
                        </div>
                            </div>`;
        } else if(message.type ==='deleted'){
          messageHTML += `
          <div ondblclick="blurpreview(${message.id})" class="${message.senderid === activeuserid ? 'completemessagesent' : 'completemessagerec'} del">
          <div class="${message.senderid === activeuserid ? 'messagesent' : 'messagerec'}" id="${message?.id  ? message?.id : ''}">
                              <div class="edgecontrol">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                              <path d="${message.senderid === activeuserid ? 'M18.5039 3.6641C20.1503 2.56645 19.3733 3.61246e-06 17.3944 3.52596e-06L2.60673e-06 -9.53989e-08L1.90735e-06 16L18.5039 3.6641Z' : 'M1.49615 3.6641C-0.150327 2.56645 0.626734 3.61246e-06 2.60555 3.52596e-06L20 -9.53989e-08L20 16L1.49615 3.6641Z'}" fill="${message.senderid === activeuserid ? 'var(--greenbar)' : 'var(--greybar)'}"/>
                          </svg>
                              </div>
                              <div class="chatbubble">
                              <div class='www'> 
                              This Message Has Been Deleted For All !!!!
                              <span class="smallspan"> ${formatDateTime(message.datetime)} 
                              <ion-icon name="checkmark-done-outline"></ion-icon>  </span> </div>

                              </div>
                          </div>
                          <div class="messageopt"  >
                          <span class="material-symbols-outlined">
                              reply
                              </span>
                      </div>
                          </div>
                          `;
        }
        else {
          messageHTML += `
          <div ondblclick="blurpreview(${message?.id})" class="${message?.senderid === activeuserid ? 'completemessagesent' : 'completemessagerec'}">
          <div class="${message?.senderid === activeuserid ? 'messagesent' : 'messagerec'}" id="${message?.id  ? message?.id : ''}">
                              <div class="edgecontrol">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                              <path d="${message?.senderid === activeuserid ? 'M18.5039 3.6641C20.1503 2.56645 19.3733 3.61246e-06 17.3944 3.52596e-06L2.60673e-06 -9.53989e-08L1.90735e-06 16L18.5039 3.6641Z' : 'M1.49615 3.6641C-0.150327 2.56645 0.626734 3.61246e-06 2.60555 3.52596e-06L20 -9.53989e-08L20 16L1.49615 3.6641Z'}" fill="${message?.senderid === activeuserid ? 'var(--greenbar)' : 'var(--greybar)'}"/>
                          </svg>
                              </div>
                              <div class="chatbubble">
                              <div class='www'> 
                              ${message.message}
                              <span class="smallspan"> 
                              <ion-icon name="checkmark-done-outline"></ion-icon>  </span> </div>
                              <div class="qts"  style="display: flex; gap: 14px; font-size: 19px;  font-weight: 900; ">
                                                     
                              <div class="quot"   onclick="replyto(${message?.id})">
                                  <ion-icon name="arrow-undo-outline"></ion-icon>
                                </div>

                          
                              <div class="edit">
                              <ion-icon name="create-outline"></ion-icon>
                            </div>
                            <div class="delete"   onclick="deletemessage(${message?.id})">
                            <ion-icon name="trash-outline"></ion-icon>
                            </div>
                            
                  
                          </div>
                              </div>
                          </div>
                          <div class="messageopt" onclick="replyto(${message?.id})" >
                          <span class="material-symbols-outlined">
                              reply
                              </span>
                      </div>
                          </div>
                          `;
        }


        const filteredArray = conversationData?.filter(obj => obj?.imageUrl && obj.type !== "deleted");
        if(filteredArray){
          const imagecontainer = document.getElementById('mediablob')
          imagecontainer.innerHTML = ''
          filteredArray.forEach(date => {
            const messageHTML =   createimages(date)
        
            imagecontainer.innerHTML += messageHTML;
        });
    
        
         
        }

        return messageHTML;
    }
  
    function deletemessage(id){
      var elements = document.getElementsByClassName("blurred");
      Array.from(elements).forEach(function(element) {
        element.classList.remove("blurred");
      });
    
      var elementstwo = document.getElementsByClassName("blurpreviewshow");
      Array.from(elementstwo).forEach(function(elementss) {
        elementss.classList.remove("blurpreviewshow");
      });
      const convo = conversationData.find(cdata => cdata.id == id )
      let payloads = ''

      
      if (convo){
      
      const myprompt = confirm('are you sure you want to delete this message for everyone')

      if (myprompt){
        convo.type = 'deleted'
        payloads = {
          data_id:  id,
        };
        console.log(payloads)
        deletepayloadpost(payloads)
        renderConversation()
      }
    
      }
    }

    function deletepayloadpost (payloaddata){
      const access = localStorage.getItem('access_token')
      const arrayToken = access.split('.');
      const tokenPayload = JSON.parse(atob(arrayToken[1]));
      const uniqueid = activeprofiledata?.message_id
      if (payloaddata){

        axiosInstance.post(`/deletemessageportals/${uniqueid}`, payloaddata)
        .then(response => {
          console.log('Response from sent message:', response.data);
          let allfetchmessage = []
          response?.data?.allmessages.forEach(item => {  
      
            if (item?.messageid?.sender?.id === tokenPayload?.user_id) {
            allfetchmessage.push({
              'chat_id': item?.messageid?.messageid,
               from_id: activeuserid, 
               to_id: aud(item?.messageid?.reciever?.id)?.userid,
                conversationDatas: item.testj
            });
      
          }
          else if (item?.messageid?.reciever?.id === tokenPayload?.user_id) {
            allfetchmessage.push({
              'chat_id': item?.messageid?.messageid,
               from_id: activeuserid, 
               to_id: aud(item?.messageid?.sender?.id,)?.userid,
                conversationDatas: item.testj
            });
      
      
          }
      
        
          })
      
          AllChats = allfetchmessage
          updateActiveUser(active)

        })
        .catch(error => {
          console.error('Error:', error);
        });


      }
    }


    const cd = document.getElementById('chatData')
    // Function to render the entire conversation

function replyto(id){
  var elements = document.getElementsByClassName("blurred");
  Array.from(elements).forEach(function(element) {
    element.classList.remove("blurred");
  });

  var elementstwo = document.getElementsByClassName("blurpreviewshow");
  Array.from(elementstwo).forEach(function(elementss) {
    elementss.classList.remove("blurpreviewshow");
  });
  const qc = id
  console.log(id)
  const quotecontainer = document.getElementById('qtd')



  if(id=='closequote'){
    quotecontainer.innerHTML= ` `
  } else{
    document.getElementById('quotedid').value = id
    let replydata =  conversationData.find(obj => String(obj.id)   === String(id)  );
    quotecontainer.innerHTML= `
    <div class="quoted" id="${replydata?.id}" onclick="replyto('closequote')">
    <div class="quotetext" >
        <div class="quotetitle uname">${replydata?.sender} <div class="cancel" >x</div>
        </div>
        <small class="small twolines">
            ${replydata?.message}
    </div>
    </small>
    </div>
    `

  }


}

async function renderConversation() {
  localStorage.setItem('conversationdata', JSON.stringify(conversationData));
  localStorage.setItem('userconversationdata', JSON.stringify(AllChats));

  const chatContainer = document.getElementById('chatContainer');
  chatContainer.innerHTML = '';

  // Render conversation messages
  await Promise.all(conversationData.map(async message => {
    const messageHTML = createMessageHTML(message);
    chatContainer.innerHTML += messageHTML;
  }));

  // Scroll handling
  console.log('scrolltop plus client height', cd.scrollTop + cd.clientHeight);
  console.log('scroll height', cd.scrollHeight);

  if (cd.scrollHeight - (cd.scrollTop + cd.clientHeight) < 120) {
    // If close to the bottom, scroll to the bottom
    setTimeout(function() {
      cd.scrollTop = cd.scrollHeight;
    }, 2000); // 2000 milliseconds = 2 seconds
    cd.scrollTop = cd.scrollHeight;
  }

  adjustTextareaHeight();
}


// function renderConversation() {

//         localStorage.setItem('conversationdata', JSON.stringify(conversationData) )
//         localStorage.setItem('userconversationdata', JSON.stringify(AllChats))
        
//         const chatContainer = document.getElementById('chatContainer');
//         chatContainer.innerHTML = '';
//         conversationData.forEach(message => {
//             const messageHTML = createMessageHTML(message);
//             chatContainer.innerHTML += messageHTML;
//         });
//         console.log('scrolltop plus client height', cd.scrollTop + cd.clientHeight)
//         console.log('scroll height', cd.scrollHeight)

//         if (cd.scrollHeight - (cd.scrollTop + cd.clientHeight) < 200) {
//           // If close to the bottom, scroll to the bottom
//           setTimeout(function() {
//             // Redirect to success.html with the random ID as a parameter
//             cd.scrollTop = cd.scrollHeight;
    
//           }, 2000); // 2000 milliseconds = 2 seconds
//           cd.scrollTop = cd.scrollHeight;
//       }
//       adjustTextareaHeight()
 
//     }

  //   function calculateScrollDistance() {
  //     // Calculate the distance from the top of the container to the bottom
  //     let distanceFromTop = cd.scrollHeight - cd.scrollTop;
      
  //     // Log the distance from the top to the console
  //     // console.log("Distance from top:", distanceFromTop);
  //     console.log('scroll height', cd.scrollHeight)
  //     console.log('scroll top', cd.scrollTop)
  // }
  
  // // Event listener for scroll events on the container
  // cd.addEventListener('scroll', calculateScrollDistance);
   
    // Call the function to render the conversation
  

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }





function blurpreview(id){

  document.getElementById(id).classList.toggle('blurred')
  document.getElementById('blurredpreview').classList.toggle('blurpreviewshow')

  
}

function bluroverlay(){
  var elements = document.getElementsByClassName("blurred");
  Array.from(elements).forEach(function(element) {
    element.classList.remove("blurred");
  });
  document.getElementById('blurredpreview').classList.toggle('blurpreviewshow')
}


  function createconversation() {
      let message = document.getElementById('mymessage').value
      let quotedids = document.getElementById('quotedid').value
      var file = document.getElementById('myimg').files[0];
      const myimg = document.getElementById("myimg").files[0]
 
      let payloaddata 
      let payloaddataimg
      let payloaddataimgs
      const access = localStorage.getItem('access_token')
      const arrayToken = access.split('.');
      const tokenPayload = JSON.parse(atob(arrayToken[1]));
      const uniqueid = activeprofiledata?.message_id
      console.log('unique', uniqueid)


      if (message){
        if(message && file && !quotedids){

          payloaddataimgs = {
            myimg:   myimg,
            data: {
              id: getRandomNumber(1, 990000),
              senderid: activeuserid,
              recieverid: activeuser?.userid,
              type: "image",
               sender: "sent",
               from: "victor",
               message: message,
               datetime: new Date(),
            }
          };
    console.log('payload is', payloaddataimgs)
    
    
            let data = {
              id: getRandomNumber(1, 990000),
               type: "image",
               senderid: activeuserid,
               recieverid: activeuser?.userid,
               sender: "sent",
               from: "victor",
               message: message,
               datetime: new Date(),
             
           }
    
           compressAndEncodeToBase64(file=file, data=data);
    
          }
          else if(quotedids && message && file) {
    
    
            payloaddataimgs = {
              myimg: file,
              data: {
                id: getRandomNumber(1, 990000),
                senderid: activeuserid,
                recieverid: activeuser?.userid,
                type: "replyimg",
                 sender: "sent",
                 from: "victor",
                 quotedid:  quotedids,
                 message: message,
                 datetime: new Date(),
              }
            };
    
    
    
            let data = {
              id: getRandomNumber(1, 990000),
               type: "replyimg",
               senderid: activeuserid,
               recieverid: activeuser?.userid,
               sender: "sent",
               from: "victor",
               quotedid:  quotedids,
               message: message,
               datetime: new Date(),
           }
           compressAndEncodeToBase64(file=file, data=data);
          }
    
          else if(quotedids && message && !file) {
    
    
            payloaddata = {
              data: {
                id: getRandomNumber(1, 990000),
                senderid: activeuserid,
                recieverid: activeuser?.userid,
                type: "replytext",
                 sender: "sent",
                 from: "victor",
                 quotedid:  quotedids,
                 message: message,
                 datetime: new Date(),
              }
            };
    
    
            conversationData.push({
              id: getRandomNumber(1, 990000),
              senderid: activeuserid,
              recieverid: activeuser?.userid,
               type: "replytext",
               sender: "sent",
               from: "victor",
               quotedid:  quotedids,
               message: message,
               datetime: new Date(),
           });
    
           
    
    
    
    
          }
    
          else if (message && !quotedids){
    
    
             payloaddata = {
              data: {
                id: getRandomNumber(1, 990000),
                senderid: activeuserid,
                recieverid: activeuser?.userid,
                 type: "text",
                 sender: "sent",
                 from: "victor",
                 message: message,
                 datetime: new Date(),
              }
            };
    
     
    
            // axiosInstance.post(`/messageportal/${uniqueid}/`, payload)
            // .then(response => {
            //   console.log('Response from sent message:', response.data);
            //   let allfetchmessage = []
            //   response?.data?.allmessages.forEach(item => {  
          
            //     if (item?.messageid?.sender?.id === tokenPayload?.user_id) {
            //     allfetchmessage.push({
            //       'chat_id': item?.messageid?.messageid,
            //        from_id: activeuserid, 
            //        to_id: aud(item?.messageid?.reciever?.id)?.userid,
            //         conversationDatas: item.testj
            //     });
          
            //   }
            //   else if (item?.messageid?.reciever?.id === tokenPayload?.user_id) {
            //     allfetchmessage.push({
            //       'chat_id': item?.messageid?.messageid,
            //        from_id: activeuserid, 
            //        to_id: aud(item?.messageid?.sender?.id,)?.userid,
            //         conversationDatas: item.testj
            //     });
          
          
            //   }
          
            
            //   })
          
            //   AllChats = allfetchmessage
            // })
            // .catch(error => {
            //   console.error('Error:', error);
            // });
    
    
            conversationData.push({
             id: getRandomNumber(1, 990000),
             senderid: activeuserid,
             recieverid: activeuser?.userid,
              type: "text",
              sender: "sent",
              from: "victor",
              message: message,
              datetime: new Date(),
          });
          }
          
          if (payloaddata){
            payloadpost (payloaddata)
          }
          // if (payloaddataimg){
          //   payloadimg (payloaddataimg)
          // } 
      }

 

 


      document.getElementById('mymessage').value = ''
      document.getElementById('quotedid').value = ''
      document.getElementById('qtd').innerHTML = ''
    

    renderConversation();
    adjustChatDataHeight()
    }


    function payloadpost (payloaddata){
      const access = localStorage.getItem('access_token')
      const arrayToken = access.split('.');
      const tokenPayload = JSON.parse(atob(arrayToken[1]));
      const uniqueid = activeprofiledata?.message_id
      if (payloaddata){

        axiosInstance.post(`/messageportal/${uniqueid}/`, payloaddata)
        .then(response => {
          console.log('Response from sent message:', response.data);
          let allfetchmessage = []
          response?.data?.allmessages.forEach(item => {  
      
            if (item?.messageid?.sender?.id === tokenPayload?.user_id) {
            allfetchmessage.push({
              'chat_id': item?.messageid?.messageid,
               from_id: activeuserid, 
               to_id: aud(item?.messageid?.reciever?.id)?.userid,
                conversationDatas: item.testj
            });
      
          }
          else if (item?.messageid?.reciever?.id === tokenPayload?.user_id) {
            allfetchmessage.push({
              'chat_id': item?.messageid?.messageid,
               from_id: activeuserid, 
               to_id: aud(item?.messageid?.sender?.id,)?.userid,
                conversationDatas: item.testj
            });
      
      
          }
      
        
          })
      
          AllChats = allfetchmessage
        })
        .catch(error => {
          console.error('Error:', error);
        });


      }
    }


    function payloadimg (payloaddata){
      const access = localStorage.getItem('access_token')
      const arrayToken = access.split('.');
      const tokenPayload = JSON.parse(atob(arrayToken[1]));
      const uniqueid = activeprofiledata?.message_id


      if (payloaddata){

        axiosInstance.post(`/messageportal/${uniqueid}/`, payloaddata, {
          headers: {
            'Content-Type': 'multipart/form-data', // Override Content-Type for this request
            // Add other headers if needed
          }
        })
        .then(response => {
          console.log('Response from sent message:', response.data);
          let allfetchmessage = []
          response?.data?.allmessages.forEach(item => {  
      
            if (item?.messageid?.sender?.id === tokenPayload?.user_id) {
            allfetchmessage.push({
              'chat_id': item?.messageid?.messageid,
               from_id: activeuserid, 
               to_id: aud(item?.messageid?.reciever?.id)?.userid,
                conversationDatas: item.testj
            });
      
          }
          else if (item?.messageid?.reciever?.id === tokenPayload?.user_id) {
            allfetchmessage.push({
              'chat_id': item?.messageid?.messageid,
               from_id: activeuserid, 
               to_id: aud(item?.messageid?.sender?.id,)?.userid,
                conversationDatas: item.testj
            });
      
      
          }
      
        
          })
      
          AllChats = allfetchmessage
        })
        .catch(error => {
          console.error('Error:', error);
        });


      }

    }

    function displayFileSize(size, elementId) {
      var fileSizeDisplay = document.getElementById(elementId);
      var fileSizeFormatted = (size / 1024).toFixed(2) + " KB";
      fileSizeDisplay.textContent = "File Size: " + fileSizeFormatted;
  }


  async function compressAndEncodeToBase64(file, data) {
console.log(data)
var quality = 60;
var output_format = 'jpg';

var reader = new FileReader();

reader.onload = function () {
  var img = new Image();
  img.src = reader.result;

  img.onload = function () {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;

      // Check if the image has transparency
      var hasTransparency = false;
      ctx.drawImage(img, 0, 0);
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < imageData.data.length; i += 4) {
          if (imageData.data[i + 3] < 255) { // Check alpha value
              hasTransparency = true;
              break;
          }
      }

      // If image has transparency, draw it onto a white background before converting to JPEG
      if (hasTransparency) {
          ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
          ctx.fillStyle = '#FFFFFF'; // Set background color to white
          ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill canvas with white
      }

      // Draw image onto canvas
      ctx.drawImage(img, 0, 0);

      // Convert canvas to JPEG
      canvas.toBlob(function (blob) {
          var readerBlob = new FileReader();
          readerBlob.readAsDataURL(blob);
          readerBlob.onloadend = function () {
              var base64Result = URL.createObjectURL(blob);
           
              var compressedFile = new File([blob], file.name, {
                type: 'image/jpeg' // Assuming you want to convert to JPEG format
              });
              console.log('blob', compressedFile)
              // var target_img = document.getElementById("target_img");
              // target_img.src = base64Result;
              // displayFileSize(blob.size, "compressed_file_size");
              console.log("Compressed file size:", blob.size);
              data.imageUrl = base64Result
              conversationData.push(data)
              document.getElementById('myimg').value = ''
              renderConversation();
              adjustChatDataHeight()

            let  payloaddataimg = {
                myimg:   compressedFile,
                data: {
                  id: getRandomNumber(1, 990000),
                  senderid: data.senderid,
                  recieverid: data.recieverid,
                  type: "image",
                  quotedid: data.type === "replyimg" ? data.quotedids : undefined, 
                   sender: "sent",
                   from: "victor",
                   message: data.message,
                   datetime: new Date(),
                }
              };

              if (payloaddataimg){
                payloadimg (payloaddataimg)
              } 
            
          };
      }, 'image/jpeg', quality / 100);
  };
};

reader.onerror = function (error) {
  console.error("Error:", error);
};

reader.readAsDataURL(file);
}






function lloading(){
  const lload = document.getElementById('cz').innerHTML = 
  `
  <div class="centertext lazyloads lazyloads">   Select a note to view</div>
  <div class="chatContainerz">
    <div class="completemessagerec ">
        <div class="messagerec " id="88833">

                            <div class="chatbubble lazyloads lazyloads">Thanks to you, I smile a little more, laugh a little harder, and cry a little less. I am so lucky to have you in my life. 

                            </div>
                        </div>

                        </div>

    <div class="completemessagerec ">
                            <div class="messagerec " id="88833">

                                                <div class="chatbubble lazyloads lazyloads">Thanks to you, I smile a little more, laugh a little harder, and cry a little less. I am so lucky to have you in my life. 

                                                </div>
                                            </div>

                                            </div>

                                            <div class="completemessagesent">
                                                <div class="messagesent" id="324923">

                                                    <div class="chatbubble lazyloads lazyloads">Thanks to you, I smile a little more, laugh a little harder, and cry a little less. I am so lucky to have you in my life. 
    
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="completemessagesent">
                                                <div class="messagesent" id="324923">

                                                    <div class="chatbubble lazyloads lazyloads">Thanks to you, I smile a little more, laugh a little harder, and cry a little less. I am so lucky to have you in my life. 
    
                                                    </div>
                                                </div>
                                            </div>


</div>

  `

}

    function generateChatBubble(data) {
      return `
        <div class="chatbubbled" onclick="updateActiveUser(${data.id})">
            <div class="userdata">
                <div class="profilephoto">
                    <img src="image 116.png" alt="">
                </div>
                <div class="usersname">
                    <div>
                        <small class="small mg">
                            <div class="uname">${data.name}</div>
                            <div class="time">${data.time}</div>
                        </small>
                    </div>
                    <small class="small twolines">${data?.message || 'Click Here To Start A Conversation'}</small>
                </div>
            </div>
        </div>`;
    }
    

    function generatenewChatBubble(data) {
      return `
        <div class="chatbubbled"  onclick="newdeets(${data.id})">
            <div class="userdata">
                <div class="profilephoto">
                <img src="${data.avatar || 'image116.png'}" alt="">
                </div>
                <div class="usersname">
                    <div>
                        <small class="small mg">
                            <div class="uname">${data.name}</div>
                     
                        </small>
                    </div>
                    <small class="small twolines">Start A Conversation Now</small>
                </div>
            </div>
        </div>`;
    }
    

    function genbubble(){
   // Generate HTML for all chat bubbles
   const chatHTML = chatData.map(generateChatBubble).join('');
   const mylength = chatData.length
    if (mylength){
      document.getElementById('allchat').innerHTML = chatHTML;
    }
    else{
      document.getElementById('allchat').innerHTML = 
      `
      <div class="oops">
      <ion-icon name="cog-outline"></ion-icon>
      <h4>No conversations yet</h4>
      <p>Oops! You haven't started any conversation yet. Click <a href="#" onclick="swapchat()">here</a> to start one.</p>
  </div>
      `;
    }
   // Append generated HTML to a container (assuming you have a container with id "chatContainer")
  

    } genbubble()

 function alluserslist(){
  const filteredChatDatas = ChatDatas.filter(chat => chat.userid !== activeuserid);
  const chatHTML = filteredChatDatas.map(generatenewChatBubble).join('');
  document.getElementById('newchats').innerHTML = chatHTML;  
 } alluserslist()

 function swapchat(){
  document.getElementById('newchats').classList.toggle('h')
  document.getElementById('allchat').classList.toggle('h')
 }

 function newdeets(id){
  let newData = chatData.find(item => item?.id === id);

  if(newData){
    updateActiveUser(newData?.id)
    swapchat()
    showme()
  } else{
   newData = ChatDatas.find(item => item?.id === id);
   console.log(newData)
    chatData.push(newData);
    genbubble()
    swapchat()
    updateActiveUser(newData?.id)
    showme()
  }

 }
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    const mySwiperContainer = document.querySelector(".mySwiper-container"); // added this line
    const swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });

    const storiesData = [
      {
        name: 'storyone',
        stories: [
          'https://plus.unsplash.com/premium_photo-1677215211005-0305cb45e09f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1653669486781-7265d7824b44?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1653669486980-7891ab4b261e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ]
      },
      {
        name: 'storytwo',
        stories: [
          'https://placekitten.com/602/400',
          'https://placekitten.com/603/400',
          'https://placekitten.com/604/400',
        ]
      },
      {
        name: 'storythree',
        stories: [
          'https://placekitten.com/605/400',
          'https://placekitten.com/606/400',
          'https://placekitten.com/607/400',
        ]
      }
    ];

    // Handle story clicks
    const storyButtons = document.querySelectorAll('.stories div');
    storyButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // Get the ID of the clicked story
        const storyId = button.id;

        // Find the corresponding story in the data
        const selectedStory = storiesData.find(story => story.name === storyId);

        if (selectedStory) {
          // Clear existing slides
          swiper.removeAllSlides();

          // Add slides for the selected story
          selectedStory.stories.forEach(image => {
            swiper.appendSlide(`<div class="swiper-slide"><img src="${image}" alt="${storyId}"></div>`);
          });

          // Go to the first slide and start autoplay
          swiper.slideTo(0);
          swiper.autoplay.start();
          
          // Show mySwiper container
          mySwiperContainer.style.display = 'block';
        }
      });
    });

    // Stop autoplay when reaching the last slide
    swiper.on('slideChange', () => {
      if (swiper.isEnd) {
        swiper.autoplay.stop();
        // Hide mySwiper container when reaching the last slide
        mySwiperContainer.style.display = 'none';
      }
    });



    
    

    function myswitch() {
      // Get references to the elements
      switchicon = document.getElementById('switch');
      sidebar = document.getElementById('sidebar');
      chatsection = document.getElementById('chatscreen');
  
sidebar.classList.toggle('hidden')
chatsection.classList.toggle('showing')
adjustChatDataHeight()
      // Toggle the display property
      // if (sidebar.style.display === 'none') {
      //     // If sidebar is hidden, show it and hide chat screen
      //     sidebar.style.display = 'flex';
      //     chatsection.style.display = 'none';
      //     adjustChatDataHeight()
      // } else {
      //     // If sidebar is visible, hide it and show chat screen
      //     sidebar.style.display = 'none';
      //     chatsection.style.display = 'flex';
      //     adjustChatDataHeight()
      // }
  }
  

function searchshow() {
  switchicon = document.getElementById('switch');
  sidebar = document.getElementById('sidebar');

  console.log('kekekek')
  const searchbtn = document.getElementById('srch');
  const overlay = document.getElementById('overlay');
  const seachbox = document.getElementById('search');

  // Toggle the 'show' class on overlay and overlaydata
  overlay.classList.toggle('show');
  seachbox.classList.toggle('searchshow');



}

  function updateContainerHeight() {
    var container = document.querySelector('.container');
    container.style.height = window.innerHeight + 'px';
    adjustChatDataHeight()
}

// Initial height calculation
updateContainerHeight();


// Update height on window resize
window.addEventListener('resize', updateContainerHeight);



function toggleFullscreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
      if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
  } else {
      if (document.exitFullscreen) {
          document.exitFullscreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
      }
  }
}





$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 4, // Number of items to display
    loop: false, // Infinite loop
    responsive: {

      600: {
        items: 4 // Number of items to display on medium screens
      },
      1000: {
        items: 4 // Number of items to display on large screens
      },
      1400: {
        items: 5 // Number of items to display on large screens
      }
      ,
      1800: {
        items: 6 // Number of items to display on large screens
      }
    }
  });
});      



function showme(){
const a = document.getElementById('cspalash')
const b = document.getElementById('cdata')

a.style.display = 'none'
b.style.display = 'flex'
adjustChatDataHeight()
}



function myswitchmobile() {
  // Get references to the elements
  const switchicon = document.getElementById('switch');
  const sidebar = document.getElementById('sidebar');
  const chatsection = document.getElementById('chatscreen');

  // Check if sidebar has class 'hidden'
  if (!sidebar.classList.contains('hidden')) {
    // If sidebar is not hidden, toggle classes
    sidebar.classList.toggle('hidden');
    chatsection.classList.toggle('showing');
    adjustChatDataHeight();
  }
}











// Axios instance with interceptor
const axiosInstance = axios.create({
  baseURL: 'https://veejobapi.vercel.app/', // Update base URL
  headers: {

    'Content-Type': 'application/json',
    // 'Content-Type': 'multipart/form-data',
  }
});

// Function to refresh the access token
async function refreshAccessToken() {
  try {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) {
      throw new Error('Refresh token not found');
    }
    const response = await axios.post('https://veejobapi.vercel.app/api/token/refresh/', { refresh: refreshToken });
    const newAccessToken = response.data.access;
    const newRefreshToken = response.data.refresh;
    localStorage.setItem('access_token', newAccessToken); // Save new access token
    localStorage.setItem('refresh_token', newRefreshToken); // Save new refresh token
    console.log('token refreshed')
    return newAccessToken; // Return the new access token
  } catch (error) {
    throw new Error('Failed to refresh access token');
  }
}

// Request interceptor
axiosInstance.interceptors.request.use(
  async config => {
    const access = localStorage.getItem('access_token');
    if (access) {
      const arrayToken = access.split('.');
      const tokenPayload = JSON.parse(atob(arrayToken[1]));
      const isExpired = Math.floor(new Date().getTime() / 1000) >= tokenPayload.exp;
      if (isExpired) {
        try {
          const newAccessToken = await refreshAccessToken();
          config.headers.Authorization = `Bearer ${newAccessToken}`;
          return config;
        } catch (error) {
          console.error('Failed to refresh access token:', error);
          // Handle token refresh failure
          // Example: Redirect to login page
          // window.location.href = '/login';
          VanillaToasts.create({
            title: 'Error!',
            text:  'Session Expired' ,
            type: 'error',
            timeout: 5000
        });
        
        setTimeout(function() {
          // Redirect to success.html with the random ID as a parameter
          window.location.href = `loginpage.html`;
        }, 2000); // 2000 milliseconds = 2 seconds
          return Promise.reject(new Error('Failed to refresh access token'));
        }
      } else {
        config.headers.Authorization = `Bearer ${access}`;
      }
    } else {
      // Access token not found, handle redirect to login or show error message
      console.log("Access token not found");
      // Example: Redirect to login page
      // window.location.href = '/login';
      VanillaToasts.create({
        title: 'Error!',
        text:  'Session Expired' ,
        type: 'error',
        timeout: 5000
    });
    
    setTimeout(function() {
      // Redirect to success.html with the random ID as a parameter
      
      window.location.href = `loginpage.html`;
    }, 2000); // 2000 milliseconds = 2 seconds
      return Promise.reject(new Error('Access token not found'));
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Handle errors
    return Promise.reject(error);
  }
);



let gottendata = []
async function fdata() {
  try {
    const response = await axiosInstance.get('/chatdashboard');
    console.log(response);
    // Redirect to success.html with the random ID as a parameter
    continuation(response);


  } catch (error) {
    console.error(error.message);
    VanillaToasts.create({
      title: 'Error!',
      text: error.message || 'An Error Occurred',
      type: 'error',
      timeout: 5000
    });
  }
}

fdata();





function getlastmessage(id){

  const mygdata = gottendata.find(gd => gd?.messageid?.messageid == id )
  
  if( mygdata  ){

    if(mygdata?.testj?.length > 0){

      return mygdata?.testj?.pop()?.message;

    }else{
     return 'start chatting'
    }
    
  } 
  else{
    return 'start chatting'
  }

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
      return `${day}-${month}-${year}`;
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
// function getlastmessage(id){
//   const mygdata = gottendata.find(gd => gd?.messageid == id);
//   if (mygdata) {
//     // Check if 'testj' exists and has elements
//     if (mygdata?.testj?.length > 0) {
//       // Retrieve the last message from 'testj'
//       const lastMessage = mygdata.testj.pop();
//       console.log(lastMessage);
//       return lastMessage.message;
//     } else {
//       return 'start chatting';
//     }
//   } else {
//     return 'start chatting';
//   }
// }



function bumblebee(data){
continuation(data)
}

function continuation(response){

  const access = localStorage.getItem('access_token')
  const arrayToken = access.split('.');
  const tokenPayload = JSON.parse(atob(arrayToken[1]));
  activeuserid = tokenPayload?.user_id
  console.log('gottendata', gottendata)
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
        time: getlasttime(item.messageid), // Example value
        message: getlastmessage(item.messageid),
        lastSeen: profile.last_seen,
        status: profile.profile_status,
        quote: profile.bio,
        phoneNumber: profile.phonenumber,
        email: user.email,
        avatar: profile.avatar,
      });
    });
    
  }


  genbubble()
  alluserslist()

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


  ChatDatas = allusersarray
  // console.table(allusersarray);
  chatData = newArray

  genbubble()
  alluserslist()


  fdatatwo() 



  // let allfetchmessage = []
  //   response?.data?.allmessages.forEach(item => {  

  //     if (item?.messageid?.sender?.id === tokenPayload?.user_id) {
  //     allfetchmessage.push({
  //       'chat_id': item?.messageid?.messageid,
  //        from_id: activeuserid, 
  //        to_id: aud(item?.messageid?.reciever?.id)?.userid,
  //         conversationDatas: item.testj
  //     });

  //   }
  //   else if (item?.messageid?.reciever?.id === tokenPayload?.user_id) {
  //     allfetchmessage.push({
  //       'chat_id': item?.messageid?.messageid,
  //        from_id: activeuserid, 
  //        to_id: aud(item?.messageid?.sender?.id,)?.userid,
  //         conversationDatas: item.testj
  //     });


  //   }

  
  //   })

  //   AllChats = allfetchmessage
}



async function fdatatwo() {
  
  const access = localStorage.getItem('access_token')
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
         from_id: activeuserid, 
         to_id: aud(item?.messageid?.reciever?.id)?.userid,
          conversationDatas: item.testj
      });

    }
    else if (item?.messageid?.reciever?.id === tokenPayload?.user_id) {
      allfetchmessage.push({
        'chat_id': item?.messageid?.messageid,
         from_id: activeuserid, 
         to_id: aud(item?.messageid?.sender?.id,)?.userid,
          conversationDatas: item.testj
      });


    }

  
    })

    AllChats = allfetchmessage


  } catch (error) {
    console.error(error.message);
    VanillaToasts.create({
      title: 'Error!',
      text: error.message || 'An Error Occurred',
      type: 'error',
      timeout: 5000
    });
  }

}



function audioswitch(){
  const a = document.getElementById('normalmessage')
  const b = document.getElementById('audiomessage')

 a.classList.toggle('activebox')
 b.classList.toggle('activebox')

}

// async function fetchDataEveryFiveSeconds() {
//   console.log('fetched')
//   // Call fdatatwo() initially

//   // Set up interval to call fdatatwo() every 5 seconds
//   setInterval(async () => {
//     var elementstwo = document.getElementById("blurredpreview");
//     var containsClassName = elementstwo.classList.contains("blurpreviewshow");
//     console.log(containsClassName)
//     await fdatatwo();
//     if(active){

//       if (!elementstwo.classList.contains("blurpreviewshow")) {
        
//       updateActiveUser(active)
//       }
    
//     }
//   }, 5000); // 5000 milliseconds = 5 seconds
// }fetchDataEveryFiveSeconds()



class AudioPlayer {
  constructor(wrapperElement) {
    this.audioWrapper = wrapperElement;
    this.playPause = wrapperElement.querySelector(".c-wa-audio__control-play");
    this.progress = wrapperElement.querySelector(".c-wa-audio__time-progress");
    this.sliders = wrapperElement.querySelectorAll(".c-wa-audio__time-slider");
    this.player = wrapperElement.querySelector("audio");
    this.currentTime = wrapperElement.querySelector(".c-wa-audio__time-current");
    this.totalTime = wrapperElement.querySelector(".c-wa-audio__time-total");
    this.draggableClasses = ["c-wa-audio__time-pin"];
    this.currentlyDragged = null;

    this.init();
  }

  init() {
    this.attachEventListeners();
  }

  attachEventListeners() {
    // Add event listeners for play/pause button, sliders, and mouse events
    this.playPause.addEventListener("click", this.togglePlay.bind(this));
    this.player.addEventListener("timeupdate", this.updateProgress.bind(this));
    this.player.addEventListener("loadedmetadata", () => {
      this.totalTime.textContent = this.formatTime(this.player.duration);
    });
    this.player.addEventListener("canplay", this.makePlay.bind(this));
    this.player.addEventListener("ended", () => {
      this.changePlayPauseIcon(true);
      this.player.currentTime = 0;
    });
    this.sliders.forEach((slider) => {
      let pin = slider.querySelector(".c-wa-audio__time-pin");
      slider.addEventListener("click", this[pin.dataset.method].bind(this));
    });

    window.addEventListener("mousedown", this.handleMouseDown.bind(this));
    window.addEventListener("mousemove", this.handleMouseMove.bind(this));
    window.addEventListener("mouseup", this.handleMouseUp.bind(this));
  }

  handleMouseDown(event) {
    if (!this.isDraggable(event.target)) return false;
    this.currentlyDragged = event.target;
    let handleMethod = this.currentlyDragged.dataset.method;
    window.addEventListener("mousemove", this[handleMethod].bind(this), false);
  }

  handleMouseMove(event) {
    if (this.currentlyDragged) {
      let handleMethod = this.currentlyDragged.dataset.method;
      window[handleMethod](event);
    }
  }

  handleMouseUp() {
    if (this.currentlyDragged) {
      this.currentlyDragged = null;
      window.removeEventListener("mousemove", this[handleMethod].bind(this), false);
    }
  }

  isDraggable(el) {
    let canDrag = false;
    let classes = Array.from(el.classList);
    this.draggableClasses.forEach((draggable) => {
      if (classes.includes(draggable)) canDrag = true;
    });
    return canDrag;
  }

  updateProgress() {
    const current = this.player.currentTime;
    const percent = (current / this.player.duration) * 100;
    this.progress.style.width = percent + "%";
    this.currentTime.textContent = this.formatTime(current);
  }

  getRangeBox(event) {
    let rangeBox = event.target;
    let el = this.currentlyDragged;
    if (event.type === "click" && this.isDraggable(event.target)) {
      rangeBox = event.target.parentElement.parentElement;
    }
    if (event.type === "mousemove") {
      rangeBox = el.parentElement.parentElement;
    }
    return rangeBox;
  }

  getCoefficient(event) {
    let slider = this.getRangeBox(event);
    let rect = slider.getBoundingClientRect();
    let K = 0;
    if (slider.dataset.direction === "horizontal") {
      const offsetX = event.clientX - rect.left;
      let width = slider.clientWidth;
      K = offsetX / width;
    } else if (slider.dataset.direction === "vertical") {
      let height = slider.clientHeight;
      var offsetY = event.clientY - rect.top;
      K = 1 - offsetY / height;
    }
    return K;
  }

  rewind(event) {
    if (this.inRange(event)) {
      this.player.currentTime = this.player.duration * this.getCoefficient(event);
    }
  }

  formatTime(time) {
    var min = Math.floor(time / 60);
    var sec = Math.floor(time % 60);
    return min + ":" + (sec < 10 ? "0" + sec : sec);
  }

  togglePlay() {
    if (this.player.paused) {
      this.changePlayPauseIcon(false);
      this.player.play();
    } else {
      this.changePlayPauseIcon(true);
      this.player.pause();
    }
  }

  makePlay() {
    this.playPause.style.display = "block";
  }

  changePlayPauseIcon(play = false) {
    if (play) {
      this.playPause.classList.remove("fa-pause");
      this.playPause.classList.add("fa-play");
    } else {
      this.playPause.classList.remove("fa-play");
      this.playPause.classList.add("fa-pause");
    }
  }

  inRange(event) {
    let rangeBox = this.getRangeBox(event);
    let rect = rangeBox.getBoundingClientRect();
    let direction = rangeBox.dataset.direction;
    if (direction === "horizontal") {
      const min = 0;
      const max = rect.width;
      const clientX = event.clientX - rect.left;
      if (clientX < min || clientX > max) return false;
    } else {
      var min = rect.top;
      var max = min + rangeBox.offsetHeight;
      if (event.clientY < min || event.clientY > max) return false;
    }
    return true;
  }
}

// Create instances for each audio player
const audioWrappers = document.querySelectorAll(".c-wa-audio");
audioWrappers.forEach((wrapper) => new AudioPlayer(wrapper));


function audplayer(){
  const audioPlayers = document.querySelectorAll(".audio-player");

  audioPlayers.forEach((audioPlayer) => {
    const audioUrl = audioPlayer.dataset.url;
    const audio = new Audio(audioUrl);
  
    const btnPlayToggle = audioPlayer.querySelector(".btn-play");
    const slider = audioPlayer.querySelector("input[type='range']");
  
    function setMessageDate() {
      currentDateTime = new Date().toISOString().substr(11, 5);
      audioPlayer.style.setProperty(
        "--player-current-date-time",
        `'${currentDateTime}'`
      );
    }
  
    function formatTimeToDisplay(seconds) {
      const milliseconds = seconds * 1000;
      return new Date(milliseconds).toISOString().substr(14, 5);
    }
  
    function handlePlayButton() {
      audio.paused ? audio.play() : audio.pause();
    }
  
    function handleSlider(e) {
      const { duration } = audio;
      const percent = e.target.value;
      const currentTimeInSeconds = ((percent * duration) / 100).toFixed(2);
      audio.currentTime = currentTimeInSeconds;
    }
  
    function updateCurrentTimeDisplay(time) {
      audioPlayer.style.setProperty("--player-current-time", `'${time}'`);
    }
  
    function updateCurrentPercent() {
      const { currentTime, duration } = audio;
      const percentPlayed = (currentTime * 100) / duration;
      slider.value = percentPlayed;
      audioPlayer.style.setProperty(
        "--player-percent-played",
        `${percentPlayed}%`
      );
    }
  
    function showTimeDuration() {
      const { duration } = audio;
      const durationDisplay = formatTimeToDisplay(duration);
      updateCurrentTimeDisplay(durationDisplay);
    }
  
    function start() {
      btnPlayToggle.onclick = handlePlayButton;
      slider.oninput = handleSlider;
  
      audio.onloadstart = () => {
        setMessageDate();
        audioPlayer.classList.add("loading");
      };
      audio.onplay = () => audioPlayer.classList.add("playing");
      audio.onpause = () => audioPlayer.classList.remove("playing");
      audio.onloadeddata = () => audioPlayer.classList.remove("loading");
      audio.ondurationchange = showTimeDuration;
      audio.onended = () => (audio.currentTime = 0);
      audio.ontimeupdate = () => {
        const { currentTime } = audio;
        const currentTimeDisplay = formatTimeToDisplay(currentTime);
        updateCurrentTimeDisplay(currentTimeDisplay);
        updateCurrentPercent();
        if (currentTime === 0) {
          showTimeDuration();
        }
      };
    }
  
    start();
  });
} audplayer()




let mediaRecorder;
let audioChunks = [];
let recordedAudioBlob;

const recordButton = document.getElementById('recordButton');
const stopButton = document.getElementById('stopButton');
const playButton = document.getElementById('playButton');
const audioPlayback = document.getElementById('audioPlayback');
const attachmentContainer = document.getElementById('attachmentContainer');
const fileInput = document.getElementById('fileInput');
const sendButton = document.getElementById('sendButton');
const recordingText = document.getElementById('recordingText');

recordButton.addEventListener('click', startRecording);
stopButton.addEventListener('click', stopRecording);
playButton.addEventListener('click', playRecording);
fileInput.addEventListener('change', handleFileInputChange);
sendButton.addEventListener('click', sendAudio);

function startRecording() {
  // Clear previous recording if any
  clearPreviousRecording();

  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      mediaRecorder = new MediaRecorder(stream);
      recordingText.style.display = 'block';
      mediaRecorder.ondataavailable = event => {
        audioChunks.push(event.data);
      };
      mediaRecorder.onstop = () => {
        recordingText.style.display = 'none';
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        recordedAudioBlob = audioBlob;
        const audioUrl = URL.createObjectURL(audioBlob);
        displayAudioPlayer(audioUrl);
        fileInput.style.display = 'inline';
        sendButton.style.display = 'inline';
      };
      mediaRecorder.start();
    })
    .catch(console.error);
  recordButton.disabled = true;
  stopButton.disabled = false;
  playButton.disabled = true;
}

function clearPreviousRecording() {
  audioChunks = [];
  recordedAudioBlob = null;
  const existingAudioPlayer = document.querySelector('audio');
  if (existingAudioPlayer) {
    existingAudioPlayer.parentNode.removeChild(existingAudioPlayer);
  }
}

function stopRecording() {
  mediaRecorder.stop();
  recordButton.disabled = false;
  stopButton.disabled = true;
  playButton.disabled = false;
}

function playRecording() {
  audioPlayback.play();
}

function displayAudioPlayer(audioUrl) {
  // Remove any existing audio players
  while (attachmentContainer.firstChild) {
    attachmentContainer.removeChild(attachmentContainer.firstChild);
  }
  const audioAttachment = createAudioAttachment(audioUrl);
  attachmentContainer.appendChild(audioAttachment);
}

function createAudioAttachment(audioUrl) {
  const audioAttachment = document.createElement('audio');
  audioAttachment.controls = true;
  audioAttachment.src = audioUrl;
  
  return audioAttachment;
}

function handleFileInputChange(event) {
  const file = event.target.files[0];
  if (file) {
    const fileAttachment = createFileAttachment(file);
    attachmentContainer.appendChild(fileAttachment);
  }
}

function createFileAttachment(file) {
  const fileAttachment = document.createElement('p');
  fileAttachment.textContent = `File: ${file.name}`;
  return fileAttachment;
}

function sendAudio() {
  const confirmation = confirm('Do you want to send the audio?');
  if (confirmation) {
    if (recordedAudioBlob) {
      const formData = new FormData();
      formData.append('myaudio', recordedAudioBlob, 'recording.wav');
      const access = localStorage.getItem('access_token')
      const arrayToken = access.split('.');
      const tokenPayload = JSON.parse(atob(arrayToken[1]));
      const uniqueid = activeprofiledata?.message_id
    
      let payloadvn
      // ddd
      payloadvn = {
           myaudio:   recordedAudioBlob,
            data: {
              id: getRandomNumber(1, 990000),
              senderid: activeuserid,
              recieverid: activeuser?.userid,
              type: "voicenote",
               sender: "sent",
               from: "victor",
               datetime: new Date(),
            }
          };

      if (payloadvn){

            axiosInstance.post(`/messageportal/${uniqueid}/`, payloadvn, {
              headers: {
                'Content-Type': 'multipart/form-data', // Override Content-Type for this request
                // Add other headers if needed
              }
            })
            .then(response => {
              console.log('Response from sent message:', response.data);
              let allfetchmessage = []
              response?.data?.allmessages.forEach(item => {  
          
                if (item?.messageid?.sender?.id === tokenPayload?.user_id) {
                allfetchmessage.push({
                  'chat_id': item?.messageid?.messageid,
                   from_id: activeuserid, 
                   to_id: aud(item?.messageid?.reciever?.id)?.userid,
                    conversationDatas: item.testj
                });
          
              }
              else if (item?.messageid?.reciever?.id === tokenPayload?.user_id) {
                allfetchmessage.push({
                  'chat_id': item?.messageid?.messageid,
                   from_id: activeuserid, 
                   to_id: aud(item?.messageid?.sender?.id,)?.userid,
                    conversationDatas: item.testj
                });
          
          
              }
          
            
              })
          
              AllChats = allfetchmessage
            })
            .catch(error => {
              console.error('Error:', error);
            });
        
        
          }

 
    } else {
      alert('No recorded audio to send.');
    }
  }
}



function payloadvns (payloaddata){


  if (payloaddata){

    axiosInstance.post(`/messageportal/${uniqueid}/`, payloaddata, {
      headers: {
        'Content-Type': 'multipart/form-data', // Override Content-Type for this request
        // Add other headers if needed
      }
    })
    .then(response => {
      console.log('Response from sent message:', response.data);
      let allfetchmessage = []
      response?.data?.allmessages.forEach(item => {  
  
        if (item?.messageid?.sender?.id === tokenPayload?.user_id) {
        allfetchmessage.push({
          'chat_id': item?.messageid?.messageid,
           from_id: activeuserid, 
           to_id: aud(item?.messageid?.reciever?.id)?.userid,
            conversationDatas: item.testj
        });
  
      }
      else if (item?.messageid?.reciever?.id === tokenPayload?.user_id) {
        allfetchmessage.push({
          'chat_id': item?.messageid?.messageid,
           from_id: activeuserid, 
           to_id: aud(item?.messageid?.sender?.id,)?.userid,
            conversationDatas: item.testj
        });
  
  
      }
  
    
      })
  
      AllChats = allfetchmessage
    })
    .catch(error => {
      console.error('Error:', error);
    });


  }

}