import React from "react";
import Layout from "./components/Layout";
import { GradientColorScheme } from "./utils/gradientEnum";
import SlideWrapper from "./components/Slide/SlideWrapper/SlideWrapper";

const Hero = React.lazy(() => import("./components/Hero/Hero"));
const Slide = React.lazy(() => import("./components/Slide/Slide"));

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero image="./images/menu-1.png" text="KAI LENNY" imageAlt="waves" />
        <Hero
          image="./images/menu-2.png"
          text="ORLANDO DUQUE"
          imageAlt="orlando"
        />
        <SlideWrapper />
        <Slide
          image="./images/bg-slide-2.png"
          imageAlt="bg-slide-2"
          imageHeight="100%"
          text="ORLANDO DUQUE"
          gradientHeight={"40%"}
          gradientColor={GradientColorScheme.BlueToTeal}
        />
        <Slide
          image="./images/bg-slide-3.png"
          imageAlt="bg-slide-3"
          imageHeight="70%"
          text="ORLANDO DUQUE"
          gradientHeight={"50%"}
          gradientColor={GradientColorScheme.BlueToLightBlueToOceanBlue}
        />
        <Slide
          image="./images/bg-slide-4.png"
          imageAlt="bg-slide-4"
          imageHeight="70%"
          text="ORLANDO DUQUE"
          gradientHeight={"60%"}
          gradientColor={GradientColorScheme.BlueToTeal}
        />
        <Slide
          image="./images/bg-slide-5.png"
          imageAlt="bg-slide-5"
          imageHeight="80%"
          text="ORLANDO DUQUE"
          gradientHeight={"50%"}
          gradientColor={GradientColorScheme.DarkBlueToOceanBlue}
        />
        <Slide
          text="ORLANDO DUQUE"
          gradientHeight={"100%"}
          gradientColor={GradientColorScheme.GradientBackground}
        />
      </Layout>
    </div>
  );
}

export default App;
