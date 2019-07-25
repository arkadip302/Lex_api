*** First Delete The Bot Alias then only Delete Bot will work   ***

var AWS = require('aws-sdk');
exports.handler = (event, context, callback) => {
    AWS.config.region = 'us-east-1';
    var lexmodelbuildingservice = new AWS.LexModelBuildingService();
var params = {
    name:event.name,
};
lexmodelbuildingservice.deleteBot(params, function(err, event) {
  if (err){
   callback(err,err.sack);
  } // an error occurred
  else{
      callback(null,"Deleted Bot");
  }     console.log(event);           // successful response
});
};
