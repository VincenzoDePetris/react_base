import "./footer.css";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="info flex">
          <div className="flex contact">
            <div>
              <h3>CONTACT</h3>
              <ul>
                <li>
                  <a href="">Office</a>
                </li>
                <li>
                  <a href="">Worker</a>
                </li>
                <li>
                  <a href="">Our Team</a>
                </li>
                <li>
                  <a href="">Team Lead</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>INFO</h3>
              <ul>
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Our Product</a>
                </li>
                <li>
                  <a href="">Our Office</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button>JOIN US</button>
          </div>
        </div>
        <div className="separe"></div>
        <div className="social">
          <ul className="flex gap-3 justify-end">
            <li>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
