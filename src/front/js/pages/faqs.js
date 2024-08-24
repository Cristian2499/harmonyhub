import React from "react";
import { NavbarLogged } from "../component/NavbarLogged.jsx";
import { Footer } from "../component/Footer.jsx";
import "../../styles/faqs.css";

const Faqs = () => {
  return (
    <div>
      <NavbarLogged />
      <div className="container-fluid d-flex">
        <div className="container my-5">
          <h2 className="faq-title">
            Frequently asked <br /> questions
          </h2>
          <div className="accordion mt-4" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  1. What types of files can I upload to the platform?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can upload a variety of files, including covers, samples,
                  tracks, and any other audio format related to your musical
                  talents.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  2. Is it necessary to be a professional artist to join the
                  community?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  No, our platform is open to everyone, from emerging artists to
                  established musicians. We value diversity and talent in all
                  its forms.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  3. How can I connect with other artists or producers on the
                  platform?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can easily search for and contact other members of the
                  community through their profiles, sending direct messages or
                  invitations to collaborate on projects.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  4. Is there any cost to join the platform?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Our platform is free to join and use. However, there may be
                  premium options in the future for additional features.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  5. Can I collaborate with artists from other music genres?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes! We encourage collaboration across genres to create unique
                  and innovative projects.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  6. How do you protect my music rights?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  We take the protection of music rights very seriously. All
                  uploaded work remains under the artist's ownership, and we
                  provide tools to ensure your protection.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  7. Can I sell my music or services through the platform?
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  We are working on implementing a feature that allows artists
                  to sell their music and services directly through the
                  platform.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  8. What type of music projects can I find in the community?
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Our community is diverse and dynamic, which means you can find
                  and participate in a wide range of projects, from full
                  productions to collaborations on small segments of music.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  9. How can I highlight my profile or my work on the platform?
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                aria-labelledby="headingNine"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can highlight your work by actively participating in the
                  community, collaborating with other artists, and optimizing
                  your profile with a clear description and examples of your
                  best work.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  10. Can I collaborate with artists from other countries?
                </button>
              </h2>
              <div
                id="collapseTen"
                className="accordion-collapse collapse"
                aria-labelledby="headingTen"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, our platform allows you to connect and collaborate with
                  artists from all over the world, regardless of location.
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>Still have questions?</p>
            <button
              style={{
                backgroundColor: "#9296F0",
                border: "none",
                color: "white",
              }}
              className="btn"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faqs;
