const http = require('http');
const path = require('path');
const mimeTypes = require('./appModules/http-utils/mime-types');
const staticFile = require('./appModules/http-utils/static-file');
const mainRouteController = require('./controllers/main');
const gameRouteController = require('./controllers/game');
const defaultRouteController = require('./controllers/default');
const voteRouteController = require('./controllers/vote');


const PORT=3005
const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
          case "/":
            mainRouteController(res, "/index.html", ".html");
          break;
          case "/vote":
            voteRouteController(req, res);
      break;
          case "/game":
            gameRouteController(res);
      break;
          default:
            defaultRouteController(res, url);
    }
  }); 
server.listen(PORT);