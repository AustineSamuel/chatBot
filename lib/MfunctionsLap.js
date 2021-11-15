"use strike";
 const sliceTextAnimation = (parentText,arr=[" "],userDur=1000,restartDur=2000)=>{
  dur=userDur;
arr.shift(parentText.html())
  let textDur=0;
  let textArr=0;
  let text=arr[textArr];
  //dur
  const animateF=() => {


    if(arr[textArr].slice(0,textDur).lastIndexOf(".")==arr[textArr].length-1){

      clearInterval(animate);
      //clearInterval(check);
      setTimeout(() => {
        textDur=0;
        dur=100
       animate=setInterval(animateF,dur);
        //check=setInterval(checkF,100);
        if(textArr >= arr.length -1 ){
        textArr= -1;
        text=arr[textArr];
        }
        textArr++;
        text=arr[textArr];
      },restartDur);
    }
    else{
    dur=Math.floor(Math.random()*userDur)+1;
    }

     if(textDur>=text.length +1){
      if(arr.length>0 && arr != undefined){
        text=arr[textArr];
        textDur=0;
         }
      textDur=0;
    }
    parentText.html(text.slice(0,textDur));
    textDur++;
  }
let animate=setInterval(animateF,dur);//end interval
    }


    
 const message=(text,dur=1000,fade=500)=>{
   if($==null ||$==undefined)return
  $("body").append(`
  <div style=" width:100%; display:none;z-index:9999; height:100px; display:flex; align-items:center; justify-content: center;position:fixed;bottom:0;"id="messageShow">
   <span style="padding:10px 15px; max-width:70%; color:white;background:rgba(32, 32, 32, 0.863);border-radius:30px; font-size:small;" id="messageText">
    ${text}</span>
</div>
  `);
  $("body #messageShow").fadeIn(fade);
  setTimeout(() => {
    $("body #messageShow").fadeOut(fade);
      setTimeout(() => {
      $("body #messageShow").remove();
        },fade+300);
  }, dur);

}

 const  getQr=(el)=>{
  return document.querySelector(el);
}
 const getId=(el)=>{
  return document.getElementById(el);
}
 const getExtn=(file,test=false)=>{
const  fileExtn=file.slice(file.lastIndexOf("."),file.length).toLowerCase();
if(test===false){
  return fileExtn;
}
else{
return test.includes(fileExtn);
}
}



 const clickImageViewer=(parentEL="body")=>{//jquery
let count=false;
if($==undefined||$==null)return

$("img").click(function(){
const src=$(this).attr("src").toString();
$(parentEL).prepend(`<div id="v112" style='
  width:100%; height:100%; position:fixed; 
  background:rgba(0,0,0,0.4);display:flex; 
  z-index:9999;
  align-items:center; justify-content:center;'><img src="${src}" style="width:90%; height:90%; border-radius:10px;">
  </div>
`);
$("#v112").click(function(){
  $(this).fadeOut(200);
setTimeout(() => {
  $("#v112").remove();
},500);
count=false;
  });
message("click screen to close Image")
});
}

 const download=(link)=>{
  let location=window.location.href.slice(0,window.location.href.lastIndexOf("/"));
  let path=location+"/"+link;
  let a=document.createElement("a");
  a.href=path;
  a.target="_blank";
  a.download=link;
  a.click();
  }

 const  warning=(heading="Wrong Command", content="you click a wrong button",button1="Cancel",button2="Ok",callBack=null,back=null)=>{
  $("body").append(` <div id="warning"
  style="overflow:auto;width:100%;height:100%;display:flex; position:fixed; justify-content:center; align-items:center; background:rgb(0,0,0,0.4);">
   <div style="height:auto; width:80%; padding:20px 20px; border-radius:10px;max-height:700px;background:rgb(20, 17, 31);margin:0 auto;box-shadow:1px 1px 10px 0px black;">
    <header style="text-align:center; color:rgb(255, 0,94); font-size:x-large;">${heading}</header>
    <div id="content" style="color:rgb(207, 202, 250); font-family:Verdana, Geneva, Tahoma, sans-serif;font-size:small;">${content}</div>
  <div style="display:flex; justify-content:space-around;padding:9px;"><button id="b1" style="width:100px; padding:5px; background:rgb(255, 0, 85);">${button1}</button><button  id="b2" style="width:100px; padding:5px; background:rgb(71, 21, 252);color:white !important">${button2}</button></div>
  </div></div>`);
  
  $("#b1").click(function(){
   // $("#b1").off("click");
    $("#warning").fadeOut(300);
   setTimeout(() => {
  document.querySelector("#warning").remove();
  back != null ? back() : "" ;
  },500);
  });
  
  $("#b2").click(function(){
  //   $("#b2").off("click");
    $("#warning").fadeOut(300);
   setTimeout(() =>{ 
  document.querySelector("#warning").remove();
  if(callBack!=null){
  callBack();
  }
  },500);
  });
  

}

 const href=(link,target="_blank")=>{
  if(link.lastIndexOf(".") > -1){
  let a=document.createElement("a");
  a.href=link;
  a.target=target;
  a.click();
   message("loading...",3000,300)
  }
  else{
    message("link fail")
  }
  }

   const imageReader=(input,imageSrc,callBack=null,bg=false,extn=[".jpg",".jpeg",".png"])=>{
    var file=input.val();
    file=file.slice(file.lastIndexOf("."),file.length).toLowerCase();
    if(extn.includes(file)){
    reader=new FileReader();
    reader.onload=(function(e){
   !bg ? imageSrc.attr("src",e.target.result) : imageSrc.css("background-image","url('"+e.target.result+"')");
 
   callBack != null ? callBack(e.target.result) : "" ;  
  });
    reader.readAsDataURL(input[0].files[0]);
    }//end if etn valid
    else{
      message("please use image with <b>.jpg .png .jpeg</b> extension",4000,300);
    }  
  }

   const replaceBrWithNL=(text)=>{
    let textArr=text.split("<br>");
      let newText="";
    textArr.forEach((e)=>{
      newText+=e+"\n";
    })
    return newText;
}

   const removeSpace=(text)=>{
    let textArr=text.split(" ");
    let newText="";
    textArr.forEach((e)=>{
   newText+=e;
    });
    return newText;
}


 const filterNumber=(text="",characters=["\n"," "])=>{
  let filtered="";
  let i;
  for(i=0;i<text.length;i++){
    let e=text[i];
    if(!characters.includes(e)){
      filtered+=""+e;
      }
    }
    return filtered;
  }
  
   const textToNameFormat=(text)=>{
     if(text===undefined || text===null)return
  const name=text.split(" ");
  var newName="";
  name.forEach((e)=>{
    newName+=" "+e.charAt(0).toUpperCase()+e.slice(1,e.length).toLowerCase();
  })
  return newName;
  }
  
  const filter=(text,chr="<br>")=>{
    text=text.split(chr);
    let filtered="";
    text.forEach((e)=>{
      filtered+=e;
    });
    return filtered;
  }

  const replaceAll=(text,text1,text2)=>{
    text=text.split(text1);
    let newText="";
    text.forEach((e)=>{
      newText+=e+text2;
    })
  }
  window.detectMob=() =>{
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
  const action=(elName,eventType,func)=>{
    getQr(elName).addEventListener(eventType,func);
  }
  const actionAll=(elName,eventType,func)=>{
  const el= document.querySelectorAll(elName);
  for(let i =0 ;i<el.length;i++){
    el[i].addEventListener(eventType,func);
  }
  }
  const setCss=(elName,property,value)=>{
  //getQr(elName).
  }
///this code will append font awesome to your code
const useIcons=()=>{
let link=document.createElement("link");
link.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
link.rel="stylesheet";
getQr("head").appendChild(link);
}
useIcons()///if you have fontAwesome link on your html already. you can comment this function

const takeInput=(placeholder="write here",callBack=null)=>{
  if(getQr("takeInputVal")!=null)return
  const div=document.createElement("div");
  div.style=`box-shadow:1px 1px 10px 0px grey; width:100%;background:white;position:fixed;
  bottom:0;`
  div.innerHTML=`<input id="takeInputVal" style="border-right:1px solid rgb(31, 37, 63); width:75%;padding:16px 5px;height:100%; background:rgb(242, 242, 247);" placeholder="${placeholder}">
  <button id="takeInputBtn" style="width:20%;height:100%;background:black;color:white; border-radius:4px;">Done</button>
  `
  getQr("body").appendChild(div);
  action("#takeInputBtn","click",()=>{
callBack(getQr("#takeInputVal").value);
div.remove();
  })
}


class Validate{
  text(input){
    const rgx=/[^a-zA-Z0-9]/g;
    if(rgx.test(input)){
      return true;
    }
    else{
      return false;
    }
  }
  email(input){
     const rgx=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(rgx.test(input)){
      return true;
    }
    else{
      return false;
    }
    }
  phoneNumber(input){
    const rgx=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
    if(rgx.test(input)){
      return true;
    }
    else{
      return false;
    }
  }
  code(input){
    const rgx=/[0-9]{6}/;
    if(rgx.test(input)){
      return true;
    }
    else{
      return false;
    }
  }
  number(input){
    const rgx=/[0-9]{1}/;
    if(rgx.test(input)){
      return true;
    }
    else{
      return false;
    }
  }
  password(input,length=6){
    //const rgx=/[1-9a-zA-Z]/;
    if(/[0-9]/.test(input) && /[a-z]/.test(input) &&  /[A-Z]/.test(input)){
      return true;
    }
    else{
      return false;
    }
  }
  passwordVarify(input1,input2){
    if(input1.toString()==input2.toString()&&input1!=""){
      return true;
    }
    else{
      return false;
    }
  }
  image(inputName,elemt=null){
    let extn=inputName.slice(inputName.lastIndexOf("."),inputName.length);
    extn=extn.toLowerCase();
    if(extn==".jpg"||extn==".jpeg"||extn==".png"||extn==".gif"){
     if(elemt!=null){
       let respond=null;
      const file=new FileReader();
       file.onload=(evnt)=>{
        respond=evnt.target.result;
        if(imageData !==undefined && checkOnload !==undefined){
        imageData=respond;
        checkOnload=true;
        //return respond is undefined here
      }
      else{
        console.log(imageData);
        console.log(checkOnload);
alert("message from smartValidator.js : you  must declear imageData=null variable and checkOnload=false varible to use this validator");
      }
    }//end file reader
      file.readAsDataURL(elemt[0].files[0]);
      //return respond : is null here
      return true ///no option
    }
    else{
      return true;
    }
    }
    else{
      return false;
    }
  }
}


const replaceWord=(text,word,wordToReplace)=>{
  text=text.split(word);
  let newText=""
  text.forEach((e,i)=>{
newText+=e+" "+wordToReplace;
  });
  return newText.slice(0,-(wordToReplace).length);
}
setTimeout(() => {
  
if($!==undefined && $!=null){
  $("#scrollY").css("max-height",screen.height);
  $("#scrollX").css("max-width",screen.width);
  }
  else{
    getQr("#scrollY").style.maxHieght=screen.height
    getQr("#scrollX").style.maxWidth=screen.width;
  }
},0);