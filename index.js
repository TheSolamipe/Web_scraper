const browserObject = require("./browser");
const scraperController = require("./pageContoller");

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

//Pass the browser instance to the scrapper controller
scraperController(browserInstance);
