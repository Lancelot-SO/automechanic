"use client";
import React, { useEffect, useState } from "react";
import {
  UserIcon,
  PowerIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import {
  FaCarSide,
  FaMotorcycle,
  FaTruck,
  FaGears,
  FaBars,
} from "react-icons/fa6";
import { FaSearch, FaTimes } from "react-icons/fa";
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

  const [nav, setNav] = useState(false);
  return (
    <header>
      <div className="w-full flex flex-col">
        {/*  header one */}
        <div className="w-full lg:w-full flex flex-row py-4 lg:px-20  bg-[#414141] text-white justify-between">
          <div className="flex flex-row divide-x-2 divide-solid divide-[#575757] place-items-center">
            <h1 className="text-xl px-10 lg:px-0 lg:text-4xl uppercase pr-5 ">
              <Link href="/">Automarket</Link>
            </h1>
            <p className="hidden lg:block text-[#A5A2A5] uppercase text-md  pl-5">
              This is a title
            </p>
          </div>
          <div className="hidden lg:flex flex-row place-items-center ">
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
              className="hidden lg:flex bg-[#4D4D4D] hover:bg-[#595959] text-white font-bold py-2 px-4 rounded uppercase mr-6"
              onClick={() => {
                router.push("/offer/new");
              }}
            >
              + add an offer
            </button>
            <div>
              <div className="group/main inline-block relative">
                <button className="bg-[#4D4D4D] hover:bg-[#595959] text-white font-bold py-2 px-4 rounded uppercase mr-6 hidden lg:flex">
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
                      href="/dealer_page"
                    >
                      Dealer page
                    </Link>
                  </li>
                  <li className="group/item  bg-[#414141] hover:text-white w-[180px] px-2 flex flex-row">
                    <Link
                      className="rounded-t py-2 px-2 flex flex-col w-full"
                      href="/manufucturer"
                    >
                      manufucturer
                    </Link>
                    <ChevronRightIcon className="h-6 w-6 text-[#BCBCBC] pr-1 self-center" />
                    <ul className="absolute hidden l-10 bg-[#414141] hover:text-white w-[150px] px-2 my-[213px] group-hover/item:block top-0 left-[180px]">
                      <li>
                        <Link
                          className="rounded-t py-2  flex flex-col w-full "
                          href="/manufucturer/1"
                        >
                          list
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="group/item  bg-[#414141] hover:text-white w-[180px] px-2 flex flex-row">
                    <Link
                      className="rounded-t py-2 px-2 flex flex-col w-full"
                      href="/dealer"
                    >
                      Dealer
                    </Link>

                    <ChevronRightIcon className="h-6 w-6 text-[#BCBCBC] pr-1 self-center" />
                    <ul className="absolute hidden l-10 bg-[#414141] hover:text-white w-[150px] px-2 my-[255px] group-hover/item:block top-0 left-[180px]">
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
                      href="/manufucturer_form"
                    >
                      Manufucturer Form
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
              <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer z-10 lg:hidden mb-4"
              >
                {nav ? <FaTimes /> : <FaBars />}
              </div>
              {nav && (
                <ul className="absolute text-[#BCBCBC] pt-1 group-hover/main:block lg:w-24 lg:ml-[-94px] ml-[-150px]  divide-y-2 divide-solid divide-[#575757]  z-10">
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
                      href="/dealer_page"
                    >
                      Dealer page
                    </Link>
                  </li>
                  <li className="group/item  bg-[#414141] hover:text-white w-[180px] px-2 flex flex-row">
                    <Link
                      className="rounded-t py-2 px-2 flex flex-col w-full"
                      href="/manufucturer"
                    >
                      manufucturer
                    </Link>
                    <ChevronRightIcon className="h-6 w-6 text-[#BCBCBC] pr-1 self-center" />
                    <ul className="absolute hidden l-10 bg-[#414141] hover:text-white w-[150px] px-2 my-[213px] group-hover/item:block top-0 left-[180px]">
                      <li>
                        <Link
                          className="rounded-t py-2  flex flex-col w-full "
                          href="/manufucturer/1"
                        >
                          list
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="group/item  bg-[#414141] hover:text-white w-[180px] px-2 flex flex-row">
                    <Link
                      className="rounded-t py-2 px-2 flex flex-col w-full"
                      href="/dealer"
                    >
                      Dealer
                    </Link>

                    <ChevronRightIcon className="h-6 w-6 text-[#BCBCBC] pr-1 self-center" />
                    <ul className="absolute hidden l-10 bg-[#414141] hover:text-white w-[150px] px-2 my-[255px] group-hover/item:block top-0 left-[180px]">
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
                      href="/manufucturer_form"
                    >
                      Manufucturer Form
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
              )}
            </div>
          </div>
        </div>

        {/*  header two */}
        <div className="lg:w-full flex flex-col lg:flex-row py-4 lg:px-20 px-4  bg-white shadow-md">
          <div className="">
            <nav className="">
              <ul className="w-full flex flex-row divide-x-2 divide-solid divide-[#DEDFDE] mb-4">
                <li className="pr-4">
                  <Link href="/product/car">
                    <FaCarSide
                      className={`text-xl lg:text-4xl ${iconColor.car}`}
                    />
                    <span className="uppercase  lg:font-semibold lg:text-lg text-xs">
                      Cars
                    </span>
                  </Link>
                </li>
                <li className="px-3">
                  <Link href="/product/bike">
                    <FaMotorcycle
                      className={`text-xl lg:text-4xl ${iconColor.bike} hover:text-[#F88220]`}
                    />
                    <span className="uppercase lg:font-semibold lg:text-lg text-xs">
                      Bikes
                    </span>
                  </Link>
                </li>
                <li className="px-3">
                  <Link href="/product/truck">
                    <FaTruck
                      className={`text-xl lg:text-4xl ${iconColor.truck} hover:text-[#F88220]`}
                    />
                    <span className="uppercase lg:font-semibold lg:text-lg text-xs">
                      Trucks
                    </span>
                  </Link>
                </li>
                <li className="px-3">
                  <Link href="/product/part">
                    <FaGears className="text-xl lg:text-4xl text-[#989898] hover:text-[#F88220]" />
                    <span className="uppercase lg:font-semibold lg:text-lg text-xs">
                      Parts
                    </span>
                  </Link>
                </li>

                <li className="px-3">
                  <Link href="/product/mechanic">
                    <GiMechanicGarage className="text-xl lg:text-4xl text-[#989898] hover:text-[#F88220]" />
                    <span className="uppercase lg:font-semibold lg:text-lg text-xs">
                      Mechanic
                    </span>
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
            className="flex flex-row pr-8 lg:pr-24 place-items-center grow"
          >
            <div className="flex flex-row grow drop-shadow-md h-10 ">
              <input
                type="text"
                name="quick_search"
                placeholder="Quick Search, Ex: Toyota"
                className="block grow-[1]  focus:outline-none py-1.5 pl-7 border-0 mr-1 lg:mr-4 rounded-md ring-1 
                ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grey-400 "
              />

              <select
                name="type-option"
                id=""
                className="hidden lg:w-24 px-2  mr-2 drop-shadow-md rounded-md border-0 
                focus:outline-none lg:flex ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-grey-400"
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
                className="flex items-center w-24 mr-2 p-2 h-10 self-center
                 bg-[#F88220] text-white rounded-md uppercase drop-shadow-md"
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
