import { Toggle } from "@/components/ui/toggle";
import happy from "@/public/icon-happy.png";
import sad from "@/public/icon-sad.png";
import neutral from "@/public/icon-neutral.png";
import veryHappy from "@/public/icon-very-happy.png";
import confused from "@/public/icon-confused.png";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const NewMood = () => {
  return (
    <div>
      <Carousel className="flex justify-center">
        <CarouselContent>
          <CarouselItem className="flex justify-center">
            <Image src={happy} alt="happy" />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <Image src={veryHappy} alt="veryHappy" />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <Image src={neutral} alt="neutral" />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <Image src={confused} alt="confused" />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <Image src={sad} alt="sad" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
