// GET all modules
exports.allModules = (req, res) => {
  req.context.db.Module.findAll({ where: "", include: ["creator"] })
    .then(function(modules) {
      // return an array of courses and there associations
      res.json(modules);
    })
    .catch(err => {
      console.log("Error while finding modules: ", err);
    });
};

// GET a module
exports.singleModule = (req, res) => {
  // require params: courseId
  req.context.db.Module.findByPk(req.query.moduleID, {
    include: ["creator"]
  })
    .then(function(module) {
      res.json(module);
    })
    .catch(err => {
      console.log("Error fetching module: ", err);
    });
};

// POST a module
exports.createModule = (req, res) => {
  // require req.body: userId, title
  req.context.db.Module.create({
    title: req.body.title,
    overview: req.body.userId,
    UserId: req.body.userId
  })
    .then(module => {
      // return course created
      res.json(module);
    })
    .catch(err => {
      console.log("Error while creating module: ", err);
    });
};

// DELETE a module

// DELETE a course registration
