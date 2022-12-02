const userService = require("../services/userService");

const createNewUser = async (req, res) => {
  try {
    const newAccount = await userService.createUser(req.body);
    if (!newAccount) return res.status(404).json({ message: ' Invalid register' })
    return res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ message: 'Registration not performed'})
  }
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

const upDate = async (req, res) => {
  try {
    const { balance } = req.body;
    const { id } = req.params;
    const updatedUser = await userService.upDateId(id, balance);

    if (!updatedUser) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json({ message: 'User update sucessely!' });    
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message:' Error !' });
  }
}

module.exports = {
  createNewUser,
  getAllController,
  getByIds,
  upDate,
};
