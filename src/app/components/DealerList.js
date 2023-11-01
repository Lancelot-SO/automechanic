import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
function DealerList() {
  return (
    <div className='flex  flex-col w-full'>
      <div className='flex flex-row w-full py-6'>
        <a href='/dealer/1' className='pr-4 self-center w-1/4'>
          <img src='/images/dealer_thumb.jpg' alt='' />
        </a>
        <div className='flex flex-col w-3/4 self-center space-y-4'>
          <div className='flex flex-row justify-between'>
            <a href='/dealer/1' className='text-xl hover:text-[#F98A22]'>
              <strong>Dealer Name Here</strong>
            </a>
            <p className='text-[#F98A22]'>183 OFFERS</p>
          </div>
          <div className='flex flex-row bg-[#F2F2F2] py-2 text-sm justify-between'>
            <p>314 Columbus Ave, San Francisco, CA 94133</p>
          </div>
          <div className='flex flex-row text-sm justify-between'>
            <div className='flex flex-row space-x-2'>
              <p>View on map</p>
              <p>(123) 456-78910</p>
            </div>
            <a href=''>
              View Details{" "}
              <FaLongArrowAltRight className='inline-block w-4 h-4 pl-1 text-[#F88220]' />
            </a>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default DealerList;
