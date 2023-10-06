import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import { Home, PageNotFound } from "./pages";
import Layout from "../Layout";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";
import SignUp from "./pages/SignUp";
import Github from "./pages/Github";
import { githubInfoLoader } from "../../functions/githubInfoLoader";
import { aboutPageImageLoader } from "../../functions/aboutPageImageLoader";
import ErrorBoundary from "../ErrorBoundary";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        {/* nested routes */}
        <Route id="home" path="" element={<Home />} />
        <Route id="login" path="login" element={<Login />} />
        <Route
          id="about"
          loader={aboutPageImageLoader}
          path="about"
          element={<About />}
          errorElement={<ErrorBoundary />}
        />
        <Route id="contact" path="contact" element={<Contact />} />
        <Route id="user" path="user/:userid" element={<User />} />
        <Route id="signup" path="signup" element={<SignUp />} />
        <Route
          id="github"
          loader={githubInfoLoader}
          path="github/:userid"
          element={<Github />}
          errorElement={<ErrorBoundary />}
        />
      </Route>
      <Route id="page-not-found" path="*" element={<PageNotFound />} />
    </>
  )
);
