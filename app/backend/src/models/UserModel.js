module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    balance: DataTypes.DOUBLE,
  },
    {
      timestamps: false,
      tableName: 'Users',
      underscored: true,
    });
    return User;
}
