import React from "react";

function CarListPage() {
  return (
    <div>
      {/* page one */}
      <section>
        <div>
          <div>
            <div>
              <h2>
                <strong>Mercedes-Benz</strong> CLS 320
              </h2>
              <div className='text-sm breadcrumbs'>
                <ul>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Cars</a>
                  </li>
                  <li>
                    <a href=''> Mercedes-Benz</a>
                  </li>
                  <li>Mercedes-Benz CLS 320</li>
                </ul>
              </div>
            </div>
          </div>
          <nav>
            <ul>
              <li>
                <a href=''>All Cars</a>
              </li>
              <li>
                <a href=''>New Cars</a>
              </li>
              <li>
                <a href=''>Used Cars</a>
              </li>
            </ul>
          </nav>
          <div>
            <a href=''>List View</a>
            <a href=''>Grid view</a>
          </div>
        </div>
      </section>
      {/* page two */}
      <section>
        <div>
          <div>
            <div>
              <form action=''>
                <fieldset>
                  <legend>
                    <strong>Search</strong> filters
                  </legend>
                  <ul>
                    <li>
                      <label htmlFor='manufacturer'>Manufacturer:</label>
                      <div>
                        <span>Select</span>
                        <select name='manufacturer' id='manufacturer'>
                          <option value=''>Option 1</option>
                          <option value=''>Option 2</option>
                          <option value=''>Option 3</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <label htmlFor='Model'>Model:</label>
                      <div>
                        <span>Select</span>
                        <select name='model' id='model'>
                          <option value=''>Option 1</option>
                          <option value=''>Option 2</option>
                          <option value=''>Option 3</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <div>
                        <label htmlFor='Min Price'>Min Price:</label>
                        <div>
                          <span>Select</span>
                          <select name='min_price' id='min_price'>
                            <option value=''>Option 1</option>
                            <option value=''>Option 2</option>
                            <option value=''>Option 3</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor='Max Price'>Max Price:</label>
                        <div>
                          <span>Select</span>
                          <select name='max_price' id='max_price'>
                            <option value=''>Option 1</option>
                            <option value=''>Option 2</option>
                            <option value=''>Option 3</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <label htmlFor='Engine'>Engine:</label>
                      <div>
                        <span>Select</span>
                        <select name='engine' id='engine'>
                          <option value=''>Option 1</option>
                          <option value=''>Option 2</option>
                          <option value=''>Option 3</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <label htmlFor='Transmission'>Transmission:</label>
                      <div>
                        <span>Select</span>
                        <select name='transmission' id='transmission'>
                          <option value=''>Option 1</option>
                          <option value=''>Option 2</option>
                          <option value=''>Option 3</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <label htmlFor='Fuel type'>Fuel type:</label>
                      <div>
                        <span>Select</span>
                        <select name='fuel_type' id='fuel_type'>
                          <option value=''>Option 1</option>
                          <option value=''>Option 2</option>
                          <option value=''>Option 3</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <label htmlFor='Body Type'>Body Type:</label>
                      <div>
                        <span>Select</span>
                        <select name='body_type' id='body_type'>
                          <option value=''>Option 1</option>
                          <option value=''>Option 2</option>
                          <option value=''>Option 3</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <label htmlFor='Color'>Color:</label>
                      <div>
                        <span>Select</span>
                        <select name='color' id='color'>
                          <option value=''>Option 1</option>
                          <option value=''>Option 2</option>
                          <option value=''>Option 3</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <label htmlFor='Kilometers'>Kilometers:</label>
                      <div>
                        <span>Select</span>
                        <select name='kilometers' id='kilometers'>
                          <option value=''>Option 1</option>
                          <option value=''>Option 2</option>
                          <option value=''>Option 3</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <div>
                        <label htmlFor='Min Year'>Min Year:</label>
                        <div>
                          <span>Select</span>
                          <select name='min_year' id='min_year'>
                            <option value=''>Option 1</option>
                            <option value=''>Option 2</option>
                            <option value=''>Option 3</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor='Max Year'>Max Year:</label>
                        <div>
                          <span>Select</span>
                          <select name='max_year' id='max_year'>
                            <option value=''>Option 1</option>
                            <option value=''>Option 2</option>
                            <option value=''>Option 3</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <label htmlFor='Kilometers'>Kilometers:</label>
                      <div>
                        <span>Select</span>
                        <select name='kilometers' id='kilometers'>
                          <option value=''>Option 1</option>
                          <option value=''>Option 2</option>
                          <option value=''>Option 3</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <div>
                        <input type='submit' name='' id='' value='Search' />
                      </div>
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>
                    <strong>Loan</strong>calulator
                  </legend>
                  <ul>
                    <li>
                      <label htmlFor='loan_amount'>Loan Amount</label>
                      <div>
                        <span>Select</span>
                        <select name='loan_amount' id='loan_amount'>
                          <option value='' selected>
                            0.00 Euro
                          </option>
                          <option value=''>1000.00 Euro</option>
                          <option value=''>5000.00 Euro</option>
                          <option value=''>10000.00 Euro</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <label htmlFor='down_payment'>Down Payment</label>
                      <div>
                        <span>Select</span>
                        <select name='down_payment' id='down_payment'>
                          <option value='' selected>
                            0.00 Euro
                          </option>
                          <option value=''>1000.00 Euro</option>
                          <option value=''>5000.00 Euro</option>
                          <option value=''>10000.00 Euro</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <label htmlFor='annual_rate'>Annual Rate</label>
                      <div>
                        <span>Select</span>
                        <select name='annual_rate' id='annual_rate'>
                          <option value='' selected>
                            0.00 %
                          </option>
                          <option value=''>10.00 %</option>
                          <option value=''>20.00 %</option>
                          <option value=''>30.00 %</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <label htmlFor='loan_period'>Loan Period</label>
                      <div>
                        <span>Select</span>
                        <select name='loan_period' id='loan_period'>
                          <option value='' selected>
                            3 Years
                          </option>
                          <option value=''>1 year</option>
                          <option value=''>2 Years</option>
                          <option value=''>4 years</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <div>
                        <input type='submit' name='' id='' value='calulate' />
                      </div>
                    </li>
                    <li>
                      <p>Rate value: 0.00</p>
                    </li>
                  </ul>
                </fieldset>
              </form>
            </div>
            <div>
              {/* layer one */}
              <div>
                <div>
                  <div>
                    <select name='sort_by' id='sort_by'>
                      <option selected>Sort by</option>
                      <option>Date</option>
                      <option>Price</option>
                      <option>Views</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <select name='sort_by' id='sort_by'>
                      <option selected>10</option>
                      <option>20</option>
                      <option>30</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div class='join space-x-2'>
                    <button class='join-item btn btn-active'>1</button>
                    <button class='join-item btn '>2</button>
                    <button class='join-item btn '>3</button>
                    <button className='join-item btn btn-disabled'>...</button>
                    <button class='join-item btn'>8</button>
                    <button class='join-item btn'>Next</button>
                  </div>
                </div>
              </div>
              {/* layer two  */}
              <div>
                <p>car list</p>
              </div>
              {/* layer three */}
              <div>
                <div class='join space-x-2'>
                  <button class='join-item btn btn-active'>1</button>
                  <button class='join-item btn '>2</button>
                  <button class='join-item btn '>3</button>
                  <button className='join-item btn btn-disabled'>...</button>
                  <button class='join-item btn'>8</button>
                  <button class='join-item btn'>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CarListPage;
