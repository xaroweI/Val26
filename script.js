// ============================================
// CUSTOMIZE HERE!
// ============================================

const HER_NAME = "Nigga";

const N1 = "Gay_Femboy";
const N2 = "Big_dick_randy";
const N3 = "3abdallah";
const N4 = "Sahli";
const N5 = "Nigga";
const YOU = "sassi";

const BASE_MESSAGE_DELAY = 800;
const BASE_TYPING_DURATION = 1600;
let speedMultiplier = 1;
let MESSAGE_DELAY = BASE_MESSAGE_DELAY;
let TYPING_DURATION = BASE_TYPING_DURATION;

const AVATARS = {
    [N1]: "https://media.tenor.com/Po22L82B0PoAAAAM/dissapointed-dog-bruh.gif",
    [N2]: "https://i.pinimg.com/564x/98/2d/4b/982d4b383ed2cd2a6a965f3c00e95f90.jpg",
    [N3]: "https://media.tenor.com/1W-HKNvj8UoAAAAM/cat.gif",
    [N4]: "https://en.meming.world/images/en/thumb/4/46/Staring_Avatar_Guy.jpg/300px-Staring_Avatar_Guy.jpg",
    [N5]: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKg2AqECMN7Ql-34XNdq1caKl27TSzbHh-A&s",
    [YOU]: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwoCuvjtiZtk9oyH4N9FNO0Gd-7ni2BtStw&s"
};

