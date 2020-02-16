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
  // require params: courseId
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
  // require params: userId
  req.context.db.Course.create({
    title: req.body.title,
    UserId: req.query.userId
  })
    .then(course => {
      // return course created
      res.json(course);
    })
    .catch(err => {
      console.log("Error while creating course : ", err);
    });
};

// Register a User to a course
exports.courseRegistration = (req, res) => {
  // require params: userId, courseId
  req.context.db.CourseRegistration.create({
    status: false,
    UserId: req.query.userId,
    CourseId: req.query.courseId
  })
    .then(function(registration) {
      res.json(registration);
    })
    .catch(err => console.log("Error while Users search : ", err));
};

// DELETE a course // require params: courseId
exports.destroyCourse = (req, res) => {
  req.context.db.Course.findByPk(req.query.courseId).then(course => {
    // delete registration linked to course
    req.context.db.CourseRegistration.destroy({
      where: {
        CourseId: req.query.courseId // deletes all course registrations whose course id match course getting deleted
      }
    }).then(() => {
      course.destroy();
      res.json({ message: "Course Successfully deleted" });
    });
  });
};
