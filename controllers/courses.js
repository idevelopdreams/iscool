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
  req.context.db.Course.findByPk(req.params.id, {
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
  // require req.body: userId, title
  req.context.db.Course.create({
    title: req.body.title,
    UserId: req.body.userId
  })
    .then(course => {
      // return course created
      res.json(course);
    })
    .catch(err => {
      console.log("Error while creating course : ", err);
    });
};

// DELETE a course
exports.destroyCourse = (req, res) => {
  // require params: id
  req.context.db.Course.findByPk(req.params.id).then(course => {
    course.destroy().then(() => {
      res.json({ message: "Course Successfully deleted" });
    });
  });
};

// Register a User to a course
exports.courseRegistration = (req, res) => {
  // require req.body: userId, courseId
  req.context.db.Course.findByPk(req.body.courseId) // find course
    .then(function(course) {
      course
        .addStudent(req.body.userId) // register user to course
        .then(function() {
          res.json({ message: "Registration Successful" });
        })
        .catch(err => console.log("Error while registering user: ", err));
    })
    .catch(err => console.log("Error while looking up user: ", err));
};

// DELETE a course registration
exports.unregister = (req, res) => {
  // require params: id
  req.context.db.CourseRegistration.findByPk(req.params.id).then(
    registration => {
      registration.destroy().then(() => {
        res.json({ message: "Successfully Unregister" });
      });
    }
  );
};

// POST create a course module
exports.createCourseModule = (req, res) => {
  const m = {
    UserId: req.body.userId, // change this to current user logged in
    title: req.body.title,
    overview: req.body.overview
  };
  req.context.db.Course.findByPk(req.body.courseId) // find course
    .then(course => {
      req.context.db.Module.create(m)
        .then(module => {
          course
            .addModule(module)
            .then(() => {
              // return module created
              res.json({
                message: "Course module created Successfully ",
                module: module
              });
            })
            .catch(err => {
              console.log("Error associating course to module: ", err);
            });
        })
        .catch(err => {
          console.log("Error while creating module: ", err);
        });
    })
    .catch(err => console.log("Error while looking up Course: ", err));

  // require req.body: userId, title
};
// DELETE course module
