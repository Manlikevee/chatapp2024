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



            function attachmenttoggle() {
                console.log('kekekek')
                const togglebtn = document.getElementById('attachmentbtn');
                const overlay = document.getElementById('overlay');
                const overlaydata = document.getElementById('attachmentdata');
            
                // Toggle the 'show' class on overlay and overlaydata
                overlay.classList.toggle('show');
                overlaydata.classList.toggle('show');
            }
            

            

    



    // Sample conversation data in JSON format
    const conversationData = [
        {
            type: "invite",
            sender: "sent",
            roomName: "Ishika’s Personal Room",
            message: "There are few minor changes that need.",
            imageSrc: "image 40.png"
        },
        {
            type: "image",
            sender: "rec",
            imageUrl: "https://images.unsplash.com/photo-1704883647012-c6f4d29fe360?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "type": "text",
            "sender": "sent",
            "message": "Hey there! Have you heard about how AI is changing the world?"
        },
        {
            "type": "text",
            "sender": "rec",
            "message": "Absolutely! AI is making significant impacts across various industries, from healthcare to finance."
        },
        {
            "type": "text",
            "sender": "sent",
            "message": "It's fascinating how AI is enhancing efficiency and bringing about innovative solutions. What specific areas interest you the most?"
        },
        {
            "type": "text",
            "sender": "rec",
            "message": "I'm particularly interested in AI applications in natural language processing and chatbots. The advancements in language understanding have been impressive."
        },
        {
            "type": "text",
            "sender": "sent",
            "message": "Absolutely! Chatbots are revolutionizing customer support and communication. They can provide instant assistance and improve user experiences. What do you think about the ethical considerations surrounding AI?"
        },
        {
            "type": "text",
            "sender": "rec",
            "message": "Ethical considerations are crucial. It's essential to ensure responsible AI development, addressing issues like bias and privacy concerns. Striking the right balance is key for the positive impact of AI on society."
        },
        {
            type: "image",
            sender: "rec",
            imageUrl: "https://i.pinimg.com/564x/71/0b/b0/710bb08e5b6f161b3e17028a012641a5.jpg",
            
            "message": "Beautifully generated Ai Images"
        },
        {
            type: "text",
            sender: "rec",
            message: "That Image image looks fascinating! AI is enabling creativity and innovation."
        },
        {
            type: "text",
            sender: "sent",
            message: "Absolutely! It's amazing to see how AI is transforming various aspects of our lives."
        },
        {
            "type": "image",
            "sender": "sent",
            "message": "I prefer this alot more, The beauty in so many colors.Very eye catching.( Joy )",
            imageUrl: "https://i.pinimg.com/564x/9f/8f/30/9f8f3075d1cb75d190240d242765142a.jpg",
        },
    ];
    
    // Function to create HTML for each message
    function createMessageHTML(message) {
        let messageHTML = '';

        if (message.type === 'invite') {
            messageHTML += `<div class="${message.sender === 'sent' ? 'messagesent' : 'messagerec'} invite">
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
                            </div>`;
        } else if (message.type === 'image') {
            messageHTML += `<div class="${message.sender === 'sent' ? 'messagesent' : 'messagerec'} imgmsg">
                                <div class="edgecontrol">
                                 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="${message.sender === 'sent' ? 'M18.5039 3.6641C20.1503 2.56645 19.3733 3.61246e-06 17.3944 3.52596e-06L2.60673e-06 -9.53989e-08L1.90735e-06 16L18.5039 3.6641Z' : 'M1.49615 3.6641C-0.150327 2.56645 0.626734 3.61246e-06 2.60555 3.52596e-06L20 -9.53989e-08L20 16L1.49615 3.6641Z'}" fill="${message.sender === 'sent' ? 'var(--greenbar)' : 'var(--greybar)'}"/>
                            </svg>


                                    
                                </div>
                                <div class="chatbubble">
                                    <div class="chatimg">
                                        <img src="${message.imageUrl}" alt="" loading="lazy">
                                    </div>
                                    ${message?.message  ? message?.message : ''} 
                                </div>
                            </div>`;
        } else if (message.type === 'text') {
            messageHTML += `<div class="${message.sender === 'sent' ? 'messagesent' : 'messagerec'}">
                                <div class="edgecontrol">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="${message.sender === 'sent' ? 'M18.5039 3.6641C20.1503 2.56645 19.3733 3.61246e-06 17.3944 3.52596e-06L2.60673e-06 -9.53989e-08L1.90735e-06 16L18.5039 3.6641Z' : 'M1.49615 3.6641C-0.150327 2.56645 0.626734 3.61246e-06 2.60555 3.52596e-06L20 -9.53989e-08L20 16L1.49615 3.6641Z'}" fill="${message.sender === 'sent' ? 'var(--greenbar)' : 'var(--greybar)'}"/>
                            </svg>
                                </div>
                                <div class="chatbubble">${message.message}</div>
                            </div>`;
        }

        return messageHTML;
    }

    // Function to render the entire conversation
    function renderConversation() {
        const chatContainer = document.getElementById('chatContainer');

        conversationData.forEach(message => {
            const messageHTML = createMessageHTML(message);
            chatContainer.innerHTML += messageHTML;
        });
    }

    // Call the function to render the conversation
    renderConversation();

