import React from "react";

function Design() {
  return (
    <div>
      <div className="contain">
        <div className="top">
          <div className="top w-full flex flex-col justify-center items-center">
            <div className="header">
              <h2 className="text-5xl font-bold">Lets Design Together</h2>
            </div>
            <div className="content flex flex-col justify-center items-center">
              <div className="flex flex-col-reverse justify-center items-center text-xs md:text-lg mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <div className="second">
                  Molestias dolorem laboriosam error fugiat dignissimos possimus
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom mt-10">
          <div className="flex items-center justify-center space-x-2 mt-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 border w-[500px] border-gray-300 rounded-md outline-none"
            />
            <button className="bg-orange-500 text-sm md:text-lg p-1 text-white md:p-3 rounded-md">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
