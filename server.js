var express = require('express');
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function(req, res) {
    res.sendFile(path+"index.html");
});

router.get("/about", function(req, res) {
    res.sendFile(path+"about.html");
});

app.use("/", router);

//this is how you register additional static folders for files to be accessed from
//basically makes everything in here visible from the root level
app.use(express.static('public'));

//anything that doesn't match anything else gets sent here
app.use("*", function(req, res) {
    res.sendFile(path+"404.html");
});

app.listen(3000, function() {
    console.log("Live at Port 3000");
    //notice, these console logs are displayed on the SERVER console, since this isn't browser client code
});