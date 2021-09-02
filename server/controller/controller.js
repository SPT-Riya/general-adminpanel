var projectDb = require("../model/model");
const RequestFailed = require("../response/RequestFailed  ");

exports.create = (req, res) => {
  if (!req.body.projectName.trim().length) {
    return RequestFailed(res, 400, "projectname");
  }
  if (!req.body.desc.trim().length) {
    return RequestFailed(res, 400, "description");
  }

  const newProject = new projectDb({
    projectName: req.body.projectName,
    desc: req.body.desc,
    image: req.body.image,
    date: new Date(),
  });
  newProject
    .save(newProject)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.send(500).json(err.message));
};

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    projectDb
      .findById(id)
      .then((data) => res.status(200).json(data))
      .catch((err) =>
        res.status(404).json(err.message || "cant find project with this id")
      );
  } else {
    projectDb
      .find()
      .then((data) => res.json(data))
      .catch((err) => console.log(err.message || "cant get data"));
  }
};

exports.update = (req, res) => {
  const id = req.params.id;
  projectDb
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  projectDb
    .findByIdAndDelete(id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).send({ message: err.message }));
};
