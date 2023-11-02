"use client";

import React from "react";
import LoanCalculator from "@/app/components/LoanCalculator";
import DealerSearchFilter from "@/app/components/DealerSearchFilter";
import ManufucturerList from "@/app/components/ManufucturerList";

const listRender = (listLength) => {
  return Array.from({ length: listLength }).map((_, index) => (
    <ManufucturerList key={index} />
  ));
};

function ManufucturerListPage() {
  return (
    <div className="w-full flex flex-col  pt-6 drop-shadow-md bg-[#F7F3F7] ">
      {/* page one */}
      <section className="w-full flex flex-col pl-20 pr-[11rem]">
        <div className="flex w-full flex-col space-y-20">
          <div>
            <h2 className="text-2xl">
              <strong>Dealers</strong> ( 2.100 results )
            </h2>
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Dealers</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full flex-row justify-between ">
            <nav>
              <div className="space-x-2 ">
                <button className="btn bg-[#F37D1A] text-white btn-sm capitalize h-[2.5rem]">
                  Search for Manufucturer
                </button>
              </div>
            </nav>
          </div>
        </div>
      </section>
      {/* page two */}
      <section className=" bg-white pl-20 pr-[11rem]">
        <div className="flex flex-row py-8">
          <form action="" className="flex flex-col w-1/4 space-y-8">
            <DealerSearchFilter />
            <LoanCalculator />
          </form>

          <div className="flex flex-col pl-4 w-3/4">
            {/* layer one */}
            <div className="flex felx-row justify-between">
              <div className="flex flex-row space-x-2">
                <div>
                  <select
                    name="sort_by"
                    id="sort_by "
                    className=" h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1"
                  >
                    <option>Sort by</option>
                    <option>Date</option>
                    <option>Price</option>
                    <option>Views</option>
                  </select>
                </div>

                <div>
                  <select
                    name="sort_by"
                    id="sort_by"
                    className=" h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1"
                  >
                    <option>view amount</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="join space-x-2">
                  <button className="join-item btn btn-active">1</button>
                  <button className="join-item btn ">2</button>
                  <button className="join-item btn ">3</button>
                  <button className="join-item btn btn-disabled">...</button>
                  <button className="join-item btn">8</button>
                  <button className="join-item btn">Next</button>
                </div>
              </div>
            </div>
            <div className="pt-8 pb-2">
              <hr className="w-full " />
            </div>
            {/* layer two  */}
            <div className="w-full">
              <div>{listRender(9)}</div>
            </div>
            <div className="pb-8 pt-2">
              <hr className="w-full hidden " />
            </div>
            {/* layer three */}

            <div className="join space-x-2 self-end">
              <button className="join-item btn btn-active ">1</button>
              <button className="join-item btn ">2</button>
              <button className="join-item btn ">3</button>
              <button className="join-item btn btn-disabled">...</button>
              <button className="join-item btn">8</button>
              <button className="join-item btn">Next</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ManufucturerListPage;
