import React from "react";
import { NavbarLogged } from "../component/NavbarLogged.jsx";
import { Footer } from "../component/Footer.jsx";
import bgImage from "../../img/aboutus.png";

const AboutUs = () => {
  return (
    <div>
      <NavbarLogged />
      <div className="d-flex container fluid">
        <div className="container justify-content-center row d-flex">
          <div className="my-5">
            <h1 className="text-center mb-4">About us</h1>
            <p className="text-center">
              On our platform, we believe in the transformative power of music
              and the magic that happens when talents come together. We are a
              space dedicated to emerging artists of all musical genres, where
              creativity and collaboration meet to bring new melodies and unique
              projects to life.
            </p>
            <p className="text-center">
              Here, every artist has the opportunity to showcase their essence,
              whether through covers, samples, tracks, or any musical talent
              they possess. Our community does not differentiate between the
              established and the new; everyone has a place and a voice. We are
              proud to be the bridge that connects musicians, producers, and
              creatives, allowing them to create the music of tomorrow together.
            </p>
            <p className="text-center">
              Our mission is simple: to break down barriers and build
              connections that drive musical innovation. Here, every note
              counts, every voice matters, and every collaboration is a step
              toward creating something truly special. Welcome to the musical
              family you've always dreamed of!
            </p>
          </div>

          <div className="container justify-content-center d-flex m-2 p-2">
            <img className="img-fluid" src={bgImage} />
          </div>

          <div className="mt-5">
            <div md={6} className="text-center mb-4">
              <h3 style={{ color: "#FFB847" }}>Vision</h3>
              <p>
                To be the leading platform in creating a global musical
                community where emerging and established artists come together
                to collaborate, share, and revolutionize music, transforming
                ideas into sounds that inspire the world.
              </p>
            </div>
            <div md={6} className="text-center mb-5">
              <h3 style={{ color: "#9E6CE5" }}>Mission</h3>
              <p>
                To foster creativity and collaboration among artists of all
                musical genres, providing an accessible and dynamic space where
                they can connect with producers and other creatives, thereby
                driving the creation of unique musical projects that break
                barriers and elevate the art of sound to new heights.
              </p>
            </div>
            <div className="mb-5 text-white">By bye.</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
