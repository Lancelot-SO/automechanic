"use client";
import React, { useState } from "react";
import {
  UserIcon,
  PowerIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { FaCarSide, FaMotorcycle, FaTruck, FaGears } from "react-icons/fa6";
function NavBar() {
  return (
    <header>
      <div className='w-full flex flex-col'>
        {/*  header one */}
        <div className='w-full flex flex-row py-4 px-20  bg-[#414141] text-white justify-between'>
          <div className='flex flex-row divide-x-2 divide-solid divide-[#575757] place-items-center'>
            <h1 className='text-4xl uppercase pr-5 '>
              <a href='/'>Automarket</a>
            </h1>
            <p className='text-[#A5A2A5] uppercase text-md  pl-5'>
              This is a title
            </p>
          </div>
          <div className='flex flex-row place-items-center '>
            <UserIcon className='h-6 w-6 text-[#F88220] pr-1' />
            <div className='flex flex-row divide-x-2 divide-solid divide-[#575757] '>
              <a className='text-[#B4BCBC] text-base font-bold pr-4' href='#'>
                Dealer Name
              </a>
              <div className='px-4'>
                <PowerIcon className='h-6 w-6 text-[#838994] font-bold' />
              </div>
              <a className='pl-4 text-[#BCBCBC]' href='#'>
                Sign Out
              </a>
            </div>
          </div>
          <div className='flex flex-row place-items-center pr-20'>
            <button className='bg-[#4D4D4D] hover:bg-[#595959] text-white font-bold py-2 px-4 rounded uppercase mr-6'>
              + add an offer
            </button>
            <div>
              <div className='group/main inline-block relative'>
                <button className='bg-[#4D4D4D] hover:bg-[#595959] text-white font-bold py-2 px-4 rounded uppercase mr-6'>
                  <span className='mr-1'>Pages</span>
                </button>
                <ul className='absolute hidden text-[#BCBCBC] pt-1 group-hover/main:block w-24 ml-[-94px]  divide-y-2 divide-solid divide-[#575757]'>
                  <li className='group/item  bg-[#414141] hover:text-white w-[180px] px-2'>
                    <a
                      className='rounded-t py-2 px-2 flex flex-col w-full'
                      href='#'
                    >
                      Home Page
                    </a>
                  </li>
                  <li className='group/item  bg-[#414141] hover:text-white w-[180px] px-2'>
                    <a
                      className='rounded-t py-2 px-2 flex flex-col w-full'
                      href='#'
                    >
                      Add an Offer
                    </a>
                  </li>
                  <li className='group/item  bg-[#414141] hover:text-white w-[180px] px-2'>
                    <a
                      className='rounded-t py-2 px-2 flex flex-col w-full'
                      href='#'
                    >
                      Login page
                    </a>
                  </li>
                  <li className='group/item  bg-[#414141] hover:text-white w-[180px] px-2 flex flex-row'>
                    <a
                      className='rounded-t py-2 px-2 flex flex-col w-full'
                      href='#'
                    >
                      Car list
                    </a>
                    <ChevronRightIcon className='h-6 w-6 text-[#BCBCBC] pr-1 self-center' />
                    <ul className='absolute hidden l-10 bg-[#414141] hover:text-white w-[150px] px-2 my-[128px] group-hover/item:block top-0 left-[180px]'>
                      <li>
                        <a
                          className='rounded-t py-2  flex flex-col w-full'
                          href='#'
                        >
                          Car Detail
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='group/item  bg-[#414141] hover:text-white w-[180px] px-2 flex flex-row'>
                    <a
                      className='rounded-t py-2 px-2 flex flex-col w-full'
                      href='#'
                    >
                      Blog
                    </a>
                    <ChevronRightIcon className='h-6 w-6 text-[#BCBCBC] pr-1 self-center' />

                    <ul className='absolute hidden l-10 bg-[#414141] hover:text-white w-[150px] px-2 my-[168px] group-hover/item:block top-0 left-[180px]'>
                      <li>
                        <a
                          className='rounded-t py-2  flex flex-col w-full'
                          href='#'
                        >
                          Blog post
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='group/item  bg-[#414141] hover:text-white w-[180px] px-2 flex flex-row'>
                    <a
                      className='rounded-t py-2 px-2 flex flex-col w-full'
                      href='#'
                    >
                      Dealer list
                    </a>
                    <ChevronRightIcon className='h-6 w-6 text-[#BCBCBC] pr-1 self-center' />
                    <ul className='absolute hidden l-10 bg-[#414141] hover:text-white w-[150px] px-2 my-[210px] group-hover/item:block top-0 left-[180px]'>
                      <li>
                        <a
                          className='rounded-t py-2  flex flex-col w-full '
                          href='#'
                        >
                          Dealer Detail
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='group/item  bg-[#414141] hover:text-white w-[180px] px-2'>
                    <a
                      className='rounded-t py-2 px-2 flex flex-col w-full'
                      href='#'
                    >
                      Insurance
                    </a>
                  </li>
                  <li className='group/item  bg-[#414141] hover:text-white w-[180px] px-2'>
                    <a
                      className='rounded-t py-2 px-2 flex flex-col w-full'
                      href='#'
                    >
                      Under construction
                    </a>
                  </li>
                  <li className='group/item  bg-[#414141] hover:text-white w-[180px] px-2'>
                    <a
                      className='rounded-t py-2 px-2 flex flex-col w-full'
                      href='#'
                    >
                      contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*  header two */}
        <div className='w-full flex flex-row py-4 px-20  bg-white justify-between shadow-md'>
          <div>
            <nav>
              <ul className='flex flex-row divide-x-2 divide-solid divide-[#DEDFDE]'>
                <li className='pr-4'>
                  <a href=''>
                    <FaCarSide className='text-4xl text-[#F88220]' />
                    <span className='uppercase font-semibold'>Cars</span>
                  </a>
                </li>
                <li className='px-4'>
                  <a href=''>
                    <FaMotorcycle className='text-4xl text-[#989898] hover:text-[#F88220]' />
                    <span className='uppercase font-semibold'>Bikes</span>
                  </a>
                </li>
                <li className='px-4'>
                  <a href=''>
                    <FaTruck className='text-4xl text-[#989898] hover:text-[#F88220]' />
                    <span className='uppercase font-semibold'>Trucks</span>
                  </a>
                </li>
                <li className='px-4'>
                  <a href=''>
                    <FaGears className='text-4xl text-[#989898] hover:text-[#F88220]' />
                    <span className='uppercase font-semibold'>Parts</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div></div>
          <form action='' method='post' className='flex flex-row'>
            <input
              type='text'
              name='quick_search'
              placeholder='Quick Search, Ex: Mercedes-Benz E220'
            />
            <div>
              <span>Cars</span>
              <select name='type-option' id=''>
                <option value='cars' defaultValue='cars'>
                  Cars
                </option>
                <option value='bikes'>Bikes</option>
                <option value='trucks'>Trucks</option>
                <option value='parts'>Parts</option>
              </select>
            </div>
            <div>
              <input type='submit' placeholder='search' />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
