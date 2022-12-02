import "semantic-ui-css/semantic.min.css";

import Footer from "../components/Footer";
import withSession from "../lib/session";
import { useEffect, useState } from "react";
import ImageSearch from "../components/ImageSearch";
import ImageCard from "../components/ImageCard";
import Loading from "../components/Loading";
import Navbareventsadmin from "../components/Navbareventsadmin";
import ImageSearchAdmin from "../components/ImageSearchAdmin";

const Adminevents = () => {
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
      <Navbareventsadmin />
      <div className="container mx-auto">
        <ImageSearchAdmin searchText={(text) => setTerm(text)} />
        {!isLoading && events.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No Images Found
          </h1>
        )}
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid justify-center items-center gap-4 md:grid-cols-2 md:ml-20 xl:grid-cols-4 xl:ml-0">
            {events.map((event) => (
              <ImageCard key={event.id_event} event={event} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Adminevents