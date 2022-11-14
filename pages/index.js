import Head from "next/head";
import withSession from "../lib/session";

export default function Home({ user }) {
  console.log(user);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <h2>Welcome to the home page {user.email_user}!</h2>

      <a href="/api/logout">Logout</a>
    </div>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");

  if (user === undefined) {
    res.setHeader("location", "/Home");
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }

  return {
    props: { user: req.session.get("user") },
  };
});
