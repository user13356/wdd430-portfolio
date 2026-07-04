import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">
          Corbin Van Scheltema
        </h1>

        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}