const CONVERSATION = [
    {type:"message",sender:N2,text:"yo guys i fucked up"},
    {type:"message",sender:N3,text:"what did you do this time"},
    {type:"message",sender:N2,text:"so i was watching this video right"},
    {type:"message",sender:N1,text:"oh god here we go"},
    {type:"message",sender:N2,text:"and they said butter makes everything slide better"},
    {type:"choice",options:[
        {text:"where is this going 💀",reactions:[{sender:N4,emoji:"💀"},{sender:N3,text:"LMAOOO"}]},
        {text:"randy please no",reactions:[{sender:N1,emoji:"😂"},{sender:YOU,emoji:"💀"}]},
        {text:"i already regret being here",reactions:[{sender:N1,emoji:"😂"},{sender:N4,emoji:"😂"},{sender:N3,emoji:"😂"},{sender:YOU,text:"one of us already"}]},
        {text:"tell me everything",reactions:[{sender:N4,emoji:"😈"},{sender:N3,text:"you asked for it"}]}
    ]},
    {type:"message",sender:N2,text:"so i got a mini M&Ms tube"},
    {type:"message",sender:N2,text:"and filled it with butter"},
    {type:"message",sender:N4,text:"NO"},
    {type:"message",sender:N2,text:"heated it up so it was warm"},
    {type:"message",sender:N1,text:"RANDY STOP"},
    {type:"message",sender:N2,text:"and i put my dick in it"},
    {type:"message",sender:N3,text:"BRO"},
    {type:"choice",options:[
        {text:"did it work though",reactions:[{sender:N2,emoji:"😭"},{sender:N4,text:"SHE ASKING THE REAL QUESTIONS"}]},
        {text:"WHAT IS WRONG WITH YOU",reactions:[{sender:N1,emoji:"❤️"},{sender:N3,text:"valid reaction"}]},
        {text:"i'm calling the police",reactions:[{sender:YOU,emoji:"😂"},{sender:N1,emoji:"🚨"},{sender:N4,text:"LMFAOOOO"}]},
        {text:"and then what happened",reactions:[{sender:N2,emoji:"💀"},{sender:N3,text:"oh you wanna know"}]}
    ]},
    {type:"message",sender:N2,text:"the butter got cold bro"},
    {type:"message",sender:N2,text:"it solidified"},
    {type:"message",sender:N2,text:"my dick was STUCK"},
    {type:"message",sender:N1,text:"I'M CRYING 😭😭😭"},
    {type:"message",sender:N4,text:"HOW DO YOU GET UNSTUCK FROM THAT"},
    {type:"message",sender:N2,text:"my mom had to help me"},
    {type:"message",sender:N3,text:"YOUR MOM???????"},
    {type:"message",sender:N2,text:"she used a hair dryer"},
    {type:"message",sender:YOU,text:"this is the worst thing i've ever heard"},
    {type:"message",sender:N1,text:"i can't breathe"},
    {type:"message",sender:N4,text:"bro you need therapy"},
    {type:"choice",options:[
        {text:"your poor mother",reactions:[{sender:N3,emoji:"😂"},{sender:N2,text:"she's traumatized"}]},
        {text:"this explains so much about you",reactions:[{sender:N4,emoji:"💀"},{sender:N1,text:"FR THO"}]},
        {text:"why did you tell us this",reactions:[{sender:YOU,emoji:"😭"},{sender:N2,text:"needed to get it off my chest"}]},
        {text:"respect for the honesty i guess",reactions:[{sender:N2,emoji:"❤️"},{sender:N1,text:"at least someone appreciates me"}]}
    ]},
    {type:"message",sender:N3,text:"anyway"},
    {type:"message",sender:N3,text:"valentine's day is literally tomorrow"},
    {type:"message",sender:N1,text:"oh shit yeah"},
    {type:"message",sender:N4,text:"i'm gonna be so lonely 😭"},
    {type:"message",sender:N2,text:"i got my M&Ms tube"},
    {type:"message",sender:YOU,text:"BRO STOP"},
    {type:"choice",options:[
        {text:"same honestly",reactions:[{sender:N4,emoji:"🥲"}]},
        {text:"valentine's day is a scam anyway",reactions:[{sender:N2,emoji:"👍"}]},
        {text:"idk probably nothing",reactions:[{sender:YOU,emoji:"😅"}]},
        {text:"why are we talking about this",reactions:[{sender:N4,emoji:"💀"}]}
    ]},
    {type:"message",sender:N3,text:"what about you sassi"},
    {type:"message",sender:YOU,text:"well actually..."},
    {type:"message",sender:N1,text:"OH?"},
    {type:"message",sender:YOU,text:"there's this girl"},
    {type:"message",sender:N2,text:"OHHHHHHHH"},
    {type:"message",sender:YOU,text:"she's actually insane"},
    {type:"message",sender:YOU,text:"in the best way possible"},
    {type:"message",sender:YOU,text:"like she would eat rocks if they weren't so hard"},
    {type:"message",sender:N2,text:"WHAT 💀"},
    {type:"choice",options:[
        {text:"she sounds cool actually",reactions:[{sender:YOU,emoji:"❤️"}]},
        {text:"tell us more",reactions:[{sender:YOU,emoji:"🥺"}]},
        {text:"this is already weird",reactions:[{sender:YOU,emoji:"😅"}]},
        {text:"eating rocks is where we draw the line?",reactions:[{sender:N2,emoji:"😂"}]}
    ]},
    {type:"message",sender:YOU,text:"she's not the romantic type at all"},
    {type:"message",sender:YOU,text:"but that's what i love about her"},
    {type:"message",sender:YOU,text:"she's completely real"},
    {type:"message",sender:YOU,text:"every weird thing she does makes me love her more"},
    {type:"choice",options:[
        {text:"this is actually really sweet",reactions:[{sender:YOU,emoji:"😊"}]},
        {text:"bro you're down BAD",reactions:[{sender:N2,emoji:"😂"}]},
        {text:"shoot your shot then",reactions:[{sender:N1,emoji:"👍"}]},
        {text:"does she know you exist",reactions:[{sender:YOU,emoji:"😂"},{sender:N3,emoji:"💀"}]}
    ]},
    {type:"message",sender:N2,text:"BRO YOU GOTTA TELL HER"},
    {type:"message",sender:YOU,text:"i have no idea how though"},
    {type:"message",sender:N4,text:"do something creative"},
    {type:"message",sender:N1,text:"yeah like handmade"},
    {type:"choice",options:[
        {text:"what would you even make",reactions:[{sender:YOU,emoji:"🤔"}]},
        {text:"make her a playlist",reactions:[{sender:N4,emoji:"🎵"}]},
        {text:"just be honest with her",reactions:[{sender:N3,emoji:"👍"}]},
        {text:"idk surprise her somehow",reactions:[{sender:YOU,emoji:"😅"}]}
    ]},
    {type:"message",sender:YOU,text:"wait i could make something digital"},
    {type:"message",sender:YOU,text:"idk i can code"},
    {type:"message",sender:N1,text:"make her a game"},
    {type:"message",sender:N4,text:"dating sim 💀"},
    {type:"message",sender:YOU,text:"BRO NO"},
    {type:"choice",options:[
        {text:"what about just a website",reactions:[{sender:YOU,emoji:"🤔"}]},
        {text:"or like an interactive story",reactions:[{sender:N1,emoji:"📖"}]},
        {text:"dating sim is unhinged",reactions:[{sender:N4,emoji:"😂"}]},
        {text:"actually a game could be cute",reactions:[{sender:N1,emoji:"🎮"}]}
    ]},
    {type:"message",sender:YOU,text:"a website could work"},
    {type:"message",sender:N2,text:"make it funny so it's not cringe"},
    {type:"choice",options:[
        {text:"inside jokes would be good",reactions:[{sender:YOU,emoji:"❤️"}]},
        {text:"make her laugh first then confess",reactions:[{sender:N1,emoji:"😂"}]},
        {text:"keep it simple and sweet",reactions:[{sender:N4,emoji:"👍"}]},
        {text:"make it about memories together",reactions:[{sender:N3,emoji:"🥺"}]}
    ]},
    {type:"message",sender:YOU,text:"okay but like format wise"},
    {type:"message",sender:YOU,text:"what would the website actually be"},
    {type:"choice",options:[
        {text:"make it interactive",reactions:[{sender:YOU,emoji:"🤔"}]},
        {text:"something she can click through",reactions:[{sender:N1,emoji:"👍"}]},
        {text:"video message?",reactions:[{sender:N2,emoji:"📹"},{sender:YOU,text:"too awkward"}]},
        {text:"honestly idk bro",reactions:[{sender:YOU,emoji:"😂"}]}
    ]},
    {type:"message",sender:YOU,text:"what if"},
    {type:"message",sender:YOU,text:"i made like a website"},
    {type:"message",sender:YOU,text:"with a groupchat thing"},
    {type:"message",sender:YOU,text:"like instagram DM style"},
    {type:"message",sender:N3,text:"a fake groupchat?"},
    {type:"choice",options:[
        {text:"talking about her?",reactions:[{sender:YOU,emoji:"😊"}]},
        {text:"planning the confession?",reactions:[{sender:N4,emoji:"🤯"}]},
        {text:"talking about random stuff?",reactions:[{sender:N2,emoji:"🤔"}]},
        {text:"i'm not following",reactions:[{sender:YOU,emoji:"😅"}]}
    ]},
    {type:"message",sender:YOU,text:"like we're all in a groupchat"},
    {type:"message",sender:N2,text:"M&M story included?"},
    {type:"message",sender:YOU,text:"unfortunately yes"},
    {type:"message",sender:N1,text:"wait but who else would be in this fake groupchat"},
    {type:"choice",options:[
        {text:"would she be in it?",reactions:[{sender:YOU,emoji:"😳"}]},
        {text:"just you guys probably",reactions:[{sender:N3,emoji:"👍"}]},
        {text:"keep it small",reactions:[{sender:N1,emoji:"✅"}]},
        {text:"add whoever",reactions:[{sender:YOU,emoji:"😅"}]}
    ]},
    {type:"message",sender:YOU,text:"what if she was IN the groupchat"},
    {type:"message",sender:YOU,text:"helping plan the confession"},
    {type:"message",sender:YOU,text:"without knowing it's about her"},
    {type:"message",sender:N3,text:"bro that's actually sick"},
    {type:"message",sender:N2,text:"inception type beat"},
    {type:"choice",options:[
        {text:"that's actually really creative",reactions:[{sender:YOU,emoji:"❤️"}]},
        {text:"would that even work though",reactions:[{sender:N1,emoji:"🤔"}]},
        {text:"confusing but i like it",reactions:[{sender:N2,emoji:"😂"}]},
        {text:"she might figure it out",reactions:[{sender:YOU,emoji:"😅"}]}
    ]},
    {type:"message",sender:N1,text:"okay so you make this groupchat website"},
    {type:"message",sender:YOU,text:"talking like we normally do"},
    {type:"message",sender:N2,text:"M&M story and all"},
    {type:"message",sender:YOU,text:"and then i reveal it's all for her"},
    {type:"message",sender:N3,text:"that's actually fire"},
    {type:"message",sender:N1,text:"what groupchat would you call it"},
    {type:"message",sender:N4,text:'"bzezel sahli" 💀'},
    {type:"message",sender:YOU,text:"LMAO that's perfect actually"},
    {type:"choice",options:[
        {text:"wait a minute",reactions:[{sender:YOU,emoji:"😳"}]},
        {text:"that's this groupchat's name",reactions:[{sender:N1,emoji:"😱"}]},
        {text:"hold on",reactions:[{sender:N2,emoji:"🤯"}]},
        {text:"...",reactions:[{sender:N1,emoji:"👀"},{sender:N4,emoji:"👀"}]}
    ]},
    {type:"message",sender:YOU,text:`hey ${HER_NAME}`},
    {type:"message",sender:N4,text:"oh boy"},
    {type:"message",sender:YOU,text:"you remember when i was talking about that girl"},
    {type:"message",sender:YOU,text:"the weird one"},
    {type:"message",sender:YOU,text:"who'd eat rocks if they weren't so hard"},
    {type:"message",sender:YOU,text:"and we were planning how to confess"},
    {type:"message",sender:YOU,text:"talking about making a groupchat website"},
    {type:"message",sender:YOU,text:"called bzezel sahli"},
    {type:"message",sender:YOU,text:"where she'd help us plan"},
    {type:"message",sender:YOU,text:"without knowing it was about her"},
    {type:"message",sender:YOU,text:HER_NAME},
    {type:"message",sender:YOU,text:"what if i told you"},
    {type:"message",sender:YOU,text:"you're already in it"},
    {type:"choice",options:[
        {text:"wait what",reactions:[{sender:YOU,emoji:"😊"}]},
        {text:"no way",reactions:[{sender:N1,emoji:"😂"}]},
        {text:"this is the website?",reactions:[{sender:YOU,emoji:"❤️"}]},
        {text:"are you serious",reactions:[{sender:YOU,emoji:"😂"},{sender:N4,emoji:"😂"}]}
    ]},
    {type:"message",sender:YOU,text:"this whole time"},
    {type:"message",sender:YOU,text:"you've been IN the confession"},
    {type:"message",sender:N4,text:"MIND = BLOWN"},
    {type:"message",sender:N3,text:"META AS FUCK"},
    {type:"message",sender:YOU,text:"every choice you made"},
    {type:"message",sender:YOU,text:"you were helping plan"},
    {type:"message",sender:YOU,text:"your own valentine's surprise"},
    {type:"message",sender:YOU,text:"all that stuff i said about that girl"},
    {type:"message",sender:YOU,text:"i was talking about you"},
    {type:"message",sender:N1,text:"🥺🥺🥺"},
    {type:"message",sender:YOU,text:"i love how weird you are"},
    {type:"message",sender:YOU,text:"i love everything about you"},
    {type:"message",sender:YOU,text:"even the rock-eating thing"},
    {type:"message",sender:N2,text:"💀"},
    {type:"choice",options:[
        {text:"this is the most insane thing anyone's done",reactions:[{sender:YOU,emoji:"😅"}]},
        {text:"i can't believe i didn't realize",reactions:[{sender:N1,emoji:"😂"}]},
        {text:"you're actually crazy",reactions:[{sender:YOU,emoji:"❤️"}]},
        {text:"i don't even know what to say",reactions:[{sender:N2,emoji:"🥺"}]}
    ]},
    {type:"message",sender:YOU,text:"so"},
    {type:"message",sender:YOU,text:HER_NAME},
    {type:"message",sender:YOU,text:"no pressure"},
    {type:"message",sender:YOU,text:"will you be my valentine? ❤️"},
    {type:"message",sender:N1,text:"DO IT DO IT DO IT"},
    {type:"message",sender:N4,text:"SAY YES"},
    {type:"message",sender:N3,text:"COME ON"},
    {type:"final_question"}
];

