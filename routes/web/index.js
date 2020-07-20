const express = require("express");
const router = express.Router();
const Saying = require("../../models/Saying.js");

router.get("/list", async (req, res) => {
  const sayings = await Saying.find();
  res.send(sayings);
});
router.get("/add/:id", async (req, res) => {
  console.log(req.params.id);
  const saying = await Saying.findById(req.params.id);

  res.send(saying);
});
router.post("/add", async (req, res) => {
  const model = await Saying.create(req.body);
  res.send(model);
});
router.post("/add/:id", async (req, res) => {
  const model = await Saying.findByIdAndUpdate(req.params.id, req.body);
  res.send(model);
});
router.delete("/delete/:id", async (req, res) => {
  console.log(req.params.id);
  await Saying.findByIdAndDelete(req.params.id);

  res.send({
    message: "success",
  });
});

module.exports = router;
