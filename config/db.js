import { createPool } from "mysql2/promise";

const {HOST_DB} = process.env;
const {USER_DB} = process.env;
const {PASSWORD_DB} = process.env;
const {DB} = process.env;


const pool = createPool({
  host: HOST_DB,
  user: USER_DB,
  password: PASSWORD_DB,
  port: 3306,
  database: DB,
});

export { pool };
