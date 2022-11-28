const {HOST_DB} = process.env;
const {USER_DB} = process.env;
const {PASSWORD_DB} = process.env;
const {DB} = process.env;

const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: HOST_DB,
    user: USER_DB,
    password: PASSWORD_DB,
    port: 3306,
    database: DB,
  },
});

const databaseServiceFactory = () => {
  const TABLE = "Users";

  const getUser = async (email_user) => {
    const user = await knex(TABLE)
      .select()
      .where("email_user", email_user);
    //User retorna la informacion de la db si hay un correo que exista
    console.log(user);
    console.log(email_user)
    if (user.length === 0) {
      throw new Error("User not found");
    }
    return user[0];
  };

  return { getUser };
};

module.exports = {
  databaseServiceFactory,
};
