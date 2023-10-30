import React from "react";
import { BsGrid3X2GapFill, BsList } from "react-icons/bs";
function CarListPage() {
  return (
    <div className='w-full flex flex-col  py-6 drop-shadow-md bg-[#F7F3F7] '>
      {/* page one */}
      <section className='w-full flex flex-col pl-20 pr-[11rem]'>
        <div className='flex w-full flex-col space-y-20'>
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
                  <a href=''>Mercedes-Benz</a>
                </li>
                <li>Mercedes-Benz CLS 320</li>
              </ul>
            </div>
          </div>
          <div className='flex w-full flex-row justify-between '>
            <nav>
              <div className='space-x-2 '>
                <button className='btn bg-[#F37D1A] text-white btn-sm capitalize h-[2.5rem]'>
                  All Cars
                </button>
                <button className='btn  text-white bg-[#777777] btn-sm hover:bg-[#F37D1A] capitalize h-[2.5rem]'>
                  New Cars
                </button>
                <button className='btn text-white bg-[#777777] btn-sm hover:bg-[#F37D1A] capitalize h-[2.5rem]'>
                  Used Cars
                </button>
              </div>
            </nav>
            <div className='flex flex-row space-x-1'>
              <a
                href=''
                className='block bg-[#D6D6D6] hover:bg-[#F37D1A] p-1 rounded-md'
              >
                <BsList className='w-7 h-7 text-white' />
              </a>
              <a href='' className='block bg-[#F88220] p-1 rounded-md'>
                <BsGrid3X2GapFill className='w-7 h-7 text-white' />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* page two */}
      <section className=' bg-white pl-20 pr-[11rem]'>
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
                  <div className='join space-x-2'>
                    <button className='join-item btn btn-active'>1</button>
                    <button className='join-item btn '>2</button>
                    <button className='join-item btn '>3</button>
                    <button className='join-item btn btn-disabled'>...</button>
                    <button className='join-item btn'>8</button>
                    <button className='join-item btn'>Next</button>
                  </div>
                </div>
              </div>
              {/* layer two  */}
              <div>
                <p>car list</p>
              </div>
              {/* layer three */}
              <div>
                <div className='join space-x-2'>
                  <button className='join-item btn btn-active'>1</button>
                  <button className='join-item btn '>2</button>
                  <button className='join-item btn '>3</button>
                  <button className='join-item btn btn-disabled'>...</button>
                  <button className='join-item btn'>8</button>
                  <button className='join-item btn'>Next</button>
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
