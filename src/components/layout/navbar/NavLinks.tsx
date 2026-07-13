"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={clsx(
              "font-medium transition-colors hover:text-primary",
              pathname === link.href && "text-primary"
            )}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
}