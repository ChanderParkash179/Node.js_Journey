const user = require("../model/user_model");

// get all users
async function listOfUser(req, res) {
  const users = await user.find({});
  return res.status(200).json({ responseData: users });
}

async function getUser(req, res) {
  const founded_user = await user.findById(req.params.id);
  if (!founded_user)
    res
      .status(400)
      .json({ responseMessage: "no user available!", responseData: null });

  return res
    .status(200)
    .json({
      responseMessage: "user data found successfully!",
      responseData: founded_user,
    });
}

async function updateUser(req, res) {
  await user.findByIdAndUpdate(req.params.id, {
    lastName: "Changed",
  });
  const updateUser = await user.findById(req.params.id);
  return res.status(201).json(updateUser);
}

async function deleteUser(req, res) {
  await user.findByIdAndDelete(req.params.id);
  return res.status(200).json({ response: "deleted" });
}

async function createUser(req, res) {
  const body = req.body;

  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All Fields are compulsory!" });
  }

  const result = await user.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  return res.status(201).json({ msg: "success", response: result });
}

module.exports = {
  listOfUser,
  getUser,
  updateUser,
  deleteUser,
  createUser,
};