let currentIndex=0,messageTimeout,waitingForChoice=!1,currentHoveredMessage=null,playerName=N5;
const lockScreen=document.getElementById("lockScreen"),instagramScreen=document.getElementById("instagramScreen"),chatMessages=document.getElementById("chatMessages"),choiceContainer=document.getElementById("choiceContainer"),choicesButtons=document.getElementById("choicesButtons"),emojiPopup=document.getElementById("emojiPopup"),headerIcon=document.getElementById("headerIcon"),notificationsContainer=document.getElementById("notificationsContainer"),finalModal=document.getElementById("finalModal"),finalYesBtn=document.getElementById("finalYesBtn"),finalNoBtn=document.getElementById("finalNoBtn"),secondChanceModal=document.getElementById("secondChanceModal"),secondYesBtn=document.getElementById("secondYesBtn"),secondNoBtn=document.getElementById("secondNoBtn"),speedBtn=document.getElementById("speedBtn");

function init(){setupEventListeners(),showNotifications()}

function setupEventListeners(){lockScreen.addEventListener("click",unlockPhone),setupEmojiReactions(),finalYesBtn.addEventListener("click",()=>handleFinalAnswer(!0)),finalNoBtn.addEventListener("click",()=>showSecondChance()),secondYesBtn.addEventListener("click",()=>handleFinalAnswer(!0)),secondNoBtn.addEventListener("click",()=>handleFinalAnswer(!1)),speedBtn.addEventListener("click",toggleSpeed)}

