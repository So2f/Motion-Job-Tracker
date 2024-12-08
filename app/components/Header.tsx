import { Button } from "@/components/ui/button";
import Notion from "@/public/images/notion.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="text-[#050505] flex text-xl font-medium justify-between p-4 px-10 items-center">
      <div className="flex gap-x-5 items-center">
        <div className="flex items-center gap-2">
          <Image src={Notion} width={40} height={40} alt="Notion Logo" />
          <div>Motion</div>
        </div>
        <div>Product</div>
        <div>Solution</div>
        <div>Pricing</div>
      </div>
      <div className="flex gap-x-5">
        <div>Request a Demo</div>
        <div>Log in</div>
        <Button>Get Motion Free</Button>
      </div>
    </div>
  );
}
