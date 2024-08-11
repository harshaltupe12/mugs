import React from 'react'

function Projects() {
  return (
    <div>
        <div className="container md:px-0 px-2">
        <div className="top w-full flex flex-col justify-center items-center">
          <div className="header">
            <h2 className="text-5xl font-bold">My Projects</h2>
          </div>
          <div className="content flex flex-col justify-center items-center">
            <div className="flex flex-col-reverse justify-center items-center text-xs md:text-lg mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <div className="second">
                Molestias dolorem laboriosam error fugiat dignissimos possimus
              </div>
            </div>
          </div>
          <div className="buttons flex gap-5 mt-10">
            <div className="all border border-black hover:bg-[#FD6F00] hover:text-white md:px-6 md:text-xl md:py-2 rounded-lg text-center px-2 py-1 text-xs">All</div>
            <div className="ui border border-black hover:bg-[#FD6F00] hover:text-white md:px-6 md:text-xl md:py-2 rounded-lg text-center px-2 py-1 text-xs">UI/UX</div>
            <div className="web border bg-[#FD6F00] border-black hover:bg-[#FD6F00] hover:text-white md:px-6 md:text-xl md:py-2 rounded-lg text-center px-2 py-1 text-xs">Web Design</div>
            <div className="app border border-black hover:bg-[#FD6F00] hover:text-white md:px-6 md:text-xl md:py-2 rounded-lg text-center px-2 py-1 text-xs">App Design</div>
            <div className="graph border border-black hover:bg-[#FD6F00] hover:text-white md:px-6 md:text-xl md:py-2 rounded-lg text-center px-2 py-1 text-xs">Graphic Design</div>
          </div>
        </div>

        {/* Bottom */}

        <div className="bottom flex md:flex-row flex-col md:justify-evenly mt-10 gap-3">
            <div className="project1">
                <img src="/project1.png" alt="" />
            </div>
            <div className="project2">
            <img src="/project2.png" alt="" />
            </div>
            <div className="project3">
            <img src="/project3.png" alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Projects