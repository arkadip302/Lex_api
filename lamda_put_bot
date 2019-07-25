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
  description: "Orders a pizza from a local pizzeria.", 
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
