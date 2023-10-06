import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import { Home, PageNotFound } from "./pages";
import Layout from "../app/Layout";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        {/* nested routes */}
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
