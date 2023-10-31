import LoanCalculator from "@/app/components/LoanCalculator";
import SearchFilter from "@/app/components/SearchFilter";
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
            <SearchFilter />
            <LoanCalculator />
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
