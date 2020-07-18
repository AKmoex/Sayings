const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());
require("./plugins/db.js")(app);

const Saying = require("./models/Saying.js");

app.get("/api/test", (req, res) => {
  console.log("收到请求了");
  res.send("你好");
});

app.post("/api/add", async (req, res) => {
  const model = await Saying.create(req.body);
  res.send(model);
  console.log(model);
});

app.listen(3000, () => {
  console.log("Express server starting... Port:3000");
});
