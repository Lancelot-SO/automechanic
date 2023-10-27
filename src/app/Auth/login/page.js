import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

function LoginPage() {
  return (
    <div>
      <div className="flex flex-col bg-pink-50 w-full h-36 border-b-2">
        <div className="flex px-20 flex-col pt-4">
          <h1 className="text-3xl">
            <b>Vehicle</b> Insurance
          </h1>
          <div className="flex flex-row pt-2">
            <small>
              <a href="/" className="cursor-pointer text-black">
                Home
              </a>
            </small>
            <IoMdArrowDropright className="pt-1" />
            <small>
              <a href="/" className="cursor-pointer text-black">
                Vehicle Insurance
              </a>
            </small>
          </div>
          <div>
            <a
              href="/"
              className="flex items-center justify-center font-bold w-40 mt-6 h-10  bg-[#F88220] text-white rounded-sm drop-shadow-md"
            >
              Choose from below
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="bg-gray-100 px-8 h-50 w-1/2 ml-20 py-4 my-6">
          <h2 className="text-3xl pb-4">
            <b>Returning</b> user
          </h2>
          <div class="">
            <form>
              <div className="flex flex-row gap-4">
                <div class="mb-4">
                  <label
                    for="email"
                    class="block text-gray-700 text-sm font-bold mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-80 border rounded py-2 px-3"
                  />
                </div>

                <div class="mb-4">
                  <label
                    for="password"
                    class="block text-gray-700 text-sm font-bold mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="w-80 border rounded py-2 px-3"
                  />
                </div>
              </div>

              <div className="flex flex-row gap-4">
                <button
                  type="submit"
                  class="bg-[#F88220] text-white font-bold py-2 px-4 rounded w-20 "
                >
                  Login
                </button>
                <div class="mb-2 flex flex-row items-center justify-center">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    class="mr-2"
                  />
                  <label
                    for="remember"
                    class="block text-gray-700 text-sm font-bold mb-2 pt-1"
                  >
                    Remember Me
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-1/2 bg-gray-100 my-6 h-50 mr-44 py-4">
          <h2 className="text-3xl pb-4 pl-8">
            <b>New</b> user
          </h2>
          <form className="flex flex-col">
            <div className="flex flex-row">
              <div className="flex flex-row">
                <div className="gap-1 flex flex-row">
                  <input
                    type="radio"
                    id="register"
                    name="register"
                    class="ml-8"
                  />
                  <div className="flex flex-col">
                    <label
                      for="register"
                      class="block text-gray-700 text-sm font-bold pt-4"
                    >
                      Register
                    </label>
                    <small>Create an account for dealers</small>
                  </div>
                </div>
              </div>
              <div className="ml-20">
                <div className="gap-1 flex flex-row">
                  <input
                    type="radio"
                    id="register"
                    name="register"
                    class="ml-8"
                  />
                  <div className="flex flex-col">
                    <label
                      for="register"
                      class="block text-gray-700 text-sm font-bold pt-4"
                    >
                      Add offer
                    </label>
                    <small>Submit your personal offers</small>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              class="bg-[#F88220] ml-8 text-white mt-6 font-bold py-2 px-2 rounded w-20 border-1 border-orange-700"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
