import { pool } from "../../../config/db";
import { hash, hashSync } from "bcryptjs";

export default async function handler(req, res) {
  console.log(req.method);

  switch (req.method) {
    case "GET":
      return await getUser(req, res);
    case "POST":
      return await sendUser(req, res);
  }
}

const getUser = async (req, res) => {
  try {
    const [result] = await pool.query("call listar_usuarios");
    console.log(result);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const sendUser = async (req, res) => {
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

    await pool.query(
      `call insertar_usuario('${nombre_usuario}','${email_user}','${contraseña_hash}','${tipo_identificacion}',${numero_identificacion},'${telefono_usuario}')`
    );

    return res.status(200).json("Usuario creado con exito!");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
