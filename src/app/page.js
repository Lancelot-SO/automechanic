import Image from "next/image";
import Carousel from "./components/Carousel";
import { BiSolidCaretDownSquare, BiSolidCaretUpSquare } from "react-icons/bi";
import ImageHoverText from "./components/ImageHoverText";
import { FaSearch, FaDollarSign } from "react-icons/fa";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between  bg-[#F7F3F7]'>
      {/* section one */}
      <section className='w-full flex flex-row px-20 py-6 drop-shadow-md'>
        <div className='flex flex-col w-[70%]'>
          <div>
            <h3 className='text-2xl pb-4 '>
              <strong>Best </strong>Offer
            </h3>
          </div>
          <div className='flex fle-col pr-3'>
            <Carousel />
          </div>
        </div>
        <div className='flex flex-col w-[20%] ml-4'>
          <div className='flex flex-row justify-between'>
            <h3 className='text-2xl pb-2'>
              <strong>Latest</strong> offers
            </h3>
            <div className='flex flex-row'>
              <BiSolidCaretDownSquare className='text-3xl text-[#CACACA] hover:text-[#F88220]' />
              <BiSolidCaretUpSquare className='text-3xl text-[#CACACA] hover:text-[#F88220]' />
            </div>
          </div>
          <ul>
            {[...Array(3)].map((_, i) => (
              <li key={i}>
                <ImageHoverText />
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* section two */}
      <section className='w-full flex flew-row bg-white px-20 py-6'>
        <div className='w-1/2 flex flex-row place-items-center space-x-4 bg-[#F2F2F2] rounded-md p-5 justify-between mr-4'>
          <div className='flex flex-row space-x-6'>
            <a href='' className='block bg-[#F88220] p-2 rounded-md'>
              <FaSearch className='w-7 h-7 text-white' />
            </a>
            <div>
              <h3 className='text-xl'>
                <strong>Looking</strong> for a car ?
              </h3>
              <p className='text-xs'>
                1.000 new offers every day. 35.000 offers on site
              </p>
            </div>
          </div>

          <a
            className='px-4 py-2 bg-[#D6D6D6] font-bold uppercase rounded-md'
            href=''
          >
            Search
          </a>
        </div>
        <div className='w-1/2 flex flex-row place-items-center space-x-4 bg-[#F2F2F2] rounded-md p-5 justify-between mr-20'>
          <div className='flex flex-row space-x-6'>
            <a className='block bg-[#F88220] p-2 rounded-md' href=''>
              <FaDollarSign className='w-8 h-8 text-white' />
            </a>
            <div>
              <h3 className='text-xl'>
                <strong>Want</strong> to sell a car?
              </h3>
              <p className='text-xs'>
                200.000 visitors every day. Add your offer now!
              </p>
            </div>
          </div>
          <a
            className='px-4 py-2 bg-[#D6D6D6] font-bold uppercase rounded-md'
            href=''
          >
            sell+
          </a>
        </div>
        <div>
          <hr />
        </div>
      </section>
      {/* section three */}
      <section>section three </section>
    </main>
  );
}
