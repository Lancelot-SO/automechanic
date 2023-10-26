import React from "react";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='w-full flex flex-col'>
      {/* layer one */}
      <div className='w-full flex flex-row bg-[#F2F2F2] px-20 py-10'>
        <nav className='w-2/3 '>
          <ul className='flex flex-row justify-between mr-20'>
            <li className=''>
              <a href='#'>
                <div className='mb-6 text-xl'>
                  <strong>About</strong> us
                </div>
              </a>
              <ul className='text-xs space-y-2'>
                <li>
                  <a href='' className='hover:text-[#F88220]'>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='' className='hover:text-[#F88220]'>
                    Our Partners
                  </a>
                </li>
                <li>
                  <a href='' className='hover:text-[#F88220]'>
                    Advertising Online
                  </a>
                </li>
                <li>
                  <a href='' className='hover:text-[#F88220]'>
                    Site Map
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>
                <div className='mb-6 text-xl'>
                  <strong>Need</strong> Help?
                </div>
              </a>
              <ul className='text-xs space-y-2'>
                <li>
                  <a href='' className='hover:text-[#F88220]'>
                    How do i add an offer?
                  </a>
                </li>
                <li>
                  <a href='' className='hover:text-[#F88220]'>
                    How do I find a vehicle
                  </a>
                </li>
                <li>
                  <a href='' className='hover:text-[#F88220]'>
                    Price list
                  </a>
                </li>
                <li>
                  <a href='' className='hover:text-[#F88220]'>
                    Office for car dealers
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>
                <div className='mb-6 text-xl'>
                  <strong>User </strong>area
                </div>
              </a>
              <ul className='text-xs space-y-2'>
                <li>
                  <a href='' className='hover:text-[#F88220]'>
                    Add an offer
                  </a>
                </li>
                <li>
                  <a href='' className='hover:text-[#F88220]'>
                    Register dealer
                  </a>
                </li>
                <li>
                  <a href='' className='hover:text-[#F88220]'>
                    Login Dealer
                  </a>
                </li>
                <li>
                  <a href='' className='hover:text-[#F88220]'>
                    News
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className='pl-6'>
          <h3 className='mb-6 text-xl'>
            <strong>Find</strong> us Here
          </h3>
          <ul className='flex flex-row space-x-10'>
            <li className='bg-white w-14 h-14 flex flex-row items-center justify-center shadow-md rounded-md'>
              <a href=''>
                <FaFacebook className='text-4xl  text-[#6D6E71] hover:text-[#F88220]' />
              </a>
            </li>
            <li className='bg-white w-14 h-14 flex flex-row items-center justify-center shadow-md rounded-md'>
              <a href=''>
                <FaTwitter className='text-4xl  text-[#6D6E71] hover:text-[#F88220]' />
              </a>
            </li>
            <li className='bg-white w-14 h-14 flex flex-row items-center justify-center shadow-md rounded-md'>
              <a href=''>
                <FaGoogle className='text-4xl  text-[#6D6E71] hover:text-[#F88220]' />
              </a>
            </li>
          </ul>
          <p className='text-xs pt-4'>
            Become our fan, and we will love you forever
          </p>
        </div>
      </div>
      {/* layer two */}
      <div>
        <div>
          <p>© 2012 Automarket. All Rights Reserved</p>
          <div>
            <p>Webdesign by</p>
            <a href=''>Automarket</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