function toggleSpeed(){if(speedMultiplier===1){speedMultiplier=5;MESSAGE_DELAY=BASE_MESSAGE_DELAY/5;TYPING_DURATION=BASE_TYPING_DURATION/5;speedBtn.textContent="x5";speedBtn.classList.add("active")}else{speedMultiplier=1;MESSAGE_DELAY=BASE_MESSAGE_DELAY;TYPING_DURATION=BASE_TYPING_DURATION;speedBtn.textContent="x1";speedBtn.classList.remove("active")}}

function showNotifications(){const e=document.createElement("div");e.className="notification",e.innerHTML='<div class="notif-header"><div class="notif-icon" style="background: #ff9000; display: flex; align-items: center; justify-content: center; font-size: 24px;">🎥</div><div class="notif-info"><div class="notif-title">Pornhub</div><div class="notif-preview">Thanks for your $1,000,000 donation to gatouz!</div></div><span class="notif-time">now</span></div>';const t=document.createElement("div");t.className="notification",t.innerHTML=`<div class="notif-header"><img src="group-pic.jpg" alt="Group" class="notif-icon" onerror="this.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 100%)'; this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2748%27 height=%2748%27%3E%3Crect fill=%27%23667eea%27 width=%2748%27 height=%2748%27/%3E%3C/svg%3E';"><div class="notif-info"><div class="notif-title">bzezel sahli</div><div class="notif-preview">${N1} added you</div></div><span class="notif-time">now</span></div>`,notificationsContainer.appendChild(e),notificationsContainer.appendChild(t),setTimeout(unlockPhone,4e3)}

