import { pool } from "../../../config/db";

export default async function index(req, res) {
  console.log(req.method);

  switch (req.method) {
    case "GET":
      return await getEvents(req, res);
    case "POST":
      return await sendEvents(req, res);
  }
}

const getEvents = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM events");
    console.log(result);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const sendEvents = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.body.data);
    const { file } = req.body;
    const { name, description } = req.body.data;

    await pool.query(
      `call insertar_evento('${file}','${name}','${description}')`
    );

    return res.status(200).json("Usuario creado con exito!");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
