import axios from "axios";

const userServiceFactory = () => {
  function login(email_user, password) {
    return axios.post(`/api/auth`, { email_user, password });
  }

  return { login };
};

module.exports = {
  userServiceFactory,
};
