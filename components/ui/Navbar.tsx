"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { link: "/", title: "About" },
  { link: "https://docs.google.com/document/d/1JPcQuFq7Q6bVZBsKSQt0ZHa_m2hjd2kun7DTmy2a9BM/edit?usp=sharing", title: "CV" },
  { link: "/contact", title: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full p-10">
      <ul className="flex justify-center gap-12 text-base text-gray">
        {pages.map(({ title, link }) => (
          <li
            key={title}
            className={cn("transition-[color] duration-300 hover:text-white", {
              "text-white": pathname === link,
            })}
          >
            <Link href={link}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
