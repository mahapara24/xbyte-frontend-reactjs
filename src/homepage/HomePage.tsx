import Hero from "../components/Hero";
import { Footer, News, TeamMembers, WhatWeDo } from "../components";
import Contact from "../components/Conatact";

function HomePage() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <TeamMembers />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
