require("./config/config");
require("./models/db");

const path = require('path')

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config/config");
const rtsIndex = require("./routes/index.router");

var app = express();


app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());
app.use("/api", rtsIndex);
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// error handler
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    var valErrors = [];
    Object.keys(err.errors).forEach((key) =>
      valErrors.push(err.errors[key].message)
    );
    res.status(422).send(valErrors);
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server started at port : ${process.env.PORT}`)
);
