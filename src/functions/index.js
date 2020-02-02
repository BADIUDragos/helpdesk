//Declare functions
const sendServer = require('./sendServer')
exports.sendServer = functions.https.onRequest(sendServer.handler)