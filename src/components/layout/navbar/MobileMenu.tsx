"use client";

import { Menu } from "lucide-react";
import NavLinks from "./NavLinks";

export default function MobileMenu() {
  return (
    <div className="dropdown lg:hidden">
      <button tabIndex={0} className="btn btn-ghost">
        <Menu size={22} />
      </button>

      <ul
        tabIndex={0}
        className="menu dropdown-content mt-3 z-50 w-56 rounded-box bg-base-100 p-2 shadow"
      >
        <NavLinks />

        <div className="divider my-1"></div>

        <li>
          <a>Login</a>
        </li>

        <li>
          <a>Register</a>
        </li>
      </ul>
    </div>
  );
}