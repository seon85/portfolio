import Link from "next/link";

export default function header() {
  return (
    <>
      <header className="header">
        <div>HEADER</div>
        <ul>
          <li>
            <Link href="/" scroll={false}>
              home
            </Link>
          </li>
          <li>
            <Link href="./about" scroll={false}>
              about
            </Link>
          </li>
          <li>
            <Link href="./portfolio" scroll={false}>
              portfolio
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
