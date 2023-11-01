"use client";
import React, { useEffect, useState } from "react";
import {
  UserIcon,
  PowerIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { FaCarSide, FaMotorcycle, FaTruck, FaGears } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { GiMechanicGarage } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [iconColor, setIconColor] = useState({
    car: "text-[#F88220]",
    bike: "text-[#989898]",
    truck: "text-[#989898]",
    part: "text-[#989898]",
  });
  useEffect(() => {
    if (pathname === "/product/car")
      setIconColor({
        car: "text-[#F88220]",
        bike: "text-[#989898]",
        truck: "text-[#989898]",
        part: "text-[#989898]",
      });
    else if (pathname === "/product/bike") {
      setIconColor({
        car: "text-[#989898]",
        bike: "text-[#F88220]",
        truck: "text-[#989898]",
        part: "text-[#989898]",
      });
    } else if (pathname === "/product/truck") {
      setIconColor({
        car: "text-[#989898]",
        bike: "text-[#989898]",
        truck: "text-[#F88220]",
        part: "text-[#989898]",
      });
    } else if (pathname === "/product/part") {
      setIconColor({
        car: "text-[#989898]",
        bike: "text-[#989898]",
        truck: "text-[#989898]",
        part: "text-[#F88220]",
      });
    }
  }, [pathname]);
  return (
    <header>
      <div className="w-full flex flex-col">
        {/*  header one */}
        <div className="w-full flex flex-row py-4 px-20  bg-[#414141] text-white justify-between">
          <div className="flex flex-row divide-x-2 divide-solid divide-[#575757] place-items-center">
            <h1 className="text-4xl uppercase pr-5 ">
              <Link href="/">Automarket</Link>
            </h1>
            <p className="text-[#A5A2A5] uppercase text-md  pl-5">
              This is a title
            </p>
          </div>
          <div className="flex flex-row place-items-center ">
            <UserIcon className="h-6 w-6 text-[#F88220] pr-1" />
            <div className="flex flex-row divide-x-2 divide-solid divide-[#575757] ">
              <Link
                className="text-[#B4BCBC] text-base font-bold pr-4"
                href="/dealer"
              >
                Dealer Name
              </Link>
              <div className="px-4">
                <PowerIcon className="h-6 w-6 text-[#838994] font-bold" />
              </div>
              <Link className="pl-4 text-[#BCBCBC]" href="/auth/login">
                Sign Out
              </Link>
            </div>
          </div>
          <div className="flex flex-row place-items-center pr-20">
            <button
              className="bg-[#4D4D4D] hover:bg-[#595959] text-white font-bold py-2 px-4 rounded uppercase mr-6"
              onClick={() => {
                router.push("/offer/new");
              }}
            >
              + add an offer
            </button>
            <div>
              <div className="group/main inline-block relative">
                <button className="bg-[#4D4D4D] hover:bg-[#595959] text-white font-bold py-2 px-4 rounded uppercase mr-6">
                  <span className="mr-1">Pages</span>
                </button>
                <ul className="absolute hidden text-[#BCBCBC] pt-1 group-hover/main:block w-24 ml-[-94px]  divide-y-2 divide-solid divide-[#575757]  z-10">
                  <li className="group/item  bg-[#414141] hover:text-white w-[180px] px-2">
                    <Link
                      className="rounded-t py-2 px-2 flex flex-col w-full"
                      href="/"
                    >
                      Home Page
                    </Link>
                  </li>
                  <li className="group/item  bg-[#414141] hover:text-white w-[180px] px-2">
                    <Link
                      className="rounded-t py-2 px-2 flex flex-col w-full"
                      href="/offer/new"
                    >
                      Add an Offer
                    </Link>
                  </li>
                  <li className="group/item  bg-[#414141] hover:text-white w-[180px] px-2">
                    <Link
                      className="rounded-t py-2 px-2 flex flex-col w-full"
                      href="/Auth/login"
                    >
                      Login page
                    </Link>
                  </li>
                  <li className="group/item  bg-[#414141] hover:text-white w-[180px] px-2 flex flex-row">
                    <Link
                      className="rounded-t py-2 px-2 flex flex-col w-full"
                      href="/product/car"
                    >
                      Car list
                    </Link>
                    <ChevronRightIcon className="h-6 w-6 text-[#BCBCBC] pr-1 self-center" />
                    <ul className="absolute hidden l-10 bg-[#414141] hover:text-white w-[150px] px-2 my-[128px] group-hover/item:block top-0 left-[180px]">
                      <li>
                        <Link
                          className="rounded-t py-2  flex flex-col w-full"
                          href="/product/car"
                        >
                          Car Detail
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group/item  bg-[#414141] hover:text-white w-[180px] px-2 flex flex-row">
                    <Link
                      className="rounded-t py-2 px-2 flex flex-col w-full"
                      href="/blog"
                    >
                      Blog
                    </Link>
                    <ChevronRightIcon className="h-6 w-6 text-[#BCBCBC] pr-1 self-center" />

                    <ul className="absolute hidden l-10 bg-[#414141] hover:text-white w-[150px] px-2 my-[168px] group-hover/item:block top-0 left-[180px]">
                      <li>
                        <Link
                          className="rounded-t py-2  flex flex-col w-full"
                          href="/blog"
                        >
                          Blog post
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group/item  bg-[#414141] hover:text-white w-[180px] px-2 flex flex-row">
                    <Link
                      className="rounded-t py-2 px-2 flex flex-col w-full"
                      href="/dealer"
                    >
                      Dealer list
                    </Link>
                    <ChevronRightIcon className="h-6 w-6 text-[#BCBCBC] pr-1 self-center" />
                    <ul className="absolute hidden l-10 bg-[#414141] hover:text-white w-[150px] px-2 my-[210px] group-hover/item:block top-0 left-[180px]">
                      <li>
                        <Link
                          className="rounded-t py-2  flex flex-col w-full "
                          href="/dealer"
                        >
                          Dealer Detail
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group/item  bg-[#414141] hover:text-white w-[180px] px-2">
                    <Link
                      className="rounded-t py-2 px-2 flex flex-col w-full"
                      href="/insurance"
                    >
                      Insurance
                    </Link>
                  </li>
                  <li className="group/item  bg-[#414141] hover:text-white w-[180px] px-2">
                    <Link
                      className="rounded-t py-2 px-2 flex flex-col w-full"
                      href="/under_construction"
                    >
                      Under construction
                    </Link>
                  </li>
                  <li className="group/item  bg-[#414141] hover:text-white w-[180px] px-2">
                    <Link
                      className="rounded-t py-2 px-2 flex flex-col w-full"
                      href="/contact"
                    >
                      contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*  header two */}
        <div className="w-full flex flex-row py-4 px-20  bg-white shadow-md">
          <div>
            <nav>
              <ul className="flex flex-row divide-x-2 divide-solid divide-[#DEDFDE]">
                <li className="pr-4">
                  <Link href="/product/car">
                    <FaCarSide className={`text-4xl ${iconColor.car}`} />
                    <span className="uppercase font-semibold">Cars</span>
                  </Link>
                </li>
                <li className="px-4">
                  <Link href="/product/bike">
                    <FaMotorcycle
                      className={`text-4xl ${iconColor.bike} hover:text-[#F88220]`}
                    />
                    <span className="uppercase font-semibold">Bikes</span>
                  </Link>
                </li>
                <li className="px-4">
                  <Link href="/product/truck">
                    <FaTruck
                      className={`text-4xl ${iconColor.truck} hover:text-[#F88220]`}
                    />
                    <span className="uppercase font-semibold">Trucks</span>
                  </Link>
                </li>
                <li className="px-4">
                  <Link href="/product/part">
                    <FaGears className="text-4xl text-[#989898] hover:text-[#F88220]" />
                    <span className="uppercase font-semibold">Parts</span>
                  </Link>
                </li>

                <li className="px-4">
                  <Link href="/product/mechanic">
                    <GiMechanicGarage className="text-4xl text-[#989898] hover:text-[#F88220]" />
                    <span className="uppercase font-semibold">Mechanic</span>
                  </Link>
                </li>
                <li className="pr-12">
                  <hr className="divide-x-2 divide-solid divide-[#DEDFDE] rotate-90" />
                </li>
              </ul>
            </nav>
          </div>

          <form
            action=""
            method="post"
            className="flex flex-row pr-24 place-items-center grow"
          >
            <div className="flex flex-row grow drop-shadow-md h-10 ">
              <input
                type="text"
                name="quick_search"
                placeholder="Quick Search, Ex: Mercedes-Benz E220"
                className="block grow-[1]  focus:outline-none py-1.5 pl-7 border-0 mr-4 rounded-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grey-400 "
              />

              <select
                name="type-option"
                id=""
                className="w-24 px-2  mr-2 drop-shadow-md rounded-md border-0 focus:outline-none  ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-grey-400"
              >
                <option value="cars" defaultValue="cars">
                  Cars
                </option>
                <option value="bikes">Bikes</option>
                <option value="trucks">Trucks</option>
                <option value="parts">Parts</option>
                <option value="mechanic">Mechanic</option>
              </select>

              <button
                type="submit"
                className="flex items-center w-24 mr-2 p-2 h-10 self-center bg-[#F88220] text-white rounded-md uppercase drop-shadow-md"
              >
                <FaSearch className="mr-1" /> Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
