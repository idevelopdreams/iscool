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
exports.destroyModule = (req, res) => {
  // require params: id
  req.context.db.Module.findByPk(req.params.id).then(modul => {
    modul.destroy().then(() => {
      res.json({ message: "Module Successfully deleted" });
    });
  });
};

// POST a lesson inside a module
exports.createModuleLesson = (req, res) => {
  // require req.body: userId, courseId
  const lesson = {
    UserId: req.body.userId, // change this to current user logged in
    name: req.body.name,
    concepts: req.body.concepts,
    video: req.body.video,
    cover: req.body.cover
  };
  req.context.db.Module.findByPk(req.body.moduleId) // find module
    .then(m => {
      req.context.db.Lesson.create(lesson)
        .then(l => {
          m.addLesson(l) // associate lesson with module
            .then(() => {
              res.json({ message: "Lesson successfully created", lesson: l });
            })
            .catch(err =>
              console.log("Error while adding lesson inside module: ", err)
            );
        })
        .catch(err => {
          console.log("Error while creating lesson: ", err);
        });
    })
    .catch(err => console.log("Error while looking up module: ", err));
};
