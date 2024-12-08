import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import dash from "@/public/images/image.png";
import Header from "../components/Header";
import { InputForm } from "../components/Form";

const Hero = () => {
  return (
    <div className="text-[#050505] flex flex-col items-center">
      <div>
        <div className=" text-6xl font-bold leading-snug text-center mt-20">
          Track manage, win your dream job
          <br /> - All in one place
        </div>
      </div>
      <div className="text-xl text-center font-medium mt-6">
        Motion simplifies job tracking to help you
        <br /> focus on what matters most.
      </div>
      <div className="mt-6">
        <Button>
          Get Motion Free <ChevronRight />
        </Button>
      </div>

      <section className="mt-60">
        <InputForm />
      </section>

      <section className="mt-40 flex flex-col text-center gap-3"></section>
    </div>
  );
};

export default Hero;
