var userServices = require("../services/userServices");
exports.login = async function login(username, password) {
  return await userServices.login(username, password);
};
