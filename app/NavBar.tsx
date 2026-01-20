export default function NavBar() {
  return (
    <nav className="pt-14 h-dvh bg-stone-500 min-w-56 fixed left-0 top-0 bottom-0">
      <ul className="flex flex-col">
        <li className="flex">
          <a
            className="flex-1 px-4 py-2 text-stone-900 hover:cursor-pointer hover:bg-stone-400 active:bg-stone-600 active:text-stone-300"
            href="./"
          >
            University District Ramble
          </a>
        </li>
        <li className="flex">
          <a
            className="flex-1 px-4 py-2 text-stone-900 hover:cursor-pointer hover:bg-stone-400 active:bg-stone-600 active:text-stone-300 "
            href="./about"
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
