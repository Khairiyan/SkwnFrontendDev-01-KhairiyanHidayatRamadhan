import "../App.css";

function Categories() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-8 md:flex-row-reverse lg:px-36">
        <div className="md:flex md:flex-col ">
          <p className="text-[#2F241F] md:ml-8 text-center md:text-start">Categories</p>
          <h2 className="font-bold text-xl px-8 text-center mt-2 mb-5 text-[#2F241F] md:text-start md:text-4xl">
            Furniture Sets <br /> Recommendations
          </h2>
          <div className="px-8">
            <div className="collapse rounded-t-lg">
              <input type="checkbox" className="peer" />
              <div className="font-bold collapse-title bg-[#FCFAFA] text-black peer-checked:bg-[#E5F0B6] peer-checked:text-black">Bedroom</div>
              <div className="collapse-content bg-[#FCFAFA] text-black peer-checked:bg-[#E5F0B6] peer-checked:text-black">
                <p className="">Enjoy a great living room aesthetics with your family Designs created for increased comfortability</p>
              </div>
            </div>
            <div className="collapse">
              <input type="checkbox" className="peer" />
              <div className="font-bold collapse-title bg-[#FCFAFA] text-black peer-checked:bg-[#E5F0B6] peer-checked:text-black">Living Room</div>
              <div className="collapse-content bg-[#FCFAFA] text-black peer-checked:bg-[#E5F0B6] peer-checked:text-black">
                <p className="">Enjoy a great living room aesthetics with your family Designs created for increased comfortability</p>
              </div>
            </div>
            <div className="collapse">
              <input type="checkbox" className="peer" />
              <div className="font-bold collapse-title bg-[#FCFAFA] text-black peer-checked:bg-[#E5F0B6] peer-checked:text-black">Home Office</div>
              <div className="collapse-content bg-[#FCFAFA] text-black peer-checked:bg-[#E5F0B6] peer-checked:text-black">
                <p className="">Enjoy a great living room aesthetics with your family Designs created for increased comfortability</p>
              </div>
            </div>
            <div className="collapse rounded-b-lg ">
              <input type="checkbox" className="peer" />
              <div className="font-bold collapse-title bg-[#FCFAFA] text-black peer-checked:bg-[#E5F0B6] peer-checked:text-black">Gaming Room</div>
              <div className="collapse-content bg-[#FCFAFA] text-black peer-checked:bg-[#E5F0B6] peer-checked:text-black">
                <p className="">Enjoy a great living room aesthetics with your family Designs created for increased comfortability</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 px-3 mt-6">
          <div className="grid flex-grow h-32 md:h-full card  rounded-box place-items-center">
            <div className="h-96 carousel carousel-vertical rounded-box">
              <div className="carousel-item h-full">
                <img src="https://placeimg.com/256/400/arch" />
              </div>
            </div>
          </div>
          <div className="grid flex-grow h-32 card  md:h-full rounded-box place-items-center">
            <div className="h-96 carousel carousel-vertical rounded-box">
              <div className="carousel-item h-full">
                <img src="https://placeimg.com/256/400/arch" />
              </div>
            </div>
          </div>
          <div className="grid flex-grow h-32 card md:h-full rounded-box place-items-center">
            <div className="h-96 carousel carousel-vertical rounded-box">
              <div className="carousel-item h-full">
                <img src="https://placeimg.com/256/400/arch" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
