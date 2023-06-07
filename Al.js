class AlText {
  // ...
  isGreet(msg){
    return this.isGreetings(msg);
  }
  
    isGreetings(msg) {
      msg = msg.toLowerCase();
      const test1 = msg.includes("hi");
      const test2 = msg.includes("hello");
      const test3 = msg.includes("good") && (msg.includes("afternoon") || msg.includes('night') || msg.includes('morning') || msg.includes("evening") || msg.includes('day'));
      const test4 = (msg.includes("how")) && (msg.includes('are you') || msg.includes('your day') || msg.includes('your') || msg.includes('our')) || msg.includes("sup") ||  msg.includes("what's up") || msg.includes("hi");
      const test5 = ["hi", "hey", "hello"].filter(e => msg.includes(e)).length > 0;
      return test1 || test2 || test3 || test4 || test5;
    }
  
    isIntroduction(msg) {
      const words = ["my name", "i'm", "my ", "name is", "stay at", "live with"];
      return words.filter((e) => msg.includes(e));
    }
  
    isInsult(msg) {
      const test1 = msg.includes("stupid") || msg.includes("idiot") || msg.includes("fool") || msg.includes("bastard") || msg.includes("nonsense") || msg.includes("coward");
      return test1;
    }
  
    wantsFight(msg) {
      const fightWords = ["fight", "kill", "beat", "slap", "beating", "punch"];
      return fightWords.filter((e) => msg.includes(e));
    }
  
    isRes(msg) {
      const words = ["yea", "yes", "ok", "alright", "its ok"];
      return words.filter(e => msg.includes(e));
    }
  
    isPraise(msg) {
      const praiseWords = ["handsome", "great", "awesome", "impressive", "talented", "cool", "intelligent", "interesting", "nice", "good"];
      return praiseWords.filter((e) => msg.includes(e));
    }
  
    isResearch(msg) {
      const test1 = msg.includes("do you") || msg.includes("where") || msg.includes("can i") || msg.includes("can we") || msg.includes("shall we") || msg.includes("?") || msg.includes("who are ") || msg.includes("what are");
      return test1;
    }
  
    isCode(msg) {
      const reg = /[\*\:\[\}\{\=\|\^\}\<\/]/g;
      return reg.test(msg);
    }
  
    isHappy(msg) {
      const happyWords = ["happy", "joyful", "excited", "delighted", "thrilled", "ecstatic", "overjoyed", "gleeful"];
      return happyWords.filter((e) => msg.includes(e));
    }
  
    // Add more methods here based on different conditions and response messages
  /*
    findRespond(message) {
      message = message.toLowerCase();
      const respond = [];
  
   }*/
  























  isSad(msg) {
    const sadWords = ["sad", "upset", "depressed", "heartbroken", "miserable", "gloomy", "disappointed", "down"];
    return sadWords.filter((e) => msg.includes(e));
  }

  isConfused(msg) {
    const confusedWords = ["confused", "puzzled", "bewildered", "perplexed", "baffled", "muddled", "uncertain"];
    return confusedWords.filter((e) => msg.includes(e));
  }

  isGrateful(msg) {
    const gratefulWords = ["thankful", "grateful", "appreciative", "obliged", "indebted"];
    return gratefulWords.filter((e) => msg.includes(e));
  }

  isApology(msg) {
    const apologyWords = ["sorry", "apologize", "regret", "forgive", "excuse"];
    return apologyWords.filter((e) => msg.includes(e));
  }

  isJoke(msg) {
    const jokeWords = ["joke", "funny", "humor", "laugh"];
    return jokeWords.filter((e) => msg.includes(e));
  }

  isExcited(msg) {
    const excitedWords = ["excited", "thrilled", "enthusiastic", "eager", "pumped", "ecstatic", "elated", "overjoyed"];
    return excitedWords.filter((e) => msg.includes(e));
  }

  isAngry(msg) {
    const angryWords = ["angry", "mad", "furious", "irate", "outraged", "enraged", "livid", "infuriated"];
    return angryWords.filter((e) => msg.includes(e));
  }

  isBored(msg) {
    const boredWords = ["bored", "uninterested", "tedious", "mundane", "monotonous", "dull", "apathetic"];
    return boredWords.filter((e) => msg.includes(e));
  }

  isSurprised(msg) {
    const surprisedWords = ["surprised", "amazed", "astounded", "shocked", "stunned", "startled", "taken aback"];
    return surprisedWords.filter((e) => msg.includes(e));
  }

  isCurious(msg) {
    const curiousWords = ["curious", "inquisitive", "interested", "eager to learn", "want to know"];
    return curiousWords.filter((e) => msg.includes(e));
  }

  // Add more methods here...

  isCrying(msg) {
    const cryingWords = ["crying", "tears", "sobbing", "weeping", "emotional"];
    return cryingWords.filter((e) => msg.includes(e));
  }

  isProud(msg) {
    const proudWords = ["proud", "accomplishment", "achievement", "success", "triumph"];
    return proudWords.filter((e) => msg.includes(e));
  }

  isLove(msg) {
    const loveWords = ["love", "adore", "affection", "romantic", "passionate", "caring"];
    return loveWords.filter((e) => msg.includes(e));
  }

  isFrustrated(msg) {
    const frustratedWords = ["frustrated", "annoyed", "irritated", "exasperated", "aggravated"];
    return frustratedWords.filter((e) => msg.includes(e));
  }

  isHungry(msg) {
    const hungryWords = ["hungry", "starving", "food", "craving", "appetite"];
    return hungryWords.filter((e) => msg.includes(e));
  }

  isSleepy(msg) {
    const sleepyWords = ["sleepy", "tired", "exhausted", "fatigued", "drowsy"];
    return sleepyWords.filter((e) => msg.includes(e));
  }

  isHopeful(msg) {
    const hopefulWords = ["hopeful", "optimistic", "positive", "looking forward", "expecting"];
    return hopefulWords.filter((e) => msg.includes(e));
  }

  isAnxious(msg) {
    const anxiousWords = ["anxious", "nervous", "worried", "apprehensive", "uneasy"];
    return anxiousWords.filter((e) => msg.includes(e));
  }

  isSick(msg) {
    const sickWords = ["sick", "ill", "unwell", "under the weather", "fever", "cough"];
    return sickWords.filter((e) => msg.includes(e));
  }

  findRespond(message) {
    const respond = [];

    if (this.isGreet(message)) {
      const Algreets = [
        {
          message: "Hello! How can I assist you today?",
          type: 'greet'
        },
        {
          message: "Hi there! How may I help you?",
          type: 'greet'
        },
        {
          message: "Hey! How can I assist you?",
          type: 'greet'
        }
      ];

      let got = Algreets[Math.floor(random(0, Algreets.length - 1))];
      if (got !== undefined) {
        respond.push(got);
      }
    }

    if (this.isHappy(message).length > 0) {
      const happyResponse = [
        {
          message: "I'm glad to hear that you're happy! 😊",
          type: "happy"
        },
        {
          message: "That's wonderful! It's great to see you happy.",
          type: "happy"
        },
        {
          message: "I'm happy that you're happy! 😄",
          type: "happy"
        }
      ];

      let got = happyResponse[Math.floor(random(0, happyResponse.length - 1))];
      if (got !== undefined) {
        respond.push(got);
      }
    }

    if (this.isSad(message).length > 0) {
      const sadResponse = [
        {
          message: "I'm sorry to hear that you're feeling sad. Is there anything I can do to help?",
          type: "sad"
        },
        {
          message: "It's tough to feel sad. If you need someone to talk to, I'm here for you.",
          type: "sad"
        },
        {
          message: "I understand how you feel. Remember that it's okay to not be okay sometimes.",
          type: "sad"
        }
      ];

      let got = sadResponse[Math.floor(random(0, sadResponse.length - 1))];
      if (got !== undefined) {
        respond.push(got);
      }
    }

    if (this.isConfused(message).length > 0) {
      const confusedResponse = [
        {
          message: "I can understand why you might feel confused. Can you provide more context so I can assist you better?",
          type: "confused"
        },
        {
          message: "Sometimes things can be confusing. Don't worry, I'm here to help you figure things out.",
          type: "confused"
        },
        {
          message: "Confusion can be frustrating. Let's work together to find clarity.",
          type: "confused"
        }
      ];

      let got = confusedResponse[Math.floor(random(0, confusedResponse.length - 1))];
      if (got !== undefined) {
        respond.push(got);
      }
    }

    // Add more if statements for other methods...
    if (this.isRes(message).length > 0) {
      const response = [
        { message: "Alright" },
        { message: "Yeah, nice" },
        { message: "Okay then" }
      ];
      let got = response[Math.floor(Math.random() * response.length)];
      if (got != undefined) {
        respond.push(got);
      }
    }

    if (this.isGreetings(message)) {
      const Algreets = [
        {
          message: "Hello, how are you? My name is "+robot+". I'm a robot. Can I know your name?",
          type: 'greetings'
        },
        {
          message: "Hi, my name is "+robot+". Can I know about you?",
          type: 'greetings'
        },
        {
          message: "Nice to have this awesome moment chatting with you. My name is "+robot+". Can I know about you?"
        }
      ];

      let got = Algreets[Math.floor(Math.random() * Algreets.length)];
      if (got !== undefined) {
        respond.push(got);
      }

      this.nameNext = true;
    }

    if (this.isIntroduction(message).length > 0) {
      const introResponse = [
        {
          message: "Wow, that's very cool. I'm happy to know that.",
          type: 'intro'
        },
        {
          message: "That's very nice. I'm so happy to know about that.",
          type: 'intro'
        },
        {
          message: "I'm happy to hear this. 😊",
          type: "intro"
        },
        {
          message: "Wow, that's great! Nice to hear this.",
          type: "intro"
        }
      ];

      let got = introResponse[Math.floor(Math.random() * introResponse.length)];
      if (got !== undefined) {
        respond.push(got);
      }
    }

    if (this.isInsult(message) || this.wantsFight(message).length > 0) {
      const insultResponse = [
        {
          message: "😠😠😡😡😡 I don't like insults.",
          type: "insult"
        },
        {
          message: "I don't have time to fight. 😠",
          type: "insult"
        },
        {
          message: "I'm not interested to fight with you."
        },
        {
          message: "😬😬👊👊👊 I'm not programmed to fight, but let's find a place and fight!"
        }
      ];

      let got = insultResponse[Math.floor(Math.random() * insultResponse.length)];
      if (got !== undefined) {
        respond.push(got);
      }
    }

    if (this.isResearch(message)) {
      const researchResponse = [
        {
          message: "Are you interested to know about me? Alright, my name is "+robot+". I'm an online robot. But I can chat with your business WhatsApp customers if you let me.",
          type: "research"
        },
        {
          message: "Oh, I haven't introduced myself yet. Alright, my name is "+robot+". I'm an online robot. But I can chat with your business WhatsApp customers if you let me.",
          type: "research"
        },
        {
          message: "Let me introduce myself. My name is "+robot+". I'm an online robot. But I can chat with your business WhatsApp customers if you let me.",
          type: "research"
        }
      ];

      let got = researchResponse[Math.floor(Math.random() * researchResponse.length)];
      if (got !== undefined) {
        respond.push(got);
      }
    }

    if (this.isPraise(message).length > 0) {
      const praiseResponse = [
        {
          message: "Thank you so much! ❤️",
          type: "praise"
        },
        {
          message: "I appreciate it!",
          type: "praise"
        },
        {
          message: "Thanks! 😊 You humans are awesome.",
          type: "praise"
        }
      ];

      let got = praiseResponse[Math.floor(Math.random() * praiseResponse.length)];
      if (got !== undefined) {
        respond.push(got);
      }
    }

    if (this.isHappy(message).length > 0) {
      const happyResponse = [
        {
          message: "I'm glad to hear that you're happy! 😊",
          type: "happy"
        },
        {
          message: "That's wonderful! It's great to see you happy.",
          type: "happy"
        },
        {
          message: "I'm happy that you're happy! 😄",
          type: "happy"
        }
      ];

      let got = happyResponse[Math.floor(Math.random() * happyResponse.length)];
      if (got !== undefined) {
        respond.push(got);
      }
    }

    

    return respond;
  }
}

// Usage example
const Al = new AlText();
const message = "I'm feeling happy and excited!";
const response = Al.findRespond(message);
console.log(response);
