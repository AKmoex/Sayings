module.exports = (app) => {
  const express = require("express");
  const assert = require("http-assert");
  const jwt = require("jsonwebtoken");

  const router = express.Router({
    mergeParams: true,
  });

  const Saying = require("../../models/Saying.js");
  const AdminUser = require("../../models/AdminUser.js");

  const auth = require("../../middleware/auth.js");

  router.get("/list", async (req, res, next) => {
    const sayings = await Saying.find();
    res.send(sayings);
  });
  router.get("/add/:id", async (req, res) => {
    console.log(req.params.id);
    const saying = await Saying.findById(req.params.id);
    res.send(saying);
  });
  router.post("/add", async (req, res) => {
    await Saying.create(req.body);
    res.send({
      message: "success",
    });
  });
  router.post("/add/:id", async (req, res) => {
    await Saying.findByIdAndUpdate(req.params.id, req.body);
    res.send({
      message: "success",
    });
  });
  router.delete("/delete/:id", async (req, res) => {
    await Saying.findByIdAndDelete(req.params.id);
    res.send({
      message: "success",
    });
  });

  app.use("/api/web/rest", auth(), router);

  app.post("/api/web/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await AdminUser.findOne({
      username,
    }).select("+password");

    assert(user, 401, "用户不存在");

    const isValid = require("bcryptjs").compareSync(password, user.password);

    assert(isValid, 401, "密码错误");

    const token = jwt.sign({ id: user._id }, "secret");

    res.send(token);
  });

  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message,
    });
  });
};
