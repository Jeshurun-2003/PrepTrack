const express = require("express");
const app = express();

app.get('/',(req,res) => {
    res.send("PrepTrack is running successfully");
});

const port = 5000;

const pool = require('./config/db');


app.listen(port, () => {
    console.log(`Server runnnig at port ${port}`);
});