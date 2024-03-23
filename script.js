// Calculate and set the height of the chat data section
function adjustChatDataHeight() {
  var container = document.querySelector(".chatcontainer");
  var header = document.querySelector(".charheader");
  var footer = document.querySelector(".chatfooter");
  var chatData = document.getElementById("chatData");

  var availableHeight =
    container.clientHeight - header.clientHeight - footer.clientHeight;
  chatData.style.height = availableHeight + "px";
}

// Call the function initially and whenever the window is resized
adjustChatDataHeight();
window.addEventListener("resize", adjustChatDataHeight);

function attachmenttoggle() {
  console.log("kekekek");
  const togglebtn = document.getElementById("attachmentbtn");
  const overlay = document.getElementById("overlay");
  const overlaydata = document.getElementById("attachmentdata");

  // Toggle the 'show' class on overlay and overlaydata
  overlay.classList.toggle("show");
  overlaydata.classList.toggle("show");
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4, // Number of items to display
    loop: false, // Infinite loop
    responsive: {
      600: {
        items: 4, // Number of items to display on medium screens
      },
      1000: {
        items: 4, // Number of items to display on large screens
      },
      1400: {
        items: 5, // Number of items to display on large screens
      },
      1800: {
        items: 6, // Number of items to display on large screens
      },
    },
  });
});

let active = 1;

const chatData = [
  {
    id: 1,
    name: "Lara Mueller",
    time: "Wednesday",
    message: "Hey, I heard that you wanted...Hey, I heard that you wanted...",
  },
  {
    id: 2,
    name: "John Smith",
    time: "Thursday",
    message: "Hi there! What's up? Hi there! What's up? Hi there! What's up?",
  },
  {
    id: 3,
    name: "Emily Johnson",
    time: "Friday",
    message: "I saw the movie yesterday. It was amazing!",
  },
  {
    id: 4,
    name: "Chris Brown",
    time: "Saturday",
    message: "Did you catch the game last night? It was intense!",
  },
  {
    id: 5,
    name: "Sophie Davis",
    time: "Sunday",
    message: "Let's plan a picnic next weekend. What do you think?",
  },
  {
    id: 6,
    name: "Alex Turner",
    time: "Monday",
    message: "Hey, long time no see! How have you been?",
  },
  {
    id: 7,
    name: "Ethan Harris",
    time: "Friday",
    message: "Have you tried the new restaurant downtown? It's fantastic!",
  },
  // Add more objects for additional chat bubbles
];

const AllChats = [];

let activeconvo = 0;

let conversationData = [];
function createProfileIfNotExists(chat_id) {
  if (!AllChats.some((profile) => profile.chat_id === chat_id)) {
    AllChats.push({ chat_id, conversationDatas: [] });
  }
}

function updateActiveUser(id) {
  active = id;
  createProfileIfNotExists(active);
  const activeProfile = AllChats.find((profile) => profile.chat_id === active);
  const activeuser = chatData.find(
    (profile) => String(profile.id) === String(active)
  );
  conversationData = activeProfile.conversationDatas;
  document.getElementById("usersname").innerHTML = activeuser.name;
  renderConversation();
  console.log(active);
}

// Sample conversation data in JSON format

