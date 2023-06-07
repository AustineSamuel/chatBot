const robot='Net20 robot'
const random = (min, max) => Math.random() * (max - min + 1) + min | 0

const qr= (name) => document.querySelector(name)

let i=0
let responseNotFound=0;
const scroll=()=>{
    
  $("body,html").animate({scrollTop: document.querySelector("#messagesList").scrollHeight},700);
  
}


const userMessage = (msg) => {
  
  $("#messagesList").append(`
   <div id="mymsg" class="flexEnd">
      <div id="max-width:80%">
      <div id="message">
        ${ msg }
        </div>
        <img id="msgImage${ i }" src="images/download.png" hidden>
      </div>
     </div>
  `)
  setTimeout(()=>{
   $("#mymsg img").fadeOut(200)
   
   setTimeout(()=>{
     $("#mymsg #msgImage"+i).fadeIn(100);
     i++
   },100);
     scroll()
  
   
  },random(1100,300))
}

function sendBackMsg( msg ){
  $("#messagesList").append(`
  <div id="herMsg" class="flexStart">
  <div id="max-width:80%">
    <div id="message">
      
      ${msg.message }
      
    </div>
  </div>
</div>

  `);
  
  setTimeout(()=>{
  scroll()
  },500);
  
}



qr("#sendMsg").addEventListener("click",()=>{
  
const  msg=qr("input").value;
let  respond=Al.findRespond(msg);
/*
if(respond.nameNext && respond.length<=0){
respond=Al.findRespond('my name is '+msg)
}
*/

if(respond.length<1){
  responseNotFound++
  respond.push({
        message : "I don't get you !!"
     ,
     type:'lost'
  })
  
}

userMessage(msg);

qr("input").value=""
setTimeout(()=>{
  
respond.map((e)=>{
  if(e===undefined)return ''
  
  sendBackMsg(e)
  })
 },1300);
});
