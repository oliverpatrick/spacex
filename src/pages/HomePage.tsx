import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout";

function HomePage() {
  return (
    <>
      <Link to="/launches">
        <Hero image="./images/menu-1.jpg" text="Launches" imageAlt="launch" />
      </Link>
      <Link to="/rockets">
        <Hero image="./images/menu-2.jpg" text="Rockets" imageAlt="rockets" />
      </Link>
    </>
  );
}

export default HomePage;
