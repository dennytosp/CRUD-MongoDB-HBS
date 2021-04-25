var userModel = require("../models/userModel");

exports.login = async function login(username, password) {
  let usMod = await userModel.findOne({ username: username, password: password });
  return usMod;
};
