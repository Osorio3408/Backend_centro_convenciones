import { useState } from "react";
import { userServiceFactory } from "../clientServices/userService";
import useUser from "../lib/useUser";
import Image from "next/image";
import Navbar_login from "../components/Navbar_login";
import Footer_login from "../components/Footer_login";
import Loading from "../components/Loading";
import "semantic-ui-css/semantic.min.css";
import Link from "next/link";

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
        <Loading />
      ) : (
        <>
          <Navbar_login />
          <div className="image_header mb-16 w-28 mx-auto mt-4">
            <Image src="/logo.png" width="100" height="200" alt="Logo" />
          </div>
          {!user.isLoggedIn && (
            <div className="form w-100 shadow-2xl h-px ">
              <form
                onSubmit={handleSubmit}
                className="flex justify-center items-center  mx-auto xl:w-1/4 bg-glass xl:h-96">
                <div className="flex flex-col mx-auto">
                  <label htmlFor="uname" className="text-white text-lg">
                    Correo electronico:
                  </label>
                  <input
                    type="text"
                    placeholder="Ingresa correo..."
                    name="uname"
                    id="uname"
                    required
                    onChange={email_userHandler}
                    className="w-80 h-10 text-center border-solid border-2 mb-16 border-black rounded-md placeholder:italic placeholder:text-slate-400"
                  />
                  <label htmlFor="psw" className="text-white text-lg">
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    placeholder="Ingresa contraseña..."
                    name="psw"
                    id="psw"
                    required
                    onChange={passwordHandler}
                    className="w-80 h-10 text-center mb-10 mt-0 border-solid border-2 border-black rounded-md placeholder:italic placeholder:text-slate-400"
                  />

                  <div className="flex mx-auto gap-x-5">
                    <button
                      type="submit"
                      className="text-teal-200  border-solid border-2 border-white bg-sky-900 hover:bg-sky-800 hover:border-dotted p-2 rounded-lg w-24 mt-4 ">
                      Enviar
                    </button>
                    <button className="border-solid border-2 border-white bg-sky-900 hover:bg-sky-800 hover:border-dotted p-2 rounded-lg w-24 mt-4 ">
                      <Link href="./home" className="text-teal-200 ">
                        Volver
                      </Link>
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
