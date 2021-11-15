class AlText{
  construction(){
    this.messages=[]
  }//end constructor
  
  
  isGreetings(msg){
    msg=msg.toLowerCase()
    const test1=msg.includes("hi");
    const test2=msg.includes("hello");
    const test3=(msg.includes("good")) && (msg.includes("afternoon") || msg.includes('night') || msg.includes('morning') || msg.includes("evening") || msg.includes('day'));
    
    const test4=(msg.includes("how")) && (msg.includes('are you') || msg.includes('your day') || msg.includes('your') || msg.includes('our')) || msg.includes("sup") ||  msg.includes("what's up") || msg.includes("hi");
    const test5=["hi","hey","hello"].filter(e=>msg.includes(e)). length>0
    return test1 || test2 || test3 || test4 || test5
  }
  
  isIntroduction(msg){//lovely code checking wether is introduction
    const words=["my name","i'm","my ","name is","stay at","live with"];
   return words.filter((e)=>msg.includes(e))
  }
  
  isInsult(msg){//awesome code checking wether msg has insult in it
   const test1=msg.includes("stupid") || msg.includes("idiot") || msg.includes("fool") || msg.includes("bastard") || msg.includes("nonsense") || msg.includes("coward")
   return test1
 
  }
  wantsFight (msg){//awesome code checking whether msg , has fight.keywords
  
    const fightWords=["fight","kill","beat","slap","beating","punch"];
    return fightWords.filter((e)=>msg.includes(e));
  }
  
  isRes(msg){
    const words=["yea","yes","ok","alright","its ok"]
    return words.filter(e=>msg.includes(e));
  }
  
  isPraise(msg){//awesome code checking wether user is liking, praising me
    const praiseWords=["handsome","great","awesome","impressive","talented","cool","intelligent","interesting","nice","gud","good"]
  return praiseWords.filter((e)=>msg.includes(e));
    
  }
  isResearch(msg){//awesome code checking wether user want to Know about me
    const test1=msg.includes("do you") || msg.includes("where") || msg.includes("can i") || msg.includes("can we") || msg.includes("shall we") || msg.includes("?") || msg.includes("who are ") || msg.includes("what are")
    return test1;
  }
  isCode(msg){//awesome code checking if message is computer code
   const reg=/[\*\:\[\}\{\=\|\^\}\<\/]/g
  // console.log(reg.test(msg))
   return reg.test(msg)
  }
  
  
  
  findRespond(message){//check all methods and find appropriate response for the text given, using ifelse and methods checks
    message=message.toLowerCase();
    const respond=[
      ];
      if(this.isRes(message).length > 0){
        const response=[
          {
            message:"alright"
          },
          {
            message:"Yeah nice"
          },
          {
            message:"okay then"
          }
          ]
          let got=response [Math.floor(random(0, response.length - 1))]
          got != undefined ? respond.push(got):""
      }
    if(this.isGreetings(message)){
      const Algreets=[{
        message:"hello , how are you , my name is "+robot+" I'm a robot , can i know your name ? ",
        type:'greetings'
      },
      {
        message : "hi , " + " my name is "+ robot+' can i know about you?'
     ,
     type:'greetings'
        
      },
      
      {
        message : "nice to have awesome moment with you chatting, tho my is "+ robot +" can i know about you "
      }
      ]
      
      let got=Algreets[random(0,Algreets.length - 1)];
      if(got===undefined) return
      respond.push(got);
     
      
      
    }//end is greetings
    
    if(this.isIntroduction(message). length > 0){
      const introResponce=[
        {
          message:"wow that's very cool, I'm happy to know that",
          type:'intro'
        },
        {
         message:"that's very nice , I'm so happy to know about that" ,
         intro:"intro"
        },
        {
          message:"I'm happy to hear this ☺️",
          type:"intro"
        },
        {
          message:"wow that's great, nice to hear this",
          type:"intro"
        },
        
        ]
      let got = introResponce[random(0, introResponce.length - 1)];
        if (got === undefined) return
        respond.push(got);
       
    }//end if introduction
    
    if(this.isInsult(message) || this
   .wantsFight(message).length > 0){//create respond for insult
    const isInsultResponce=[
      {
        message:"😠😠😡😡😡 I don't like insults",
        type:"insult"
      },
      {
        message:"I don't have time to fight 😠",
        type:"insult"
      },
      {
        message:"I'm not interested to fight with you"
      },
      {
        message:"😬😬👊👊👊 I'm not programmed to fight , let find a place and fight"
      }
      ]
    let got=isInsultResponce[Math.floor(Math.random()*isInsultResponce.length - 1)] 
     
     got != undefined ? respond.push(got) : ""
    }
    
     if(this.isResearch(message)){
       const isResearchRespond=[
         {
           message:"you interested to know about me, alright <br/><i>my name is "+robot+" I'm online robot , but i can chat with your business WhatsApp customers if you'll let me</i> ",
           type:"research"
         },
         {
           message: "oh i haven't introduces my self yet ☺️☺️, alright <br/><i>my name is " + robot + " I'm online robot , but i can chat with your business WhatsApp customers if you'll let me </i> ",
           type: "research"
         },
         {
           message: "<i>my name is " + robot + " I'm online robot , but i can chat with your business WhatsApp customers if you'll let me </i> ",
           type: "research"
         },
         {
           message: "let me introduce myself<i>my name is " + robot + " I'm online robot , but i can chat with your business WhatsApp customers if you'll let me </i> ",
           type: "research"
         }
         
         ]
         
        let got=isResearchRespond[Math.floor(Math.random()*isResearchRespond.length)]
         got != undefined ? respond.push(got) : ''
     }
    if(this.isPraise(message).length > 0){
      const praiseRespond=[{
        message:"thank you so much ❤️",
        type:"praise"
      },
      {
        message:"i appropriates",
        type:"praise"
      },
      {
        message:"thanks ☺️ , you humans are awesome",
        type:"praise"
      },
      {
        message:"Thanks😇"
      }
      ]
      let got=praiseRespond[Math.floor(random(0,praiseRespond.length - 1))];
      got != undefined ? respond.push(got):""
    }
    if(this.isCode(message)){
      const codeResponce=[{
        message:"sorry but i don't write code",
        type:"code"
        
      },
      {
        message:"return false😂😂😂, but I'm not a programmer",
        type:"code"
      },
      {
        message:"I don't understand Coding"
      }]
      
      let got=codeResponce[Math.floor(random(0 , codeResponce.length - 1))]
      got != undefined ? respond.push(got):""
    }
    return respond
  }
  
}//end class

const Al=new AlText();

