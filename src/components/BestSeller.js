import "../App.css";

function BestSeller() {
  return (
    <>
      <div className="bg-[#2F241F] py-8 lg:px-36">
        <div className="flex flex-row md:px-16 justify-center items-center lg:justify-start">
          <div className="text-[#E5F0B6] flex flex-col ml-4 lg:ml-0">
            <p>OUR PRODUCTS</p>
            <h2 className="font-bold text-lg md:text-2xl lg:text-4xl md:w-72 lg:w-full">This month’s best seller</h2>
          </div>
          <button className="btn ml-8 md:ml-72 lg:ml-auto bg-[#E5F0B6] text-[#2F241F] hover:bg-[#aab674] hover:text-white">See More</button>
        </div>
        <div className="px-4 mt-4 md:px-8">
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2 ">
            <a href="#item1" className="btn btn-xs bg-[#E5F0B6] hover:bg-[#aab674] hover:text-white text-black">
              1
            </a>
            <a href="#item2" className="btn btn-xs bg-[#E5F0B6] hover:bg-[#aab674] hover:text-white text-black">
              2
            </a>
            <a href="#item3" className="btn btn-xs bg-[#E5F0B6] hover:bg-[#aab674] hover:text-white text-black">
              3
            </a>
            <a href="#item4" className="btn btn-xs bg-[#E5F0B6] hover:bg-[#aab674] hover:text-white text-black">
              4
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSeller;
