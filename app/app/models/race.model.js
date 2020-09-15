module.exports = (sequelize, Sequelize) => {
  const Race = sequelize.define("race", {
    // Id: {
    //   type: Sequelize.BIGINT,
    // },
    Name: {
      type: Sequelize.STRING,
    },
    Description: {
      type: Sequelize.STRING,
    },
  });
  return Race;
};
