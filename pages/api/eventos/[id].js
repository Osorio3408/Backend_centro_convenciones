import { pool } from "../../../config/db";

export default async function handleer(req, res) {
  switch (req.method) {
    case "GET":
      return await getEvent(req, res);
    case "DELETE":
      return await deleteEvent(req, res);
  }
}

const getEvent = async (req, res) => {
  const { id } = req.query;
  const [result] = await pool.query(`call obtener_evento(${[id]})`);
  return res.status(200).json(result[0]);
};

const deleteEvent = async (req, res) => {
  try {
    console.log(req.query);
    const { id } = req.query;
    const [result] = await pool.query(`call eliminar_evento(${id})`);
    console.log(result);
    return res.status(200).json("Eliminado exisotasamente!");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
