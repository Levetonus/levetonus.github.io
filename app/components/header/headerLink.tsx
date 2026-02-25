
import Link from "next/link";

export default function HeaderLink({href, text}: {href: string, text: string}) {
  return (
    <Link
      href={href}
      className="
        p-3 text-lg bg-white text-theme-purple rounded-xl
        hover:bg-theme-gray transition-all duration-200
      "
    >
      {text}
    </Link>
  )
}
