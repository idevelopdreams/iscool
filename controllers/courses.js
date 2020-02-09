const pry = require("pryjs");

// GET all courses for homepage
exports.allCourses = (req, res) => {
  // this code is for the front end this is an API
  res.render("home");
};

// GET a single course
exports.singleCourse = (req, res) => {
  res.render("course");
};

exports.createCourse = (req, res) => {
  // logic
  req.context.db.Course.create({
    title: req.body.title,
    UserId: req.query.user
  })
    .then(course => {
      // console.log(course);
      res.json(course);
    })
    .catch(err => {
      console.log("Error while creating course : ", err);
    });
};