function unlockPhone(){lockScreen.classList.contains("unlocking")||(lockScreen.classList.add("unlocking"),setTimeout(()=>{lockScreen.style.display="none",instagramScreen.classList.add("active"),headerIcon.src="group-pic.jpg",headerIcon.onerror=()=>{headerIcon.style.background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},setTimeout(processNext,1800)},600))}

function processNext(){if(currentIndex>=CONVERSATION.length)return;const e=CONVERSATION[currentIndex];"message"===e.type?(showTypingIndicator(e.sender),setTimeout(()=>{hideTypingIndicator(),addMessage(e.sender,e.text),currentIndex++,waitingForChoice||(messageTimeout=setTimeout(processNext,MESSAGE_DELAY))},TYPING_DURATION)):"choice"===e.type?(waitingForChoice=!0,showChoices(e.options)):"final_question"===e.type&&showFinalQuestion()}

function showTypingIndicator(e){const t=document.createElement("div");t.className="message-wrapper typing-wrapper",t.innerHTML=`<img src="${AVATARS[e]}" alt="${e}" class="message-avatar"><div class="message-content"><div class="message-bubble typing"><div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div></div>`,chatMessages.appendChild(t),scrollToBottom()}

function hideTypingIndicator(){const e=chatMessages.querySelector(".typing-wrapper");e&&e.remove()}

