const pry = require("pryjs");

// GET /user/login
exports.userLogin = (req, res) => {
  res.render("login");
};

// GET user/signup
exports.register = (req, res) => {
  res.render("register");
};

// GET a single course
exports.singleCourse = (req, res) => {
  req.context.db.Course.findByPk("56fff529-0164-4896-a628-ab369dad4889", {
    include: ["creator", "students", "Modules"],
  })
    .then(function (course) {
      req.context.db.Module.findAll({
        where: "",
        include: ["creator", "Lessons"],
      })
        .then(function (modules) {
          // return an array of courses and there associations
          res.render("course", { user: "demo", course, modules });
        })
        .catch((err) => {
          console.log("Error while finding modules: ", err);
        });
    })
    .catch((err) => {
      console.log("Error fetching Course : ", err);
    });
};
