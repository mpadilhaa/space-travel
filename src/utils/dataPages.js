import imgEuropeDesktop from "../../public/destination/image-europa.png";
import imgMarsDesktop from "../../public/destination/image-mars.png";
import imgMoonDesktop from "../../public/destination/image-moon.png";
import imgTitanDesktop from "../../public/destination/image-titan.png";
import imgDouglas from "../../public/crew/image-douglas-hurley.png";
import imgMark from "../../public/crew/image-mark-shuttleworth.png";
import imgVictor from "../../public/crew/image-victor-glover.png";
import imgAnousheh from "../../public/crew/image-anousheh-ansari.png";
import imgLaunchMobile from "../../public/technology/image-launch-vehicle-landscape.png";
import imgSpaceCapsuleMobile from "../../public/technology/image-space-capsule-landscape.png";
import imgSpaceportMobile from "../../public/technology/image-spaceport-landscape.png";
import imgLaunchDesktop from "../../public/technology/image-launch-vehicle-portrait.png";
import imgSpaceCapsuleDesktop from "../../public/technology/image-space-capsule-portrait.png";
import imgSpaceportDesktop from "../../public/technology/image-spaceport-portrait.png";

export const dataDestination = [
  {
    img: imgMoonDesktop,
    title: "MOON",
    text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    descDistance: "AVG. DISTANCE",
    distance: "384,400. KM",
    descTravel: "EST. TRAVEL TIME",
    travelTime: "3 DAYS",
  },
  {
    img: imgMarsDesktop,
    title: "MARS",
    text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    descDistance: "AVG. DISTANCE",
    distance: "3225 MIL. KM",
    descTravel: "EST. TRAVEL TIME",
    travelTime: "9 MONTHS",
  },
  {
    img: imgEuropeDesktop,
    title: "EUROPA",
    text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    descDistance: "AVG. DISTANCE",
    distance: "628 MIL. KM",
    descTravel: "EST. TRAVEL TIME",
    travelTime: "3 YEARS",
  },
  {
    img: imgTitanDesktop,
    title: "TITAN",
    text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    descDistance: "AVG. DISTANCE",
    distance: "1.6 BIL. KM",
    descTravel: "EST. TRAVEL TIME",
    travelTime: "7 YEARS",
  },
];

export const dataCrew = [
  {
    img: imgDouglas,
    subTitle: "Commander ",
    title: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    img: imgMark,
    subTitle: "Mission Specialist  ",
    title: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    img: imgVictor,
    subTitle: "PILOT  ",
    title: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  {
    img: imgAnousheh,
    subTitle: "Flight Engineer  ",
    title: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
];

export const dataTechnology = [
  {
    img: {
      imageDesktop: imgLaunchDesktop,
      imageMobile: imgLaunchMobile,
    },
    subTitle: "THE TERMINOLOGY…  ",
    title: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    img: {
      imageDesktop: imgSpaceportDesktop,
      imageMobile: imgSpaceportMobile,
    },
    subTitle: "THE TERMINOLOGY…  ",
    title: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    img: {
      imageDesktop: imgSpaceCapsuleDesktop,
      imageMobile: imgSpaceCapsuleMobile,
    },
    subTitle: "THE TERMINOLOGY…  ",
    title: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
