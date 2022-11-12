import * as bcrypt from "bcryptjs";

const authServiceFactory = () => {
  const validate = async (password, contraseña_hash) => {
    return await bcrypt.compare(password, contraseña_hash);
  };

  return { validate };
};

module.exports = {
  authServiceFactory,
};
