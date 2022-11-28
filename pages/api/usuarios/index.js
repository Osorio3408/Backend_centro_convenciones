import { pool } from "../../../config/db";
import { hash, hashSync } from "bcryptjs";

export default async function handler(req, res) {
  console.log(req.method);

  switch (req.method) {
    case "GET":
      return res.status(200).json("Recibiendo usuarios");

    case "POST":
      try {
        const {
          nombre_usuario,
          email_user,
          tipo_identificacion,
          numero_identificacion,
          telefono_usuario,
          contraseña_usuario,
        } = req.body;

        //Se encripta la contraseña recibida y se guarda en la variable
        var contraseña_hash = hashSync(contraseña_usuario, 10);

        await pool.query("INSERT INTO Users SET ?", {
          name_user: nombre_usuario,
          email_user: email_user,
          password_user: contraseña_hash,
          document_type: tipo_identificacion,
          document_number: numero_identificacion,
          phone_number_user: telefono_usuario,
        });

        return res.status(200).json("Usuario creado con exito!");
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    default:
      break;
  }
}
