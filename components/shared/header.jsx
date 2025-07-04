import Image from "next/image";
import printLogo from "../../public/images/printforge-logomobile.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[3.5rem] flex items-center justify-between px-3 mb-[2rem]">
      <Link href="/">
        <Image
          className="h-10 w-10 cursor-pointer"
          src={printLogo}
          alt="print logo"
          width={3000}
          height={3000}
        />
      </Link>
      <ul className="flex gap-5 uppercase text-slate-600">
        <li className="cursor-pointer">
          <Link href="#">3d model</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </header>
  );
}
