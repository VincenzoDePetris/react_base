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
              <a href="">INFO</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
