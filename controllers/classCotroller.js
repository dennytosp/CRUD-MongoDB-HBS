var classServices = require("../services/classServices");
var classModel = require ("../models/classModel");
exports.getListClass = async function getListClass() {
  return await classServices.getListClass();
};

exports.getClassById = async function getClassById(id) {
  return await classServices.getClassById(id);
};

exports.addNew = async function addNewClass(params) {
  let { fullName, phoneNumber, avatar, startDate, idType } = params;
  let mod = {
    fullName: fullName,
    phoneNumber: phoneNumber,
    avatar: avatar,
    startDate: startDate,
    idType: idType,

  }
  // Tạo mới một sản phẩm
  await classServices.addNew(mod)
};

exports.edit = async function editClass(id, params) {
  let { fullName, phoneNumber, avatar, startDate, idType } = params;
  let classes = {
    id,
    fullName,
    phoneNumber,
    avatar,
    startDate,
    idType,
  };
  await classServices.edit(classes);
};

exports.remove = async function removeClassById(id) {
  await classServices.remove(id);
};
