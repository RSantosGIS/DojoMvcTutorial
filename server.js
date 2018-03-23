var express = require('express');
var app = express();
var router = express.Router();
var path = __dirname + '/app/';

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function(req, res) {
    res.sendFile(path+"index2.html");
});

router.get("/about", function(req, res) {
    res.sendFile(path+"about.html");
});

router.get("/index", function(req, res) {
    res.sendFile(path+"index.html");
});

router.get("/lesson2", function(req, res) {
    res.sendFile(path+"indexLesson2.html");
});

app.use("/", router);

//this is how you register additional static folders for files to be accessed from
//basically makes everything in here visible from the root level
app.use(express.static('public'));
app.use(express.static('app'));
app.use(express.static('dojo_modules'));

//anything that doesn't match anything else gets sent here
app.use("*", function(req, res) {
    res.sendFile(path+"404.html");
});

app.listen(3000, function() {
    console.log("Live at Port 3000");
    //notice, these console logs are displayed on the SERVER console, since this isn't browser client code
});