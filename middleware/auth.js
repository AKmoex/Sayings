module.exports = () => {
  const jwt = require("jsonwebtoken");
  const AdminUser = require("../models/AdminUser.js");
  const assert = require("http-assert");
  return async (req, res, next) => {
    const token = String(req.headers.authorization || "")
      .split(" ")
      .pop();
    assert(token, 401, "请先登录");
    const { id } = jwt.verify(token, "secret");
    assert(id, 401, "请先登录");
    const user = AdminUser.findById(id);
    assert(user, 401, "请先登录");
    await next();
  };
};
