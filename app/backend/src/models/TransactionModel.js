module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
        id: { 
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        },
        id_send: DataTypes.INTEGER,
        id_destiny: DataTypes.INTEGER,
        value: DataTypes.DOUBLE,
        date: DataTypes.DATE,
      },
      {
        timestamps: false,
        tableName: 'Transactions',
        underscored: true,
      });
  
    return Transaction;
  };

  //select e map p mopstra as transações