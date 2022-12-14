const Brands = (sequelize, DataTypes) => {
  const Brands = sequelize.define("brands", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        min: 3,
        max: 20,
      },
    },
  });
  return Brands;
};

Brands.sync({ alter: true });

module.exports = Brands;
