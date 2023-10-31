import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

function PartListPage() {
  return (
    <div>
      <div className="flex flex-col bg-pink-50 w-full h-36 border-b-2">
        <div className="flex px-20 flex-col pt-4">
          <h1 className="text-2xl font-bold">Buy your parts</h1>
          <div className="flex flex-row pt-2">
            <small>
              <a href="/" className="cursor-pointer text-black">
                Home
              </a>
            </small>
            <IoMdArrowDropright className="pt-1" />
            <small>
              <a href="/" className="cursor-pointer text-black">
                Parts
              </a>
            </small>
          </div>
          <div className="flex flex-row gap-2">
            <a
              href="/"
              className="flex items-center justify-center w-28 h-10 font-bold mt-6  bg-[#F88220] text-white rounded-sm drop-shadow-md"
            >
              1. New offer
            </a>
            <a
              href="/"
              className="flex items-center justify-center w-28 h-10 font-bold mt-6  bg-gray-500 text-white rounded-sm drop-shadow-md"
            >
              2. Preview
            </a>
            <a
              href="/"
              className="flex items-center justify-center w-28 h-10 font-bold mt-6  bg-gray-500 text-white rounded-sm drop-shadow-md"
            >
              3. Submit
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 px-8 h-50 mr-44  ml-20 py-4 pr-12 my-6 flex flex-col">
        <h2 className="text-2xl mb-4">
          Buy ​​your vehicle parts on <b>AutoMarket</b> and benefit from more
          than 1 million potential buyers every month!
        </h2>
        <ul>
          <li>Required fields are marked with *</li>
          <li>
            Please post offers only on the car (parts are a special category).
          </li>
          <li>If you are a dealer, please visit the dealers section</li>
          <li>
            If you have difficulties in posting an offer on the website, please
            call 055 631 880 4
          </li>
        </ul>
      </div>
      <section className="flex px-20 flex-col">
        <div>
          <h1 className="pb-4 text-2xl">
            <b>Vehicle</b> data
          </h1>
          <form className="flex flex-col">
            <div className="border-b-2 pb-2 mb-4">
              <div className="flex flex-row pb-2 pl-10 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="manufacturer" className="text-xs">
                    Manufacturer:
                    <small className="text-red-500 text-lg">*</small>
                  </label>
                  <select
                    id="manufacturer"
                    name="manufacturer"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  >
                    <option value="select">select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="model" className="text-xs">
                    Model:<small className="text-red-500 text-lg">*</small>
                  </label>
                  <select
                    id="model"
                    name="model"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  >
                    <option value="select">select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="year" className="text-xs">
                    Year:
                    <small className="text-red-500 text-lg">*</small>
                  </label>
                  <select
                    id="year"
                    name="year"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  >
                    <option value="select">select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="body" className="text-xs">
                    Body Type:<small className="text-red-500 text-lg">*</small>
                  </label>
                  <select
                    id="body"
                    name="body"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  >
                    <option value="select">select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <h1 className="pb-4 text-2xl">
              <b>Parts</b> details
            </h1>
            <div className="border-b-2 pb-2 mb-4">
              <div className="flex flex-row pb-2 pl-10 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="partName" className="text-xs">
                    Part Name:
                    <small className="text-red-500 text-lg">*</small>
                  </label>
                  <select
                    id="partName"
                    name="partName"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  >
                    <option value="select">select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="partType" className="text-xs">
                    Part Type:<small className="text-red-500 text-lg">*</small>
                  </label>
                  <select
                    id="partType"
                    name="partType"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  >
                    <option value="select">select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="quantity" className="text-xs">
                    Quantity:
                    <small className="text-red-500 text-lg">*</small>
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  >
                    <option value="select">select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="size" className="text-xs">
                    Size:<small className="text-red-500 text-lg">*</small>
                  </label>
                  <select
                    id="size"
                    name="size"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  >
                    <option value="select">select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>

            <h1 className="pb-4 text-2xl">
              <b>Parts</b> description
            </h1>

            <div className="pl-10 flex flex-col border-b-2">
              <label htmlFor="technical" className="text-xs">
                Some text:
              </label>
              <textarea
                id="desc"
                name="desc"
                rows="8"
                cols="50"
                className="border-2 mr-64 mb-6"
              ></textarea>
            </div>

            <h1 className="pb-4 text-2xl">
              <b>Parts</b> Installation
            </h1>

            <div className="pl-10 flex flex-col border-b-2">
              <label htmlFor="technical" className="text-xs">
                Installation Instructions:
              </label>
              <textarea
                id="desc"
                name="desc"
                rows="4"
                cols="50"
                className="border-2 mr-64 mb-6"
              ></textarea>
            </div>

            <h2 className="pb-4 text-2xl">
              <b>Parts</b> price
            </h2>
            <div className="flex flex-row gap-8 pl-10 border-b-2 mb-4 pb-4">
              <div className="flex flex-col">
                <label htmlFor="price" className="text-xs">
                  Price:
                  <small className="text-red-500 text-lg">*</small>
                </label>
                <input
                  id="price"
                  name="price"
                  className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="technical" className="text-xs">
                  Currency:
                  <small className="text-red-500 text-lg">*</small>
                </label>
                <select
                  id="technical"
                  name="technical"
                  className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                >
                  <option value="select">Euro</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className="flex items-center gap-2 mt-8">
                <input
                  type="checkbox"
                  id="abs-checkbox"
                  className="ml-2 h-3 w-3 text-indigo-600"
                />
                <label htmlFor="priceNegotiable" className="text-gray-700">
                  Price Negotiable
                </label>
              </div>
            </div>

            <h2 className="pb-4 text-2xl">
              <b>Buyer</b> details
            </h2>
            <div className=" border-b-2 pb-2 mb-4">
              <div className="flex flex-row pb-2 pl-10 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs">
                    Name:<small className="text-red-500 text-lg">*</small>
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-xs">
                    Phone:<small className="text-red-500 text-lg">*</small>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone2" className="text-xs">
                    Phone 2:<small className="text-red-500 text-lg">*</small>
                  </label>
                  <input
                    id="phone2"
                    name="phone2"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="city" className="text-xs">
                    City:<small className="text-red-500 text-lg">*</small>
                  </label>
                  <input
                    id="city"
                    name="city"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-row pb-2 pl-10 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="country" className="text-xs">
                    Country:<small className="text-red-500 text-lg">*</small>
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  >
                    <option value="select">select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="state" className="text-xs">
                    State:<small className="text-red-500 text-lg">*</small>
                  </label>
                  <select
                    id="state"
                    name="state"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  >
                    <option value="select">select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs">
                    Email:<small className="text-red-500 text-lg">*</small>
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="password" className="text-xs">
                    Password:<small className="text-red-500 text-lg">*</small>
                  </label>
                  <input
                    id="password"
                    name="password"
                    className="block w-60 mt-1 p-1 border border-gray-200 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="flex flow-row items-center justify-between">
              <div className="flex items-center gap-2 pl-10 mb-8 mt-4">
                <input
                  type="checkbox"
                  id="abs-checkbox"
                  className="ml-2 h-3 w-3 text-indigo-600"
                />
                <label htmlFor="abs-checkbox" className="text-gray-700">
                  I agree to the Terms and Conditions.
                </label>
              </div>
              <button
                type="submit"
                className="flex items-center mr-24 justify-center mb-8 w-28 h-10 font-bold mt-6  bg-[#F88220] text-white rounded-sm drop-shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default PartListPage;
