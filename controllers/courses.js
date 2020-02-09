const pry = require("pryjs");

// GET all courses for homepage
exports.allCourses = (req, res) => {
  req.context.db.Course.findAll({ where: "", include: ["creator", "students"] })
    .then(function(courses) {
      // return an array of courses and there associations
      res.json(courses);
    })
    .catch(err => {
      console.log("Error while find company : ", err);
    });
};

// GET a single course
exports.singleCourse = (req, res) => {
  res.render("course");
};

exports.createCourse = (req, res) => {
  // create users sequelize
  req.context.db.Course.create({
    title: req.body.title,
    UserId: req.query.user
  })
    .then(course => {
      // return course created
      res.json(course);
    })
    .catch(err => {
      console.log("Error while creating course : ", err);
    });
};
