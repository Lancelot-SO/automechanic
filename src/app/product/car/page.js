import React from "react";
import { BsGrid3X2GapFill, BsList } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
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
              <a href='' className='block bg-[#F88220] p-1 rounded-sm'>
                <BsGrid3X2GapFill className='w-7 h-7 text-white' />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* page two */}
      <section className=' bg-white pl-20 pr-[11rem]'>
        <div className='flex flex-row py-8'>
          <form action='' className='flex flex-col w-1/4 space-y-8'>
            <fieldset className='flex flex-col w-full space-x-5 space-y-3 bg-[#F2F2F2]'>
              <div className='pt-2 px-5 text-[1.6rem]'>
                <strong>Search</strong> filters
              </div>
              <ul className='w-full space-y-3 text-sm'>
                <li className='space-y-1'>
                  <label htmlFor='Manufacturer:'>Manufacturer:</label>
                  <div>
                    <select
                      name='manufacturer'
                      id='manufacturer'
                      placeholder='Select'
                      className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                    >
                      <option value=''>Select</option>
                      <option value=''>Option 1</option>
                      <option value=''>Option 2</option>
                      <option value=''>Option 3</option>
                    </select>
                  </div>
                </li>
                <li className='space-y-1'>
                  <label htmlFor='Model'>Model:</label>
                  <div>
                    <select
                      name='model'
                      id='model'
                      className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                    >
                      <option value=''>Select</option>
                      <option value=''>Option 1</option>
                      <option value=''>Option 2</option>
                      <option value=''>Option 3</option>
                    </select>
                  </div>
                </li>
                <li className='flex flex-row space-x-3'>
                  <div className='space-y-1'>
                    <label htmlFor='Min Price'>Min Price:</label>
                    <div>
                      <select
                        name='min_price'
                        id='min_price'
                        className='h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                      >
                        <option value=''>Select</option>
                        <option value=''>Option 1</option>
                        <option value=''>Option 2</option>
                        <option value=''>Option 3</option>
                      </select>
                    </div>
                  </div>
                  <div className='space-y-1'>
                    <label htmlFor='Max Price'>Max Price:</label>
                    <div>
                      <select
                        name='max_price'
                        id='max_price'
                        className='h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                      >
                        <option value=''>Select</option>
                        <option value=''>Option 1</option>
                        <option value=''>Option 2</option>
                        <option value=''>Option 3</option>
                      </select>
                    </div>
                  </div>
                </li>
                <li className='space-y-1'>
                  <label htmlFor='Engine'>Engine:</label>
                  <div>
                    <select
                      name='engine'
                      id='engine'
                      className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                    >
                      <option value=''>Select</option>
                      <option value=''>Option 1</option>
                      <option value=''>Option 2</option>
                      <option value=''>Option 3</option>
                    </select>
                  </div>
                </li>
                <li className='space-y-1'>
                  <label htmlFor='Transmission'>Transmission:</label>
                  <div>
                    <select
                      name='transmission'
                      id='transmission'
                      className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                    >
                      <option value=''>Select</option>
                      <option value=''>Option 1</option>
                      <option value=''>Option 2</option>
                      <option value=''>Option 3</option>
                    </select>
                  </div>
                </li>
                <li className='space-y-1'>
                  <label htmlFor='Fuel type'>Fuel type:</label>
                  <div>
                    <select
                      name='fuel_type'
                      id='fuel_type'
                      className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                    >
                      <option value=''>Select</option>
                      <option value=''>Option 1</option>
                      <option value=''>Option 2</option>
                      <option value=''>Option 3</option>
                    </select>
                  </div>
                </li>
                <li className='space-y-1'>
                  <label htmlFor='Body Type'>Body Type:</label>
                  <div>
                    <select
                      name='body_type'
                      id='body_type'
                      className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                    >
                      <option value=''>Select</option>
                      <option value=''>Option 1</option>
                      <option value=''>Option 2</option>
                      <option value=''>Option 3</option>
                    </select>
                  </div>
                </li>
                <li className='space-y-1'>
                  <label htmlFor='Color'>Color:</label>
                  <div>
                    <select
                      name='color'
                      id='color'
                      className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                    >
                      <option value=''>Select</option>
                      <option value=''>Option 1</option>
                      <option value=''>Option 2</option>
                      <option value=''>Option 3</option>
                    </select>
                  </div>
                </li>
                <li className='space-y-1'>
                  <label htmlFor='Kilometers'>Kilometers:</label>
                  <div>
                    <select
                      name='kilometers'
                      id='kilometers'
                      className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                    >
                      <option value=''>Select</option>
                      <option value=''>Option 1</option>
                      <option value=''>Option 2</option>
                      <option value=''>Option 3</option>
                    </select>
                  </div>
                </li>
                <li className='flex flex-row space-x-3'>
                  <div className='space-y-1'>
                    <label htmlFor='Min Year'>Min Year:</label>
                    <div>
                      <select
                        name='min_year'
                        id='min_year'
                        className='h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                      >
                        <option value=''>Select</option>
                        <option value=''>Option 1</option>
                        <option value=''>Option 2</option>
                        <option value=''>Option 3</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor='Max Year'>Max Year:</label>
                    <div className='space-y-1'>
                      <select
                        name='max_year'
                        id='max_year'
                        className='h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                      >
                        <option value=''>Select</option>
                        <option value=''>Option 1</option>
                        <option value=''>Option 2</option>
                        <option value=''>Option 3</option>
                      </select>
                    </div>
                  </div>
                </li>
                <li className='space-y-1'>
                  <label htmlFor='Kilometers'>Kilometers:</label>
                  <div>
                    <select
                      name='kilometers'
                      id='kilometers'
                      className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                    >
                      <option value=''>Select</option>
                      <option value=''>Option 1</option>
                      <option value=''>Option 2</option>
                      <option value=''>Option 3</option>
                    </select>
                  </div>
                </li>
                <div className='py-4'>
                  <button
                    type='submit'
                    className='flex items-center w-24 mr-2 p-2 h-10 self-center bg-[#F88220] text-white rounded-md uppercase drop-shadow-md'
                  >
                    <FaSearch className='mr-1' /> Search
                  </button>
                </div>
              </ul>
            </fieldset>
            <fieldset className='flex flex-col w-full space-x-5 space-y-3 bg-[#F2F2F2]'>
              <div className='pt-2 px-5 text-[1.6rem]'>
                <strong>Loan</strong>calulator
              </div>
              <ul className='w-full space-y-3 text-sm'>
                <li className='space-y-1'>
                  <label htmlFor='loan_amount'>Loan Amount</label>
                  <div>
                    <select
                      name='loan_amount'
                      id='loan_amount'
                      className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                    >
                      <option value=''>0.00 Euro</option>
                      <option value=''>1000.00 Euro</option>
                      <option value=''>5000.00 Euro</option>
                      <option value=''>10000.00 Euro</option>
                    </select>
                  </div>
                </li>
                <li className='space-y-1'>
                  <label htmlFor='down_payment'>Down Payment</label>
                  <div>
                    <select
                      name='down_payment'
                      id='down_payment'
                      className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                    >
                      <option value=''>0.00 Euro</option>
                      <option value=''>1000.00 Euro</option>
                      <option value=''>5000.00 Euro</option>
                      <option value=''>10000.00 Euro</option>
                    </select>
                  </div>
                </li>
                <li className='space-y-1'>
                  <label htmlFor='annual_rate'>Annual Rate</label>
                  <div>
                    <select
                      name='annual_rate'
                      id='annual_rate'
                      className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                    >
                      <option value=''>0.00 %</option>
                      <option value=''>10.00 %</option>
                      <option value=''>20.00 %</option>
                      <option value=''>30.00 %</option>
                    </select>
                  </div>
                </li>
                <li className='space-y-1'>
                  <label htmlFor='loan_period'>Loan Period</label>
                  <div>
                    <select
                      name='loan_period'
                      id='loan_period'
                      className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
                    >
                      <option value=''>3 Years</option>
                      <option value=''>1 year</option>
                      <option value=''>2 Years</option>
                      <option value=''>4 years</option>
                    </select>
                  </div>
                </li>

                <div className='py-4'>
                  <button
                    type='submit'
                    className='flex items-center w-24 mr-2 p-2 h-10 self-center bg-[#F88220] text-white rounded-md uppercase drop-shadow-md'
                  >
                    calcualte
                  </button>
                </div>

                <div className='pb-6 text-lg font-semibold'>
                  <p>Rate value: 0.00</p>
                </div>
              </ul>
            </fieldset>
          </form>

          <div>
            {/* layer one */}
            <div>
              <div>
                <div>
                  <select name='sort_by' id='sort_by'>
                    <option>Sort by</option>
                    <option>Date</option>
                    <option>Price</option>
                    <option>Views</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <select name='sort_by' id='sort_by'>
                    <option>10</option>
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
      </section>
    </div>
  );
}

export default CarListPage;
