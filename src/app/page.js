import Image from "next/image";
import Carousel from "./components/Carousel";
import { BiSolidCaretDownSquare, BiSolidCaretUpSquare } from "react-icons/bi";
import ImageHoverText from "./components/ImageHoverText";
import { FaSearch, FaDollarSign, FaLongArrowAltRight } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";

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
      </section>
      {/* section three */}
      <div>
        <hr className='w-full' />
      </div>
      <section className='w-full flex flew-row bg-white px-20 py-6 justify-stretch'>
        <div className='flex flex-col space-y-2 w-1/3 mr-4'>
          <h3 className='text-xl pb-2'>
            <strong>Popular</strong> Articles
          </h3>
          <ul className='flex flex-col space-y-2'>
            <li className='flex flex-row space-x-3'>
              <img src='/images/icon.gif' alt='icon' />
              <div>
                <p className='text-sm font-bold'>
                  Here are many variations of passages of Lorem Ipsum..
                </p>
                <a className='text-xs hover:text-[#F88220]' href=''>
                  Read more
                  <FaLongArrowAltRight className='inline-block w-4 h-4 pl-1 text-[#F88220]' />
                </a>
              </div>
            </li>
            <li className='flex flex-row space-x-3'>
              <img src='/images/icon.gif' alt='icon' />
              <div>
                <p className='text-sm font-bold'>
                  Here are many variations of passages of Lorem Ipsum..
                </p>
                <a className='text-xs hover:text-[#F88220]' href=''>
                  Read more
                  <FaLongArrowAltRight className='inline-block w-4 h-4 pl-1 text-[#F88220]' />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className='flex flex-col space-y-2 w-1/3'>
          <div className='text-xl pb-2 flex flex-row space-x-16'>
            <h3>
              <strong>Car </strong>dealers
            </h3>
            <a className='text-sm hover:text-[#F88220] self-end mb-1' href=''>
              See all dealers
              <FaLongArrowAltRight className='inline-block w-4 h-4 pl-1 text-[#F88220]' />
            </a>
          </div>
          <ul className='space-y-2 bg-[#F4F4F4] w-3/4 divide divide-x-0'>
            <li className='flex flex-row space-x-24 p-1'>
              <a
                href=''
                className='text-sm font-semibold self-end hover:text-[#F88220]'
              >
                <BsFillCircleFill className='inline-block w-4 h-4 pr-1 text-[#F88220] pb-1' />
                Dealer name
              </a>
              <span className='text-sm'>162 offer</span>
            </li>
            <li className='flex flex-row space-x-24 bg-[#F9F9F9] p-1'>
              <a
                href=''
                className='text-sm font-semibold self-end hover:text-[#F88220]'
              >
                <BsFillCircleFill className='inline-block w-4 h-4 pr-1 text-[#F88220] pb-1' />
                Dealer name
              </a>
              <span className='text-sm'>162 offer</span>
            </li>
            <li className='flex flex-row space-x-24 p-1'>
              <a
                href=''
                className='text-sm font-semibold self-end hover:text-[#F88220]'
              >
                <BsFillCircleFill className='inline-block w-4 h-4 pr-1 text-[#F88220] pb-1' />
                Dealer name
              </a>
              <span className='text-sm'>162 offer</span>
            </li>
            <li className='flex flex-row space-x-24 bg-[#F9F9F9] p-1'>
              <a
                href=''
                className='text-sm font-semibold self-end hover:text-[#F88220]'
              >
                <BsFillCircleFill className='inline-block w-4 h-4 pr-1 text-[#F88220] pb-1' />
                Dealer name
              </a>
              <span className='text-sm'>162 offer</span>
            </li>
          </ul>
        </div>
        <div className='flex flex-col space-y-2 w-1/3 '>
          <h3 className='text-xl pb-2'>
            <strong>Get</strong> daily offers
          </h3>
          <form action='post' className='pt-2 space-y-2'>
            <input
              type='email'
              name='email'
              placeholder='email address'
              className='block grow-[1]  focus:outline-none py-1.5 pl-7 border-0 mr-4 rounded-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grey-400 w-3/4 '
            />
            <p className='text-xs w-3/4 text-justify text-grey'>
              Available, but have suffered alteration in some form injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <div className='flex flex-row space-x-16'>
              <input
                type='submit'
                value='Subscribe'
                className='bg-[#F88220] p-2 uppercase text-white rounded-md text-sm'
              />
              <p className='text-xs self-center'>15,000+ other subscribers</p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
