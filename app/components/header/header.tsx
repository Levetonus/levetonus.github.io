
import Link from "next/link";
import HeaderLink from "./headerLink";

export default function Header() {
  return (
    <header className="bg-theme-purple w-full h-auto p-5 mb-5 text-white">
      <h1 className="px-5 py-3 text-xl">
        <Link href="/">Steven Luo - Personal Website</Link>
      </h1>
      <nav className="px-5 flex gap-5" aria-label="Primary">
        <HeaderLink href="#" text="About Me"></HeaderLink>
        <HeaderLink href="projects/blender.html" text="Blender Gallery"></HeaderLink>
      </nav>
      {/* <img src="../resources/favicon.png" alt="Site icon" class="site-favicon" /> */}
    </header>
  )
}
