import Link from "next/link";

export default function Header() {
  return (
    <header className="text-center bg-black text-white p-2 text-2xl">
      <Link href="https://www.flipdish.com/gb" target="blank">
        Flipdish
      </Link>
    </header>
  );
}
