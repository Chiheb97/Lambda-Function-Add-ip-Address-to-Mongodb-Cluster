var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://cloud.mongodb.com/api/atlas/v1.0/groups/{GROUP-ID}/accessList',
  'auth': {
    'user': 'Key-name',
    'pass': 'key',
    'sendImmediately': false
},
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify([
    {
      "ipAddress": "40.55.22.75", //example of ip adress 
      "comment": "IP address for Application Server A",
      
    }
  ])

};
request(options, function (error, response) {
  if (error) throw new Error(error);
});
