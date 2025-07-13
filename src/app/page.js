"use client"
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import HomePageColleges from "./components/HomePageColleges";
import ResearchPapers from "./components/ResearchPapers";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <div>
      <Banner />
      <HomePageColleges />
      <Gallery />
      <ResearchPapers />
      <Reviews />
    </div>
  );
}
