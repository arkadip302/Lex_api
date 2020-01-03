var AWS = require('aws-sdk');
exports.handler = (event, context, callback) => {
    AWS.config.region = 'us-east-1';
    var lexruntime = new AWS.LexRuntime();

    var params = {
        botAlias: event.botAlias,
        botName: event.botName,
        inputText: event.message,
        userId: event.userid,
        sessionAttributes: {}
    };
    console.log(event);
    lexruntime.postText(params, function(err, data) {
        if (err) {
            console.log(err, err.stack); // an error occurred
            callback(err, "failed");
        } else {
            console.log(data); // got something back from Amazon Lex
            context.succeed(data);
            callback(null,event);
        }
    });
};
