var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
var mongoose = require("mongoose");
require("./models/categoryModel");
require("./models/classModel");

// Remember 2 lines
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
//
var classRouter = require("./routes/class");
var apisRouter = require("./routes/api");

var app = express();
// var url = 'mongodb://localhost:27017/ClassRoom';
// var ur = 'mongodb://localhost:27017/ClassRoom?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log("DB error", err));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
var hbs = require("hbs");
hbs.registerHelper("soSanh", function (a, b, c) {
  return a.toString() == b.toString();
});
hbs.registerHelper("formartDate", function (a, b) {
  d = new Date(a)
  let year = d.getFullYear()
  let month = d.getMonth().toString().length == 1 ? '0'+ (d.getMonth() + 1) : (d.getMonth())
  let date = d.getDate().toString().length == 1 ? '0' + d.getDate() : d.getDate()
  let s = year + '-' + month + '-' + date
  return s
});
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.JWT_KEY,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Remember 2 lines
//Kiểm tra router
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/class", classRouter);
app.use("/api", apisRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
