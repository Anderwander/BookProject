import userController from "./userController.js";

const getAll = async (req, res) => {
  let result = await userController.getAll();
  let user = req.user;
  if (result[0] === 0) {
    res.render("user/list", { users: result[1], user: user }); // llamamos al layout
  } else {
    let error = result[1];
    res.status(500).send({
      message: error.message || "some error occurred while retrieving users.",
    });
  }
};

const getById = async (req, res) => {
  let id = req.params.id;
  let result = await userController.getById(id);
  if (result[0] === 0) {
    let user = result[1];
    if (!user) {
      res.status(404).send({
        message: `Cannot find user with id=${id}.`,
      });
    } else {
      res.render("user/show", { user: user });
    }
  } else {
    let error = result[1];
    res.status(500).send({
      message: error.message || "some error occurred while retrieving user.",
    });
  }
};

const updateForm = async (req, res) => {
  let username = req.params.username;
  let user = await userController.getByUsername(username);
  res.render("user/edit", { userToEdit: user });
};

const update = async (req, res) => {
  let data = {
    avatar: req.body.avatar === "" ? null : req.body.avatar,
    username: req.body.username === "" ? null : req.body.username,
    password: req.body.hashedPassword === "" ? null : req.body.hashedPassword,
    email: req.body.email === "" ? null : req.body.email,
  };
  let username = req.params._id;
  let result = await userController.update(data, username);
  if (result[0] === 0) {
    res.redirect("/users");
  } else {
    let error = result[1];
    let errorUri = encodeURIComponent(error.message);
    res.redirect(`/users?error=${errorUri}`);
  }
};

const deletes = async (req, res) => {
  let username = req.params.username;
  let result = await userController.deletes(username);
  res.redirect("/users");
};

export default {
  //showProfile,
  getAll,
  getById,
  update,
  updateForm,
  deletes,
};
