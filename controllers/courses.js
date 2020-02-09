const pry = require("pryjs");

// GET all courses
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

// GET a course
exports.singleCourse = (req, res) => {
  req.context.db.Course.findByPk(req.query.courseId, {
    include: ["creator", "students"]
  })
    .then(function(course) {
      res.json(course);
    })
    .catch(err => {
      console.log("Error fetching Course : ", err);
    });
};

// POST a course
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
