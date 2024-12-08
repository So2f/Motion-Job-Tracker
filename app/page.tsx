import Image from "next/image";
import Header from "./components/Header";
import Hero from "./Hero/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
