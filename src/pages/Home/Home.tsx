import type { FC } from "react";
import HeroSection from "./HeroSection/HeroSection";
import Header from "../../components/Header/Header";
import PostsSection from "./PostsSection/PostsSection";
import Footer from "../../components/Footer/Footer";

const Home: FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PostsSection />
      </main>
      <Footer />

    </>
  );
}
export default Home;