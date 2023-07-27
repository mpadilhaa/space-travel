import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <div
      className="bg-black 
    bg-home-bg-mobile md:bg-home-bg-tablet 
     lg:bg-home-bg-desktop bg-no-repeat bg-cover min-h-screen"
    >
      <HomeContent />
    </div>
  );
}
