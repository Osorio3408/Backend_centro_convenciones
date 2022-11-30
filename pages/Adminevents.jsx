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
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const URL = `https://pixabay.com/api/?key=31134368-cbf7aafd582ab6e1e41ca089a&q=${term}&image_type=photo&pretty=true`;
  

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <>
      <Navbareventsadmin />
      <div className="container mx-auto">
        <ImageSearchAdmin searchText={(text) => setTerm(text)} />
        {!isLoading && images.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No Images Found
          </h1>
        )}
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid justify-center items-center gap-4 md:grid-cols-2 md:ml-20 xl:grid-cols-4 xl:ml-0">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Adminevents