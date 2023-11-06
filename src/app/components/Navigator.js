import React from "react";
import { BsGrid3X2GapFill, BsList } from "react-icons/bs";
function Navigator({ listDisplay, setListDisplay }) {
  return (
    <section className='grid md:grid-cols-3 gap-4 md:gap-2 xl:gap-14 md:items-center'>
      <div className='col-span-2'>
        <h2 className='text-xl '>
          <strong>Mercedes-Benz</strong> CLS 320
        </h2>
        <div className='text-xs breadcrumbs '>
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
            <li className='hidden lg:flex'>Mercedes-Benz CLS 320</li>
          </ul>
        </div>
        <div className='flex w-full flex-row justify-between pt-20'>
          <nav>
            <div className='space-x-2 '>
              <button className='btn bg-[rgb(243,125,26)] text-white btn-sm capitalize h-[2.5rem]'>
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
        </div>
      </div>
      <div className='col-span-1  sm:place-self-end'>
        <div className='flex flex-row space-x-1 md:pt-[10rem] pt-0'>
          <button
            onClick={() => setListDisplay(!listDisplay)}
            className={`block ${
              listDisplay ? "bg-[#F88220]" : "bg-[#D6D6D6]"
            } hover:bg-[#F37D1A] p-1 rounded-md`}
          >
            <BsList className='w-7 h-7 text-white' />
          </button>
          <button
            onClick={() => setListDisplay(!listDisplay)}
            className={`block ${
              listDisplay ? "bg-[#D6D6D6]" : "bg-[#F88220]"
            } p-1 rounded-sm`}
          >
            <BsGrid3X2GapFill className='w-7 h-7 text-white' />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Navigator;
