import Navbar_Events from "../components/Navbar_Events";
import Footer from "../components/Footer";
import withSession from "../lib/session";
import { useEffect, useState } from "react";
import ImageSearch from "../components/ImageSearch";
import ImageCard from "../components/ImageCard";

export default function Home({ user }) {
  console.log(user);

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=31134368-cbf7aafd582ab6e1e41ca089a&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <>
      <Navbar_Events />
      <div className="container mx-auto">
        <ImageSearch searchText={(text) => setTerm(text)} />
        {!isLoading && images.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No Images Found
          </h1>
        )}
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        ) : (
          <div className="grid justify-center items-center gap-4 md:grid-cols-2 md:ml-20 xl:grid-cols-4 xl:ml-0">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
      {/* <h2>Welcome to the home page {user.email_user}!</h2> */}

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
