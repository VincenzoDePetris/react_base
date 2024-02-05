import "./Nav.css";

function Nav() {
  return (
    <>
      <nav className="flex justify-between items-center">
        <div className="logo">
          {" "}
          <a href="#">LOGO</a>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="#footer">INFO</a>
            </li>
            <li>
              <a href="#footer">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
