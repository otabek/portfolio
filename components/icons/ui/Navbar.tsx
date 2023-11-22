"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { link: "/", title: "About" },
  { link: "", title: "Resume" },
  { link: "/contact", title: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full p-10">
      <ul className="flex justify-center gap-12 text-base text-gray">
        {pages.map(({ title, link }) => (
          <li key={title} className={cn({ "text-white": pathname === link })}>
            <Link href={link}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
