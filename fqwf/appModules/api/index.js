const {getData} = require('./api-utils.js'); 
const {getRandomGame} = require('./api-utils.js'); 
const endpoints = require('./config.js'); 
module.exports={
    getData,
    getRandomGame,
    endpoints
}