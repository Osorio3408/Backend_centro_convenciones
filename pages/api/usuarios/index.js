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
      var contraseña_hash = hashSync(contraseña_usuario,10);

      const result = await pool.query("INSERT INTO Users SET ?", {
        name_user: nombre_usuario,
        email_user: email_user,
        password_user: contraseña_hash,
        document_type: tipo_identificacion,
        document_number: numero_identificacion,
        phone_number_user: telefono_usuario
      });

      console.log(result);

      return res.json({
        message:"Usuario creado con exito!"
      });

    } catch (error) {
      return res.json({
        message:"El correo digitado ya esta usado, porfavor ingresa uno nuevo!",
        status: 404,
        error
      });
    }
    default:
      break;
  }
}
