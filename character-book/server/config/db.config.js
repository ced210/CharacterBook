module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "!Book!17",
  DB: "characterbook",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
