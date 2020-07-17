const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.get("/api/test", (req, res) => {
  console.log("收到请求了");
  res.send("你好");
});

app.listen(3000, () => {
  console.log("Express server starting... Port:3000");
});
