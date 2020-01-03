var AWS = require('aws-sdk');
exports.handler = (event, context, callback) => {
    AWS.config.region = 'us-east-1';
    var lexmodelbuildingservice = new AWS.LexModelBuildingService();
var params = {
   botName: event.botName, 
   name:'prod'
};
lexmodelbuildingservice.deleteBotAlias(params, function(err, event) {
  if (err){
      callback(err,err.stack);
  }
 // an error occurred
  else {
      callback(null," Deleted Alias");
  }         // successful response
});
};
