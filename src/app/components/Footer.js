import React from "react";

function Footer() {
  return (
    <Footer>
      {/* layer one */}
      <div>
        <nav>
          <ul>
            <li>
              <a href=''>
                <span>About us</span>
                <ul>
                  <li>
                    <a href=''>Contact</a>
                  </li>
                  <li>
                    <a href=''>Our Partners</a>
                  </li>
                  <li>
                    <a href=''>Advertising Online</a>
                  </li>
                  <li>
                    <a href=''>Site Map</a>
                  </li>
                </ul>
              </a>
            </li>
            <li>
              <a href=''>
                <span>Need Help?</span>
              </a>
              <ul>
                <li>
                  <a href=''>How do i add an offer?</a>
                </li>
                <li>
                  <a href=''>How do I find a vehicle</a>
                </li>
                <li>
                  <a href=''>Price list</a>
                </li>
                <li>
                  <a href=''>Office for car dealers</a>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>
                <span>User area</span>
              </a>
              <ul>
                <li>
                  <a href=''>Add an offer</a>
                </li>
                <li>
                  <a href=''>Register dealer</a>
                </li>
                <li>
                  <a href=''>Login Dealer</a>
                </li>
                <li>
                  <a href=''>News</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div>
          <h3>Find us Here</h3>
          <ul>
            <li>
              <a href=''>Facebook</a>
            </li>
            <li>
              <a href=''>Twitter</a>
            </li>
            <li>
              <a href=''>Google</a>
            </li>
          </ul>
          <p>Become our fan, and we will love you forever</p>
        </div>
      </div>
      {/* layer two */}
      <div>
        <div>
          <p>© 2012 Automarket. All Rights Reserved</p>
          <div>
            <p>Webdesign by</p>
            <a href=''>Automarket</a>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Footer;
