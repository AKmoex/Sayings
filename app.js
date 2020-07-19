const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());
require("./plugins/db.js")(app);

const Saying = require("./models/Saying.js");

app.get("/api/list", async (req, res) => {
  const sayings = await Saying.find();
  res.send(sayings);
});

app.post("/api/add", async (req, res) => {
  const model = await Saying.create(req.body);
  res.send(model);
});

app.delete("/api/delete/:id", async (req, res) => {
  console.log(req.params.id);
  await Saying.findByIdAndDelete(req.params.id);

  res.send({
    message: "success",
  });
});

app.listen(3000, () => {
  console.log("Express server starting... Port:3000");
});
