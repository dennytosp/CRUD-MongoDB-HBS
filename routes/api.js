var express = require("express");
var router = express.Router();

var listApi = [
  {
    id: 101,
    name: "Lavida",
    price: "3999",
    available: "2021-01-01",
    idType: 1,
  },
  {
    id: 102,
    name: "Samsung",
    price: "4999",
    available: "2021-02-02",
    idType: 2,
  },
  { id: 103, name: "Oppo", price: "5999", available: "2021-03-03", idType: 3 },
  {
    id: 104,
    name: "Iphone",
    price: "6999",
    available: "2021-04-04",
    idType: 4,
  },
  {
    id: 105,
    name: "Realme",
    price: "7999",
    available: "2021-05-05",
    idType: 5,
  },
  { id: 106, name: "Asus", price: "8999", available: "2021-06-06", idType: 6 },
  { id: 107, name: "LG", price: "9999", available: "2021-07-07", idType: 7 },
];
var typeFriends = [
  { id: 101, name: "Điện thoại" },
  { id: 102, name: "Máy tính bảng" },
  { id: 103, name: "Máy tính xách tay" },
  { id: 104, name: "Máy tính bàn" },
  { id: 105, name: "Tai nghe" },
  { id: 106, name: "Bàn phím" },
  { id: 107, name: "Chuột" },
];

// HOME
router.get("/friends", function (req, res, next) {
  res.send({ listApi, typeFriends });
});

// GET logout
router.get("/friends/:id", function (req, res, next) {
  let { id } = req.params;
  let friend = listApi.find((fr) => fr.id == id) || {};
  res.send({ friend });
});

module.exports = router;
