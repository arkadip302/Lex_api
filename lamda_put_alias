var AWS = require('aws-sdk');
exports.handler = (event, context, callback) => {
    AWS.config.region = 'us-east-1';
    var lexmodelbuildingservice = new AWS.LexModelBuildingService();
var params = {
  botName: event.botName, /* required */
  botVersion: event.botVersion, /* required */
  name: 'prod', /* required */
  description: 'A bot version for ',
};
lexmodelbuildingservice.putBotAlias(params, function(err, event) {
  if (err){
    callback(err, err.stack);
  }
  // an error occurred
  else{
    callback(null,"Alias Created");
  }     console.log(event);           // successful response
});
};
