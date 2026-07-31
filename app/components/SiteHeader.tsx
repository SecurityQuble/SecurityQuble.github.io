import Link from "next/link";

type SiteHeaderProps = {
  active: "posts" | "members";
};

export default function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="header-wordmark">
        <Link className="brand" href="/" aria-label="Quble 홈">
          <strong>Quble</strong>
        </Link>
      </div>

      <div className="header-lower">
        <span className="header-kicker">Research Team</span>
        <div className="header-actions">
          <nav className="site-nav" aria-label="주요 메뉴">
            <Link className={active === "posts" ? "active" : ""} href="/">Posts</Link>
            <Link className={active === "members" ? "active" : ""} href="/members">Members</Link>
          </nav>
          <a
            className="header-link"
            href="https://github.com/SecurityQuble"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
