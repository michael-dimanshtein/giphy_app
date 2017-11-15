const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('public'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "giphy_page.html"));
});

app.listen(PORT, function(){
    console.log("giphy page running");
});