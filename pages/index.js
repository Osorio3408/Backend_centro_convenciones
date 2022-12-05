import "semantic-ui-css/semantic.min.css";
import Navbar_Events from "../components/Navbar_Events";
import Footer from "../components/Footer";
import withSession from "../lib/session";
import { useEffect, useState } from "react";
import ImageSearch from "../components/ImageSearch";
import ImageCard from "../components/ImageCard";
import Loading from "../components/Loading";
import AddImage from "../components/AddImage";

export default function Home({ user }) {
  console.log(user);

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const URL = `/api/eventos`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <>
      <Navbar_Events />
      <div className="container mx-auto">
        <ImageSearch searchText={(text) => setTerm(text)} />
        {!isLoading && events.length === 0 && <AddImage />}
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid justify-center items-center gap-4 md:grid-cols-2 md:ml-20 xl:grid-cols-4 xl:ml-0">
            {events.map((event) => (
              <ImageCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");

  if (user === undefined) {
    res.setHeader("location", "/home");
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }

  return {
    props: { user: req.session.get("user") },
  };
});
