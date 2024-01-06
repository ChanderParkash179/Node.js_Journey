module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('customer', {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    age: {
      type: DataTypes.INTEGER
    }
  });

  return Customer;
};