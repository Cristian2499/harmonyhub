import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import Signup from "./component/Signup.jsx";
import { Signin } from "./pages/signin.js";
import Search from "./pages/search";
import Connected from "./pages/connected";
import ContactUs from "./pages/contactus";
import { MyProfile } from "./pages/myProfile.js";
import { Dashboard } from "./pages/dashboard.js";
import AboutUs from "./pages/aboutus";
import Faqs from "./pages/faqs";
import UserProfile from "./pages/userProfile";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Signin />} path="/signin" />
            <Route element={<MyProfile />} path="/myprofile/:id" />
            <Route element={<UserProfile />} path="/profile/:userId" /> {/* Nueva ruta */}
            <Route element={<Search />} path="/search" />
            <Route element={<Connected />} path="/connected" />
            <Route element={<ContactUs />} path="/contactus" />
            <Route element={<AboutUs />} path="/aboutus" />
            <Route element={<Faqs />} path="faqs" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
