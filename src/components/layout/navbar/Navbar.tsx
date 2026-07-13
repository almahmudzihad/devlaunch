import Link from "next/link";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-base-100/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="navbar px-0">

          <div className="navbar-start">
            <MobileMenu />
            <Logo />
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2">
              <NavLinks />
            </ul>
          </div>

          <div className="navbar-end gap-3">

            <Link
              href="/login"
              className="btn btn-outline btn-primary hidden sm:inline-flex"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="btn btn-primary"
            >
              Register
            </Link>

          </div>

        </div>
      </div>
    </header>
  );
}