function addMessage(e,t,n=!1){const s=chatMessages.querySelector(".message-wrapper:last-child:not(.typing-wrapper)"),i=s?s.getAttribute("data-sender"):null,a=e!==i,o=document.createElement("div");o.className="message-wrapper",o.setAttribute("data-sender",e),o.innerHTML=`<img src="${AVATARS[e]||AVATARS[N1]}" alt="${e}" class="message-avatar ${a?"":"invisible"}"><div class="message-content">${a?`<div class="message-sender">${e}</div>`:""}<div class="message-bubble">${escapeHtml(t)}</div></div>`,chatMessages.appendChild(o),scrollToBottom(),n||(setupMessageHover(o.querySelector(".message-bubble"),o))}

function showChoices(e){choicesButtons.innerHTML="",e.forEach(e=>{const t=document.createElement("button");t.className="choice-btn",t.textContent=e.text,t.onclick=()=>handleChoice(e),choicesButtons.appendChild(t)}),choiceContainer.classList.add("active"),chatMessages.classList.add("with-choices"),scrollToBottom()}

function handleChoice(e){addMessage(playerName,e.text,!0),choiceContainer.classList.remove("active"),chatMessages.classList.remove("with-choices"),e.reactions.forEach((e,t)=>{setTimeout(()=>{e.emoji?addReactionToLastPlayerMessage(e.emoji):e.text&&(showTypingIndicator(e.sender),setTimeout(()=>{hideTypingIndicator(),addMessage(e.sender,e.text)},TYPING_DURATION))},t*MESSAGE_DELAY)});const t=e.reactions.length*MESSAGE_DELAY+TYPING_DURATION;setTimeout(()=>{waitingForChoice=!1,currentIndex++,processNext()},t+MESSAGE_DELAY)}

function addReactionToLastPlayerMessage(e){const t=Array.from(chatMessages.querySelectorAll(`[data-sender="${playerName}"]`)),n=t[t.length-1];if(n){const t=n.querySelector(".message-bubble"),s=document.createElement("div");s.className="message-reaction",s.textContent=e,t.appendChild(s)}}

function setupEmojiReactions(){document.querySelectorAll(".emoji-btn").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation();const n=e.getAttribute("data-emoji");addReactionToMessage(n),hideEmojiPopup()})}),document.addEventListener("click",e=>{emojiPopup.contains(e.target)||e.target.classList.contains("message-bubble")||hideEmojiPopup()})}

function setupMessageHover(e,t){let n,s=!1;e.addEventListener("touchstart",e=>{s=!0,n=setTimeout(()=>{s&&(e.preventDefault(),showEmojiPopup(e.touches[0],t))},500)}),e.addEventListener("touchend",()=>{s=!1,clearTimeout(n)}),e.addEventListener("touchmove",()=>{s=!1,clearTimeout(n)}),e.addEventListener("mouseenter",e=>{n=setTimeout(()=>{showEmojiPopup(e,t)},500)}),e.addEventListener("mouseleave",()=>{clearTimeout(n)})}

