import { pool } from "../../../config/db";

export default async function index(req, res) {
  console.log(req.method);

  switch (req.method) {
    case "GET":
      return res.status(200).json("Recibiendo usuarios");

    case "POST":
      try {
        console.log(req.body);
        console.log(req.body.data);
        const { file } = req.body;
        const { name, description } = req.body.data;

        await pool.query("INSERT INTO Events SET ?", {
          image_event: file,
          name_event: name,
          description_event: description,
        });

        return res.status(200).json("Usuario creado con exito!");
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    default:
      break;
  }
}
