const staticFile = require("../appModules/http-utils/static-file");
const {getData,endpoints} = require("../appModules/http-utils/index");
const {config,makeRatingFile} = require("../appModules/rating");
const { PATH_TO_RATING_FILE } = require("../appModules/rating/config");


async function mainRouteController(res, publicUrl, extname) {
    const data = await getData(endpoints,games)
    await makeRatingFile(config,PATH_TO_RATING_FILE,data);
    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
  }
  module.exports = mainRouteController;