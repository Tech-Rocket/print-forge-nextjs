import aboutHeroImg from "../../public/images/about-hero-image.png";
import Image from "next/image";
import { Separator } from "../../components/ui/separator";
import AboutCard from "./about-card";
import { GoStack } from "react-icons/go";
import { RiGlobalLine } from "react-icons/ri";
import { CiFlag1 } from "react-icons/ci";
import { Montserrat_Alternates } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function About() {
  const aboutData = [
    {
      id: 1,
      icon: <GoStack className="text-3xl" />,
      title: "100K+ Models",
      description:
        "Access our vast library of community-created 3D models, from practical tools to artistic creations.",
    },
    {
      id: 2,
      icon: <RiGlobalLine className="text-3xl" />,
      title: "Active Community",
      description:
        "Join thousands of makers who share tips, provide feedback, and collaborate on projects.",
    },
    {
      id: 3,
      icon: <CiFlag1 className="text-3xl" />,
      title: "Free to Use",
      description:
        "Most models are free to download, with optional premium features for power users.",
    },
  ];
  return (
    <>
      <section className="px-4 space-y-5">
        <Image
          src={aboutHeroImg}
          alt="about page's hero image"
          width={3000}
          height={3000}
          className="w-full h-[20rem]"
        />
        <p className="font-medium uppercase tracking-wide">about printforge</p>
        <h1 className={`${montserratAlternates.className} text-5xl font-bold`}>
          Empowering makers worldwide
        </h1>
        <div className="text-xl font-medium text-gray-500 space-y-6">
          <p>
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers to
            share and discover amazing STL files for 3D printing.
          </p>
          <p>
            Our mission is to foster a vibrant community where creativity meets
            technology, enabling anyone to bring their ideas to life through 3D
            printing.
          </p>
        </div>
      </section>
      <Separator className="border border-gray-300 my-8" />
      <section className="px-4 space-y-8 mb-8">
        {aboutData.map((data) => (
          <AboutCard
            key={data.id}
            title={data.title}
            icon={data.icon}
            description={data.description}
          />
        ))}
      </section>
    </>
  );
}
