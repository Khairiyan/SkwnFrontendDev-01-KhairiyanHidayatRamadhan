import "../App.css";

function SentEmail() {
  return (
    <div className="form-control mt-6">
      <div className="input-group">
        <input type="text" placeholder="Enter your email here" className="input input-bordered border-none md:w-72 lg:w-96 bg-white" />
        <button className=" group btn btn-square border-none bg-[#E5F0B6] hover:bg-[#aab674]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4_1545)">
              <path
                className="group-hover:fill-white"
                d="M14.6666 3.99999C14.6666 3.26666 14.0666 2.66666 13.3333 2.66666H2.66659C1.93325 2.66666 1.33325 3.26666 1.33325 3.99999V12C1.33325 12.7333 1.93325 13.3333 2.66659 13.3333H13.3333C14.0666 13.3333 14.6666 12.7333 14.6666 12V3.99999ZM13.3333 3.99999L7.99992 7.32666L2.66659 3.99999H13.3333ZM13.3333 12H2.66659V5.33332L7.99992 8.66666L13.3333 5.33332V12Z"
                fill="#2F241F"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_1545">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SentEmail;
