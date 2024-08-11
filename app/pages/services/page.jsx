import React from "react";

function Services() {
  return (
    <div>
      <div className="container">
        <div className="top w-full flex flex-col justify-center items-center">
          <div className="header">
            <h2 className="text-5xl font-bold">Services</h2>
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
        <div className="bottom flex md:flex-row flex-col w-full md:justify-evenly items-center justify-center gap-5 mt-14">
            <div className="card1 bg-[#F8F8F8] h-[max-content] w-[300px] p-5">
                <div className="top"><img src="/image1.png" alt="" /></div>
                <div className="bottom mt-4">
                    <h2 className="font-bold text-3xl my-2" >UI/UX</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="card2 bg-[#F8F8F8] h-[max-content] w-[300px] p-5">
            <div className="top"><img src="/image2.png" alt="" /></div>
                <div className="bottom mt-4">
                    <h2 className="font-bold text-3xl my-2">Web Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="card3 bg-[#F8F8F8]  h-[max-content] w-[300px] p-5">
            <div className="top"><img src="/image3.png" alt="" /></div>
                <div className="bottom mt-4">
                    <h2 className="font-bold text-3xl my-2">App Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="card4 bg-[#F8F8F8]  h-[max-content] w-[300px] p-5">
            <div className="top"><img src="/image4.png" alt="" /></div>
                <div className="bottom mt-4">
                    <h2 className="font-bold text-3xl my-2">Graphic Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