function formatDateTime(date) {
  const options = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

// Function to create HTML for each message
function createMessageHTML(message) {
  let messageHTML = "";

  if (message.type === "invite") {
    messageHTML += `
            <div class="${
              message.sender === "sent"
                ? "completemessagesent"
                : "completemessagerec"
            }">
            <div class="${
              message.sender === "sent" ? "messagesent" : "messagerec"
            } invite">
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
                                                <img src="${
                                                  message.imageSrc
                                                }" alt="">
                                            </div>
                                        </div>
                                        <div class="roomname">
                                            <div class="col">
                                                <div class="rname">${
                                                  message.roomName
                                                }</div>
                                                <div>
                                                    <small class="smalls">${
                                                      message.message
                                                    }</small>
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
  } else if (message.type === "image") {
    messageHTML += `
            <div class="${
              message.sender === "sent"
                ? "completemessagesent"
                : "completemessagerec"
            }">
            <div class="${
              message.sender === "sent" ? "messagesent" : "messagerec"
            } imgmsg">
                                <div class="edgecontrol">
                                 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="${
                                  message.sender === "sent"
                                    ? "M18.5039 3.6641C20.1503 2.56645 19.3733 3.61246e-06 17.3944 3.52596e-06L2.60673e-06 -9.53989e-08L1.90735e-06 16L18.5039 3.6641Z"
                                    : "M1.49615 3.6641C-0.150327 2.56645 0.626734 3.61246e-06 2.60555 3.52596e-06L20 -9.53989e-08L20 16L1.49615 3.6641Z"
                                }" fill="${
      message.sender === "sent" ? "var(--greenbar)" : "var(--greybar)"
    }"/>
                            </svg>


                                    
                                </div>
                                <div class="chatbubble">
                                    <div class="chatimg">
                                        <img src="${
                                          message.imageUrl
                                        }" alt="" loading="lazy">
                                    </div>
                                    ${message?.message ? message?.message : ""} 
                                    <div class="smallspan"> ${formatDateTime(
                                      message.datetime
                                    )}  
                                    <ion-icon name="checkmark-done-outline"></ion-icon>  </div>
                                </div>
                            </div>
                            <div class="messageopt"  onclick="replyto(${
                              message.id
                            })">
                            <span class="material-symbols-outlined">
                                reply
                                </span>
                        </div>
                            </div>
                            `;
  } else if (message.type === "text") {
    messageHTML += `
            <div class="${
              message.sender === "sent"
                ? "completemessagesent"
                : "completemessagerec"
            }">
            <div class="${
              message.sender === "sent" ? "messagesent" : "messagerec"
            }" id="${message?.id ? message?.id : ""}">
                                <div class="edgecontrol">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="${
                                  message.sender === "sent"
                                    ? "M18.5039 3.6641C20.1503 2.56645 19.3733 3.61246e-06 17.3944 3.52596e-06L2.60673e-06 -9.53989e-08L1.90735e-06 16L18.5039 3.6641Z"
                                    : "M1.49615 3.6641C-0.150327 2.56645 0.626734 3.61246e-06 2.60555 3.52596e-06L20 -9.53989e-08L20 16L1.49615 3.6641Z"
                                }" fill="${
      message.sender === "sent" ? "var(--greenbar)" : "var(--greybar)"
    }"/>
                            </svg>
                                </div>
                                <div class="chatbubble">${message.message}
                                <div class="smallspan"> ${formatDateTime(
                                  message.datetime
                                )}  
                                <ion-icon name="checkmark-done-outline"></ion-icon>  </div>
                                </div>
                            </div>
                            <div class="messageopt" onclick="replyto(${
                              message.id
                            })" >
                            <span class="material-symbols-outlined">
                                reply
                                </span>
                        </div>
                            </div>
                            `;
  } else if (message.type === "replytext") {
    console.log(conversationData);
    console.log(message.quotedid);
    const messquote = conversationData.find(
      (obj) => String(obj.id) === String(message.quotedid)
    );
    console.log("the message is ", messquote);
    messageHTML += `
            <div class="${
              message.sender === "sent"
                ? "completemessagesent"
                : "completemessagerec"
            }">
            
            <div class="${
              message.sender === "sent" ? "messagesent" : "messagerec"
            }" id=${message.id ? message.id : "#"}>
                                <div class="edgecontrol">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="${
                                  message.sender === "sent"
                                    ? "M18.5039 3.6641C20.1503 2.56645 19.3733 3.61246e-06 17.3944 3.52596e-06L2.60673e-06 -9.53989e-08L1.90735e-06 16L18.5039 3.6641Z"
                                    : "M1.49615 3.6641C-0.150327 2.56645 0.626734 3.61246e-06 2.60555 3.52596e-06L20 -9.53989e-08L20 16L1.49615 3.6641Z"
                                }" fill="${
      message.sender === "sent" ? "var(--greenbar)" : "var(--greybar)"
    }"/>
                            </svg>
                                </div>
                                <div class="chatbubble quotedpost">
                                <a class="quoted" href="${
                                  message.quotedid
                                    ? "#" + message.quotedid
                                    : "#"
                                }">
                                <div class="quotetext">
                                <div class="quotetitle uname">${
                                  messquote?.from
                                } </div>
                                <small class="small twolines">
                                ${messquote?.message}  
                             
                                </div>    
                                </small>
                               </a>
                             
                                ${message.message}
                                <div class="smallspan"> ${formatDateTime(
                                  message.datetime
                                )} 
                                <ion-icon name="checkmark-done-outline"></ion-icon>  </div>
                                </div>
                            </div>
                            <div class="messageopt"  onclick="replyto(${
                              message.id
                            })" >
                            <span class="material-symbols-outlined">
                                reply
                                </span>
                        </div>
                            </div>`;
  } else if (message.type === "replyimg") {
    console.log(conversationData);
    const messquote = conversationData.find(
      (obj) => String(obj.id) === String(message.quotedid)
    );
    console.log("the message is ", messquote);
    messageHTML += `
            <div class="${
              message.sender === "sent"
                ? "completemessagesent"
                : "completemessagerec"
            }">
            
            <div class="${
              message.sender === "sent" ? "messagesent" : "messagerec"
            }" id=${message.id ? message.id : "#"}>
                                <div class="edgecontrol">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="${
                                  message.sender === "sent"
                                    ? "M18.5039 3.6641C20.1503 2.56645 19.3733 3.61246e-06 17.3944 3.52596e-06L2.60673e-06 -9.53989e-08L1.90735e-06 16L18.5039 3.6641Z"
                                    : "M1.49615 3.6641C-0.150327 2.56645 0.626734 3.61246e-06 2.60555 3.52596e-06L20 -9.53989e-08L20 16L1.49615 3.6641Z"
                                }" fill="${
      message.sender === "sent" ? "var(--greenbar)" : "var(--greybar)"
    }"/>
                            </svg>
                                </div>
                                <div class="chatbubble quotedpost">



                                <a class="quoted" href="${
                                  message.quotedid
                                    ? "#" + message.quotedid
                                    : "#"
                                }">
                                <div class="quotetext">
                                <div class="quotetitle uname">${
                                  messquote?.from
                                } </div>
                                <small class="small twolines">
                                ${messquote?.message}  
                             
                                </div>    
                                </small>
                               </a>
                                      <div class="chatimg">
                                        <img src="${
                                          message.imageUrl
                                        }" alt="" loading="lazy">
                                    </div>
                                ${message.message}
                                <div class="smallspan"> ${formatDateTime(
                                  message.datetime
                                )} 
                                <ion-icon name="checkmark-done-outline"></ion-icon>  </div>
                                </div>
                            </div>
                            <div class="messageopt"  onclick="replyto(${
                              message.id
                            })" >
                            <span class="material-symbols-outlined">
                                reply
                                </span>
                        </div>
                            </div>`;
  }

  return messageHTML;
}
const cd = document.getElementById("chatData");
// Function to render the entire conversation

function replyto(id) {
  const qc = id;
  console.log(id);
  const quotecontainer = document.getElementById("qtd");

  if (id == "closequote") {
    quotecontainer.innerHTML = ` `;
  } else {
    document.getElementById("quotedid").value = id;
    let replydata = conversationData.find(
      (obj) => String(obj.id) === String(id)
    );
    quotecontainer.innerHTML = `
    <div class="quoted" id="${replydata?.id}" onclick="replyto('closequote')">
    <div class="quotetext" >
        <div class="quotetitle uname">${replydata?.sender} <div class="cancel" >x</div>
        </div>
        <small class="small twolines">
            ${replydata?.message}
    </div>
    </small>
    </div>
    `;
  }
}
function renderConversation() {
  const chatContainer = document.getElementById("chatContainer");
  chatContainer.innerHTML = "";
  conversationData.forEach((message) => {
    const messageHTML = createMessageHTML(message);
    chatContainer.innerHTML += messageHTML;
  });
  console.log("scrolltop plus client height", cd.scrollTop + cd.clientHeight);
  console.log("scroll height", cd.scrollHeight);

  if (cd.scrollHeight - (cd.scrollTop + cd.clientHeight) < 150) {
    // If close to the bottom, scroll to the bottom
    cd.scrollTop = cd.scrollHeight;
  }
}

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

function createconversation() {
  let message = document.getElementById("mymessage").value;
  let quotedids = document.getElementById("quotedid").value;
  var file = document.getElementById("myimg").files[0];

  if (message && file && !quotedids) {
    let data = {
      id: getRandomNumber(1, 990000),
      type: "image",
      sender: "sent",
      from: "victor",
      message: message,
      datetime: new Date(),
    };

    compressAndEncodeToBase64((file = file), (data = data));
  } else if (quotedids && message && file) {
    let data = {
      id: getRandomNumber(1, 990000),
      type: "replyimg",
      sender: "sent",
      from: "victor",
      quotedid: quotedids,
      message: message,
      datetime: new Date(),
    };
    compressAndEncodeToBase64((file = file), (data = data));
  } else if (quotedids && message && !file) {
    conversationData.push({
      id: getRandomNumber(1, 990000),
      type: "replytext",
      sender: "sent",
      from: "victor",
      quotedid: quotedids,
      message: message,
      datetime: new Date(),
    });
  } else if (message && !quotedids) {
    conversationData.push({
      id: getRandomNumber(1, 990000),
      type: "text",
      sender: "sent",
      from: "victor",
      message: message,
      datetime: new Date(),
    });
  } else {
    alert("message cannot be empty");
  }
  document.getElementById("mymessage").value = "";
  document.getElementById("quotedid").value = "";
  document.getElementById("qtd").innerHTML = "";

  renderConversation();
}

function displayFileSize(size, elementId) {
  var fileSizeDisplay = document.getElementById(elementId);
  var fileSizeFormatted = (size / 1024).toFixed(2) + " KB";
  fileSizeDisplay.textContent = "File Size: " + fileSizeFormatted;
}

async function compressAndEncodeToBase64(file, data) {
  console.log(data);
  var quality = 60;
  var output_format = "jpg";

  var reader = new FileReader();

  reader.onload = function () {
    var img = new Image();
    img.src = reader.result;

    img.onload = function () {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;

      // Check if the image has transparency
      var hasTransparency = false;
      ctx.drawImage(img, 0, 0);
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < imageData.data.length; i += 4) {
        if (imageData.data[i + 3] < 255) {
          // Check alpha value
          hasTransparency = true;
          break;
        }
      }

      // If image has transparency, draw it onto a white background before converting to JPEG
      if (hasTransparency) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        ctx.fillStyle = "#FFFFFF"; // Set background color to white
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill canvas with white
      }

      // Draw image onto canvas
      ctx.drawImage(img, 0, 0);

      // Convert canvas to JPEG
      canvas.toBlob(
        function (blob) {
          var readerBlob = new FileReader();
          readerBlob.readAsDataURL(blob);
          readerBlob.onloadend = function () {
            var base64Result = URL.createObjectURL(blob);
            // var target_img = document.getElementById("target_img");
            // target_img.src = base64Result;
            // displayFileSize(blob.size, "compressed_file_size");
            console.log("Compressed file size:", blob.size);
            data.imageUrl = base64Result;
            conversationData.push(data);
            document.getElementById("myimg").value = "";
            renderConversation();
          };
        },
        "image/jpeg",
        quality / 100
      );
    };
  };

  reader.onerror = function (error) {
    console.error("Error:", error);
  };

  reader.readAsDataURL(file);
}

function lloading() {
  const lload = (document.getElementById("cz").innerHTML = `
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

  `);
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
                    <small class="small twolines">${data.message}</small>
                </div>
            </div>
        </div>`;
}

