const userService = require("../services/userService");
const middleware = require("../middleware/validateLogin");

const createNewUser = async (req, res) => {
  const newAccount = await userService.createUser(req.body);
  return res.status(201).json(newAccount);
  //   const { error } = middleware.validate(req.body);
  //   if (error) return res.status(400).json({ message: error.details[0].message });

  //   const { type, message } = await userService.createUser(req.body);

  //   if (type) return res.status(type).json({ message });
  //   res.status(200).json(message);
};

const getAllController = async (_req, res) => {
  const accounts = await userService.getAll();
  return res.status(200).json(accounts);
};

const getByIds = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await userService.getById(id);

  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  createNewUser,
  getAllController,
  getByIds,
};
