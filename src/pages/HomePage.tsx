import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Hero = React.lazy(() => import("../components/Hero/Hero"))

function HomePage() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Link to="/launches">
        <Hero image="./images/menu-1.jpg" text="Launches" imageAlt="launch" />
      </Link>
      <Link to="/rockets">
        <Hero image="./images/menu-2.jpg" text="Rockets" imageAlt="rockets" />
      </Link>
    </Suspense>
  );
}

export default HomePage;
