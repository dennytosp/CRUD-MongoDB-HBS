var CategoryModel = require("../models/categoryModel");
exports.getListCategories = async function getListCategories() {
  return await CategoryModel.find();
};
