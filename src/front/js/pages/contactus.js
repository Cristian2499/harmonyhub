import React from "react";
import { NavbarLogged } from "../component/NavbarLogged.jsx";
import { Footer } from "../component/Footer.jsx";
import bgImage from "../../img/contactus.png";

const ContactUs = () => {
  return (
    <div>
      <NavbarLogged />
      <div
        className="justify-content-center"
        style={{
          backgroundColor: "#9296F0",
          overflow: "hidden",
        }}
      >
        <div
          className="bg-white"
          style={{
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            width: "calc(100% - 5cm)",
            minHeight: "100px",
            margin: "5cm auto",
          }}
        >
          <div className="row w-80">
            <div className="col-md-6 p-5">
              <h1 class="text-dark fw-bold">Contact us</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="question" className="form-label">
                    Question
                  </label>
                  <textarea
                    className="form-control"
                    id="question"
                    rows="3"
                    placeholder="Enter question or feedback"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#9296F0", borderColor: "#9296F0" }}
                >
                  Submit
                </button>
              </form>
            </div>
            <div
              className="col-md-6 p-0"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <img
                className="img-fluid"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
