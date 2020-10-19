const dotenv = require("dotenv");
dotenv.config();

console.log("API Key", process.env.API_KEY);
console.log("PORT", process.env.PORT);
const PORT = process.env.PORT;
const API_Key = process.env.API_KEY;
const path = require("path");
const mockAPIResponse = require("./mockAPI");
const fetch = require("node-fetch");
const express = require("express");
const app = express();

const URL = "https://api.meaningcloud.com/sentiment-2.1?key=";

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.text());

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

app.get("/test", (req, res) => {
  res.send(mockAPIResponse);
});

app.post('/document',(req,res)=>{
const resp = await fetch(`${URL}${API_Key}&lang=en&url=${req.body}`);
try{
    const data = await resp.json();
    console.log(data);
    resp.send(data);
}catch(err){
    console.log(err);
}
});

app.listen(PORT, ()=>{
console.log(`Listening on ${PORT}`);
});
