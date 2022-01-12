const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors");

// routes
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const app = express();

// cors middelware
app.use(cors());
// body parser middelware
app.use(express.json());

// DB config
const state = "dev";
const db = state == "dev" ? config.get("devMongoURI") : config.get("MongoURI");

// contect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("Mongodb connected ...."))
  .catch((err) => console.log(err));

app.use("/api/users", users);
app.use("/api/auth", auth);

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`server started on ${port}`));