// Generate HTML for all chat bubbles
const chatHTML = chatData.map(generateChatBubble).join("");

// Append generated HTML to a container (assuming you have a container with id "chatContainer")
document.getElementById("allchat").innerHTML = chatHTML;

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const mySwiperContainer = document.querySelector(".mySwiper-container"); // added this line
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

const storiesData = [
  {
    name: "storyone",
    stories: [
      "https://plus.unsplash.com/premium_photo-1677215211005-0305cb45e09f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1653669486781-7265d7824b44?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1653669486980-7891ab4b261e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    name: "storytwo",
    stories: [
      "https://placekitten.com/602/400",
      "https://placekitten.com/603/400",
      "https://placekitten.com/604/400",
    ],
  },
  {
    name: "storythree",
    stories: [
      "https://placekitten.com/605/400",
      "https://placekitten.com/606/400",
      "https://placekitten.com/607/400",
    ],
  },
];

// Handle story clicks
const storyButtons = document.querySelectorAll(".stories div");
storyButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Get the ID of the clicked story
    const storyId = button.id;

    // Find the corresponding story in the data
    const selectedStory = storiesData.find((story) => story.name === storyId);

    if (selectedStory) {
      // Clear existing slides
      swiper.removeAllSlides();

      // Add slides for the selected story
      selectedStory.stories.forEach((image) => {
        swiper.appendSlide(
          `<div class="swiper-slide"><img src="${image}" alt="${storyId}"></div>`
        );
      });

      // Go to the first slide and start autoplay
      swiper.slideTo(0);
      swiper.autoplay.start();

      // Show mySwiper container
      mySwiperContainer.style.display = "block";
    }
  });
});

