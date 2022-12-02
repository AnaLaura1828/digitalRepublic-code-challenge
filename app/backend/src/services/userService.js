const { User } = require('../models');

const createUser = async ({ name, cpf, balance }) => {
    const result = await User.create({
        name,
        cpf,
        balance
    }); 
    return result
};

const getAll = async () => {
    const result = await User.findAll();
    return result
};

const getById = async (id) => {
    const idUser = await User.findOne({
      where: { id },
      attributes: { exclude: 'cpf' },
    });
  
    if (!idUser) {
        return { type: 404, message: 'User does not exist' };
    }
    return { type: null, message: idUser };
  };

const upDateId = async (id, balance) => {
    const [result] = await User.update(
      { balance },
      { where: { id } },
    );
    return result;
  }

module.exports = {
    createUser,
    getAll,
    getById,
    upDateId,
}