function showEmojiPopup(e,t){currentHoveredMessage=t,emojiPopup.classList.add("active");const n=t.getBoundingClientRect();let s=n.left+n.width/2-150,i=n.top-70;s<10&&(s=10),s+300>window.innerWidth-10&&(s=window.innerWidth-310),i<10&&(i=n.bottom+10),emojiPopup.style.left=`${s}px`,emojiPopup.style.top=`${i}px`}

function hideEmojiPopup(){emojiPopup.classList.remove("active")}

function addReactionToMessage(e){if(!currentHoveredMessage)return;const t=currentHoveredMessage.querySelector(".message-reaction");t&&t.remove();const n=currentHoveredMessage.querySelector(".message-bubble"),s=document.createElement("div");s.className="message-reaction",s.textContent=e,n.appendChild(s),currentHoveredMessage=null}

function showFinalQuestion(){finalModal.classList.add("active")}

function showSecondChance(){finalModal.classList.remove("active"),setTimeout(()=>{secondChanceModal.classList.add("active")},300)}

function handleFinalAnswer(e){finalModal.classList.remove("active"),secondChanceModal.classList.remove("active"),setTimeout(()=>{e?showYesEnding():showNoEnding()},500)}

function showYesEnding(){const e=[{sender:YOU,text:"YOOOOOOOOOO"},{sender:N4,text:"LETS FUCKING GOOOOOOO"},{sender:YOU,text:"i can't believe this actually worked"},{sender:YOU,text:`thank you ${HER_NAME}`},{sender:YOU,text:"you just made me the happiest guy alive"},{sender:YOU,text:"happy valentine's day ❤️"},{sender:YOU,text:"best valentine's day ever"}];let t=0;!function n(){if(t>=e.length)return void createConfetti();const s=e[t];showTypingIndicator(s.sender),setTimeout(()=>{hideTypingIndicator(),addMessage(s.sender,s.text),t++,setTimeout(n,MESSAGE_DELAY)},TYPING_DURATION)}()}

function showNoEnding(){const e=[{sender:YOU,text:"oh"},{sender:N1,text:"..."},{sender:N4,text:"..."},{sender:N3,text:"..."},{sender:N2,text:"F in the chat"},{sender:YOU,text:"no yeah that's"},{sender:YOU,text:"that's totally cool"},{sender:N1,text:"bro you good?"},{sender:YOU,text:"yeah i'm good"},{sender:YOU,text:"at least i tried right"},{sender:N4,text:"you miss 100% of shots you don't take"},{sender:YOU,text:"happy valentine's day anyway"},{sender:YOU,text:"still friends? 🤝"}];let t=0;!function n(){if(t>=e.length)return;const s=e[t];showTypingIndicator(s.sender),setTimeout(()=>{hideTypingIndicator(),addMessage(s.sender,s.text),t++,setTimeout(n,MESSAGE_DELAY)},TYPING_DURATION)}()}

function createConfetti(){const e=["#ff6b6b","#ee5a6f","#f06595","#cc5de8","#845ef7","#5c7cfa","#339af0"];for(let t=0;t<100;t++)setTimeout(()=>{const t=document.createElement("div");t.className="confetti",t.style.left=Math.random()*window.innerWidth+"px",t.style.top="-10px",t.style.background=e[Math.floor(Math.random()*e.length)],t.style.width=Math.random()*10+5+"px",t.style.height=Math.random()*10+5+"px",t.style.borderRadius=Math.random()>.5?"50%":"0",document.body.appendChild(t),setTimeout(()=>t.remove(),3e3)},30*t)}

function scrollToBottom(){setTimeout(()=>{chatMessages.scrollTop=chatMessages.scrollHeight},100)}

function escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}

window.addEventListener("DOMContentLoaded",init);