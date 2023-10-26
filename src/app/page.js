import Image from "next/image";
import Carousel from "./components/Carousel";
import { BiSolidCaretDownSquare, BiSolidCaretUpSquare } from "react-icons/bi";
import ImageHoverText from "./components/ImageHoverText";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between px-20 py-6 bg-[#F7F3F7]'>
      {/* section one */}
      <section className='w-full flex flex-row'>
        <div className='flex flex-col w-3/4'>
          <div>
            <h3 className='text-2xl'>
              <strong>Best </strong>Offer
            </h3>
          </div>
          <div className='flex fle-col pr-4'>
            <Carousel />
          </div>
        </div>
        <div className='flex flex-col w-1/6 ml-6'>
          <div className='flex flex-row justify-between'>
            <h3 className='text-2xl '>
              <strong>Latest</strong> offers
            </h3>
            <div className='flex flex-row'>
              <BiSolidCaretDownSquare className='text-3xl text-[#CACACA] hover:text-[#F88220]' />
              <BiSolidCaretUpSquare className='text-3xl text-[#CACACA] hover:text-[#F88220]' />
            </div>
          </div>
          <ul>
            <li>
              <ImageHoverText />
            </li>
            <li>b</li>
            <li>c</li>
          </ul>
        </div>
      </section>
      {/* section two */}
      <section>section two</section>
      {/* section three */}
      <section>section three </section>
    </main>
  );
}
