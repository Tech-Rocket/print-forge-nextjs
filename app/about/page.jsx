import aboutHeroImg from "../../public/images/about-hero-image.png";
import Image from "next/image";
import { Separator } from "../../components/ui/separator";

export default function About() {
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
        <h1 className="text-5xl font-bold">Empowering makers worldwide</h1>
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
      <Separator className="border border-gray-300 my-7" />
      <div></div>
    </>
  );
}
