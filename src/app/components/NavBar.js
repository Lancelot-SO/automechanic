"use client";
import React, { useState } from "react";
import { UserIcon, PowerIcon } from "@heroicons/react/24/solid";
function NavBar() {
  return (
    <header>
      <div className='w-full flex flex-col'>
        <div className='w-full flex flex-row py-4 px-20  bg-[#414141] text-white justify-between '>
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
                <ul className='absolute hidden text-[#BCBCBC] pt-1 group-hover/main:block w-24 ml-[-94px] '>
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
                  <li className='group/item  bg-[#414141] hover:text-white w-[180px] px-2'>
                    <a
                      className='rounded-t py-2 px-2 flex flex-col w-full'
                      href='#'
                    >
                      Car list
                    </a>
                    <ul className='absolute hidden l-10 bg-[#414141] hover:text-white w-[150px] px-2 my-[130px] group-hover/item:block top-0 left-[180px]'>
                      <li>
                        <a
                          className='rounded-t py-1  flex flex-col w-full'
                          href='#'
                        >
                          Car Detail
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='group/item  bg-[#414141] hover:text-white w-[180px] px-2'>
                    <a
                      className='rounded-t py-2 px-2 flex flex-col w-full'
                      href='#'
                    >
                      Blog
                    </a>
                    <ul className='absolute hidden l-10 bg-[#414141] hover:text-white w-[150px] px-2 my-[170px] group-hover/item:block top-0 left-[180px]'>
                      <li>
                        <a
                          className='rounded-t py-1  flex flex-col w-full'
                          href='#'
                        >
                          Blog post
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='group/item  bg-[#414141] hover:text-white w-[180px] px-2'>
                    <a
                      className='rounded-t py-2 px-2 flex flex-col w-full'
                      href='#'
                    >
                      Dealer list
                    </a>
                    <ul className='absolute hidden l-10 bg-[#414141] hover:text-white w-[150px] px-2 my-[200px] group-hover/item:block top-0 left-[180px]'>
                      <li>
                        <a
                          className='rounded-t py-1  flex flex-col w-full '
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
        <div className='w-full fle flex-row'>
          <nav>
            <ul>
              <li>
                <a href=''>Cars</a>
              </li>
              <li>
                <a href=''>Bikes</a>
              </li>
              <li>
                <a href=''>Trucks</a>
              </li>
              <li>
                <a href=''>Parts</a>
              </li>
            </ul>
          </nav>
          <form action='' method='post'>
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
