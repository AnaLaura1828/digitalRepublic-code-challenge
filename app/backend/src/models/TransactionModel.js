module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
        send: DataTypes.INTEGER,
        destiny: DataTypes.INTEGER,
        value: DataTypes.DOUBLE,
      },
      {
        timestamps: true,
        tableName: 'Transactions',
        underscored: false,
      });
  
    return Transaction;
  };
