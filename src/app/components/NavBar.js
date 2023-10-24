import React from "react";

function NavBar() {
  return (
    <header>
      <div>
        <div>
          <div>
            <h1>
              <a href='index.html'>Automarket</a>
            </h1>
            <p>This is a title</p>
          </div>
          <div>
            <a href='#'>Dealer Name</a>
            <a href='#'>Sign Out</a>
          </div>
          <div>
            <a href='/offer'>
              <span>
                <strong>+</strong>
                Add An Offer
              </span>
            </a>
            <div>
              <a href=''>Pages</a>
              <ul></ul>
            </div>
          </div>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <a href=''>Cars</a>
              </li>
              <li>
                <a href=''>Bikes</a>
              </li>
              <li>
                <a href=''>Trucks</a>
              </li>
              <li>
                <a href=''>Parts</a>
              </li>
            </ul>
          </nav>
          <form action='' method='post'>
            <input
              type='text'
              name='quick_search'
              value='Quick Search, Ex: Mercedes-Benz E220'
            />
            <div>
              <span>Cars</span>
              <select name='type-option' id=''>
                <option value='cars' selected>
                  Cars
                </option>
                <option value='bikes'>Bikes</option>
                <option value='trucks'>Trucks</option>
                <option value='parts'>Parts</option>
              </select>
            </div>
            <div>
              <input type='submit' value='Search' />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
