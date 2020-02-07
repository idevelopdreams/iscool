// GET all courses for homepage
exports.home = (req, res) => {
  res.render("home");
};

// GET a single course
exports.singleCourse = (req, res) => {
  res.render("course");
};

exports.createCourse = (req, res) => {
  // logic
};
