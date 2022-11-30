import { databaseServiceFactory } from "../../services/databaseService";
import { authServiceFactory } from "../../services/authService";
import withSession from "../../lib/session";

const dbService = databaseServiceFactory();
const authService = authServiceFactory();

export default withSession(async (req, res) => {
  const ERROR_CREDENTIALS = "Error, correo o contraseña incorrecta!";

  const method = req.method.toLowerCase();
  console.log(method);
  const { email_user, password } = req.body;
  console.log(req.body);

  if (method !== "post") {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    console.log(dbService);
    const userCredentials = await dbService.getUser(email_user);
    //userCredentials contiene toda la consula usando el .password_user saca la contraseña
    if (await authService.validate(password, userCredentials.password_user) === true) {
      console.log({email_user})
      await saveSession({ email_user }, req);
      res.status(200).json({ email_user });
      return;
    }
  } catch (error) {
    console.log(error);
  }
  res.status(403).json({ error: ERROR_CREDENTIALS });
});

async function saveSession(user, request) {
  request.session.set("user", user);
  await request.session.save();
}
