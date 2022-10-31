import { pool } from "../../../config/db";

export default async function handler(req, res) {
  console.log(req.method);

  switch (req.method) {
    case "GET":
      return res.status(200).json("Recibiendo usuarios");

    case "POST":
      const {
        nombre_usuario,
        correo_usuario,
        tipo_identificacion,
        numero_identificacion,
        telefono_usuario,
        contraseña_usuario,
      } = req.body;

      const result = await pool.query("INSERT INTO Usuarios SET ?", {
        nombre_usuario: nombre_usuario,
        correo_usuario: correo_usuario,
        tipo_identificacion: tipo_identificacion,
        numero_identificacion: numero_identificacion,
        telefono_usuario: telefono_usuario,
        contraseña_usuario: contraseña_usuario,
      });

      console.log(result);

      return res.status(200).json("Creando usuario");

    default:
      break;
  }
}
