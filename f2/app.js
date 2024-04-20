const http = require('http');
const path = require('path');
const mimeTypes = require('./appModules/http-utils/mime-types'); 
const mainRouteController = require('./controllers/main'); 
const defaultRouteController = require('./controllers/default'); 
const voteRouteController = require('./controllers/vote'); 
const gameRouteController = require('./controllers/game'); 

const PORT=3005
const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
            mainRouteController(res, "/index.html", ".html");
      break;
      default:
            defaultRouteController(res, url);
      break;
      case "/game":
        gameRouteController(res);
  break;
  case "/vote":
            voteRouteController(req, res);
      break;
    // ...другие маршруты
  }
}); 

server.listen(PORT);