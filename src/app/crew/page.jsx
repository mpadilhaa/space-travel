import CarouselCrew from "@/components/CarouselCrew";

export default function Crew() {
  return (
    <div
      className="bg-black 
      bg-crew-bg-mobile md:bg-crew-bg-tablet 
       lg:bg-crew-bg-desktop bg-no-repeat bg-cover h-screen "
    >
      <CarouselCrew />
    </div>
  );
}
