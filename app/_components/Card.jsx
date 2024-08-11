import React from 'react'

function Card() {
  return (
    <div>
        <div className="container flex px-2 md:mx-32 mx-10 md:px-4 md:py-4 md:gap-5 items-center justify-center border">
            <div className="left md:h-[250px] h-32 w-32 md:w-[550px] ">
                <img src="/user.png" alt="" />
            </div>
            <div className="md:-ml-32 right text-xs md:text-lg ">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe recusandae distinctio accusamus,</p> <p>minima ab impedit, fugiat assumenda odio debitis quibusdam alias iusto. Facere assumenda</p> <p>laboriosam dignissimos iure dicta velit eos est saepe omnis? Consequuntur, fugiat.</p>
            </div>
        </div>
    </div>
  )
}

export default Card