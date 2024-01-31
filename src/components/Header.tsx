import Link from "next/link";
import { GiPunchBlast } from "react-icons/gi";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header__box">
          <Link className="header__logo" href="/">
            <div className="header__logo-svg"><GiPunchBlast /></div>
            <div className="header__logo-title">Power Tools</div>
          </Link>
          <div className="header__blank"></div>
          <div className="header__link">
            <Link className="header__link-btn" href="/pages/tools">Tools</Link>
            <Link className="header__link-btn" href="/pages/charge">Price</Link>
            <Link className="header__link-btn" href="/pages/login">Login</Link>
          </div>
        </div>
      </div>
  </>
  );
}
