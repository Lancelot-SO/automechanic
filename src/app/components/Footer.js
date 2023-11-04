"use client";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa6";
import Link from "next/link";
function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full flex flex-col">
      {/* layer one */}
      <div className="w-full flex flex-col lg:flex-row bg-[#F2F2F2] px-10 lg:px-20 py-10">
        <nav className="w-2/3 ">
          <ul className="flex flex-row justify-between mr-20">
            <li className="px-4 lg:px-0">
              <Link href="/dealer">
                <div className="mb-6 text-xl">
                  <strong>About</strong> us
                </div>
              </Link>
              <ul className="text-xs space-y-2">
                <li>
                  <Link href="/" className="hover:text-[#F88220]">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-[#F88220]">
                    Our Partners
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-[#F88220]">
                    Advertising Online
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-[#F88220]">
                    Site Map
                  </Link>
                </li>
              </ul>
            </li>
            <li className="px-4 lg:px-0">
              <Link href="/">
                <div className="mb-6 text-xl">
                  <strong>Need</strong> Help?
                </div>
              </Link>
              <ul className="text-xs space-y-2">
                <li>
                  <Link href="/" className="hover:text-[#F88220]">
                    How do i add an offer?
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-[#F88220]">
                    How do I find a vehicle
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-[#F88220]">
                    Price list
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-[#F88220]">
                    Office for car dealers
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">
                <div className="mb-6 text-xl">
                  <strong>User </strong>area
                </div>
              </Link>
              <ul className="text-xs space-y-2">
                <li>
                  <Link href="" className="hover:text-[#F88220]">
                    Add an offer
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-[#F88220]">
                    Register dealer
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-[#F88220]">
                    Login Dealer
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-[#F88220]">
                    News
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="lg:flex lg:pl-6">
          <h3 className="mb-6 text-xl">
            <strong>Find</strong> us Here
          </h3>
          <ul className="flex flex-row space-x-10">
            <li className="bg-white w-14 h-14 flex flex-row items-center justify-center shadow-md rounded-md">
              <Link href="/">
                <FaFacebook className="text-4xl  text-[#6D6E71] hover:text-[#F88220]" />
              </Link>
            </li>
            <li className="bg-white w-14 h-14 flex flex-row items-center justify-center shadow-md rounded-md">
              <Link href="">
                <FaTwitter className="text-4xl  text-[#6D6E71] hover:text-[#F88220]" />
              </Link>
            </li>
            <li className="bg-white w-14 h-14 flex flex-row items-center justify-center shadow-md rounded-md">
              <Link href="">
                <FaGoogle className="text-4xl  text-[#6D6E71] hover:text-[#F88220]" />
              </Link>
            </li>
          </ul>
          <p className="text-xs pt-4">
            Become our fan, and we will love you forever
          </p>
        </div>
      </div>
      {/* layer two */}
      <div className="w-full flex flex-row px-10 lg:px-20 bg-[#414141] text-[#BCBCA0]">
        <div className="w-full flex flex-row justify-between py-2 text-sm  pr-20">
          <p>&copy; {currentYear} Automarket. All Rights Reserved</p>
          <div className="flex flex-col lg:flex-row justify-start">
            <p>Webdesign by</p>
            <Link href="">Automarket</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
