module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "29061998",
  DB: "Authentification",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};