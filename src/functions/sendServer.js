const https = require('http');

function getUrl(){
  https.get('http://34.68.236.216/', (resp) => {
  let data = '';
  console.log(resp)
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
}

exports.handler = (req, res) => {
  if (!req.query.message) {
      res.json({ error: 'No message provided' });
      return;
  }
  getUrl(req.query.message.toLowerCase(), (err, url, isDefined = true) => {
      if (err) {
          res.json({ error: err });
      }
      res.json({ url, isDefined });
  });
};
