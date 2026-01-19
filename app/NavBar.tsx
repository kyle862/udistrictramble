export default function NavBar() {
  return (
    <nav className="pt-14 px-4 h-dvh bg-stone-500 min-w-56 fixed left-0 top-0 bottom-0">
      <ul className="flex flex-col gap-4">
        <li className="flex-1">
          <a href="/">University District Ramble</a>
        </li>
        <li className="flex-1">
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