// Stop autoplay when reaching the last slide
swiper.on("slideChange", () => {
  if (swiper.isEnd) {
    swiper.autoplay.stop();
    // Hide mySwiper container when reaching the last slide
    mySwiperContainer.style.display = "none";
  }
});

function myswitch() {
  // Get references to the elements
  switchicon = document.getElementById("switch");
  sidebar = document.getElementById("sidebar");
  chatsection = document.getElementById("chatscreen");

  // Toggle the display property
  if (sidebar.style.display === "none") {
    // If sidebar is hidden, show it and hide chat screen
    sidebar.style.display = "flex";
    chatsection.style.display = "none";
    adjustChatDataHeight();
  } else {
    // If sidebar is visible, hide it and show chat screen
    sidebar.style.display = "none";
    chatsection.style.display = "flex";
    adjustChatDataHeight();
  }
}

function searchshow() {
  switchicon = document.getElementById("switch");
  sidebar = document.getElementById("sidebar");

  console.log("kekekek");
  const searchbtn = document.getElementById("srch");
  const overlay = document.getElementById("overlay");
  const seachbox = document.getElementById("search");

  // Toggle the 'show' class on overlay and overlaydata
  overlay.classList.toggle("show");
  seachbox.classList.toggle("searchshow");
}

function updateContainerHeight() {
  // var container = document.querySelector(".container");
  // container.style.height = window.innerHeight + "px";
  // adjustChatDataHeight();
}

// Initial height calculation
updateContainerHeight();

// Update height on window resize
window.addEventListener("resize", updateContainerHeight);

function toggleFullscreen() {
  if (
    !document.fullscreenElement && // alternative standard method
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
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
