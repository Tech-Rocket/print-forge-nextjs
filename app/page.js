import heroImg from "@/public/images/Frame4.png";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="space-y-5 px-3">
        <h1 className="text-5xl font-bold">
          Discover what’s possible with 3D printing
        </h1>
        <p className="text-xl font-medium text-gray-500">
          Join our community of creators and explore a vast library of
          user-submitted models.
        </p>
        <button className="uppercase px-6 py-2.5 border-2 border-black cursor-pointer font-semibold">
          browse models
        </button>
      </div>

      <Image
        src={heroImg}
        alt="hero image"
        width={3000}
        height={3000}
        className="w-full h-[23rem] mt-6 mb-2"
      />
    </section>
  );
}
