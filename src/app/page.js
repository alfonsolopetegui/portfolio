import Image from "next/image";
import styles from "./page.module.css";
import { Nav } from "@/components/Nav";
import { Banner } from "@/components/Banner";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import Contact from "@/components/Contact";
import { ScrollBtn } from "@/components/ScrollBtn";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className={styles["banner-wrapper"]} id="banner">
        <Banner />
      </div>
      <About />
      <Projects />
      <Contact />
      <ScrollBtn />
      <Footer />
    </>
  );
}
