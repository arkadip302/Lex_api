# Lex_api

Aws Lex CRUD functionality using APIs.

# Overview
Amazon Lex is an AWS service for building conversational interfaces for applications using voice and text.Amazon Lex enables any developer to build conversational chatbots quickly.

With Amazon Lex, no deep learning expertise is necessary—to create a bot, you just specify the basic conversation flow in the Amazon Lex.
We can build, test, and publish your text or voice chatbot. We can then add the conversational interfaces to bots on mobile devices, web applications, and chat platforms (for example, Facebook Messenger).

 ## Some of the benefits of using Amazon Lex include:
  1.Simplicity – Amazon Lex guides you through using the console to create your own chatbot in minutes.
  2.Democratized deep learning technologies – Powered by the same technology as Alexa, Amazon Lex provides ASR and NLU technologies to          create a Speech Language Understanding (SLU) system.
  3.Cost-effectiveness – With Amazon Lex, there are no upfront costs or minimum fees. You are charged only for the text or speech requests      that are made.
 
# Creating Lamda for Lex:
   Creating Lamda For Lex which will we called in Aws Gateway.
   ```bash
   Lamda For PutBot
   ```
   ```nodejs
   var AWS = require('aws-sdk');
exports.handler = (event, context, callback) => {
    AWS.config.region = 'us-east-1';
    var lexmodelbuildingservice = new AWS.LexModelBuildingService();
var params = {
  name:event.name, 
  abortStatement: {
   messages: [
      {
     content: "I don't understand. Can you try again?", 
     contentType: "PlainText"
    }, 
      {
     content: "I'm sorry, I don't understand.", 
     contentType: "PlainText"
    }
   ]
  }, 
  childDirected: false, 
  clarificationPrompt: {
   maxAttempts: 1, 
   messages: [
      {
     content: "I'm sorry, I didn't hear that. Can you repeate what you just said?", 
     contentType: "PlainText"
    }, 
      {
     content: "Can you say that again?", 
     contentType: "PlainText"
    }
   ]
  }, 
  description: "Introduce Yourself", 
  idleSessionTTLInSeconds: 300, 
  intents: [
     {
    intentName: "Introduce", 
    intentVersion: "$LATEST"
   }
  ],
  locale: "en-US", 
  processBehavior: "BUILD"
 };
 lexmodelbuildingservice.putBot(params, function(err, event) {
   if (err) console.log(err, err.stack); // an error occurred
   else{
       callback(null,event);
   }     console.log(event.name+" Created");           // successful response
 
 });
};
```
