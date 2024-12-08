import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import dash from "@/public/images/image.png";

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
        <Image
          className="shadow-2xl rounded-xl"
          src={dash}
          width={1024}
          height={720}
          alt="Dashboard Preview"
        ></Image>
      </section>

      <section className="mt-40 flex flex-col text-center gap-3">
        <div className="text-6xl font-bold">Track your path to success.</div>
        <div className="text-lg font-normal">
          Helping individuals land their dream jobs and recruiters find top
          talent.
        </div>
        <div>
          <Button>
            See how Motion works <ArrowRight />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
