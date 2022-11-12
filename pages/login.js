import { useState } from "react";
import { userServiceFactory } from "../clientServices/userService";
import useUser from "../lib/useUser";
import Image from "next/image";
import Navbar_login from "../components/Navbar_login";
import Footer_login from "../components/Footer_login";

const userService = userServiceFactory();

export default function Login() {
  const { user, mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  });

  const [email_user, setemail_user] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      mutateUser(await userService.login(email_user, password));
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const email_userHandler = (e) => {
    setemail_user(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      {!user ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <Navbar_login />
          <div className="image_header mb-16 w-36 mx-auto mt-4">
            <Image src="/logo.png" width="100" height="100" />
          </div>
          {!user.isLoggedIn && (
            <div className="form w-100 shadow-2xl h-px">
              <form
                onSubmit={handleSubmit}
                className="flex justify-center items-center  mx-auto ">
                <div className="flex flex-col mx-auto">
                  <input
                    type="text"
                    placeholder="Enter you email..."
                    name="uname"
                    required
                    onChange={email_userHandler}
                    className="w-80 h-10 text-center border-solid border-2 mb-16 border-black rounded-md placeholder:italic placeholder:text-slate-400"
                  />

                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="psw"
                    required
                    onChange={passwordHandler}
                    className="w-80 h-10 text-center mb-10 mt-4 border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
                  />

                  <div className="mx-auto">
                    <button
                      type="submit"
                      className="bg-sky-900 hover:bg-sky-800 text-teal-200 p-2 rounded-lg w-24 mt-4 ">
                      Enviar
                    </button>
                    <button className="bg-sky-900 hover:bg-sky-800  text-teal-200 p-2 rounded-lg w-24 mt-4 ">
                      <a href="./Home">Volver</a>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
          <Footer_login />
        </>
      )}
    </>
  );
}
