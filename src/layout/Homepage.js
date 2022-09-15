import "../App.css";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import BestSeller from "../components/BestSeller";
import SentEmail from "../components/SentEmail";
import Footer from "../components/Footer";

function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="bg-white">
      <Navbar token={token} />
      <div className="flex flex-col md:flex-row">
        <div className="py-8 flex flex-col md:w-3/4 md:py-12">
          <h1 className="font-bold flex items-center px-8 md:text-4xl justify-center text-3xl text-center text-[#2F241F] md:text-start md:mr-16 lg:text-7xl">
            The kind of <br className="hidden md:flex" /> furniture<br className="md:hidden" /> you have <br className="hidden md:flex" /> been <br className="md:hidden" /> looking for
          </h1>
          <div className="flex flex-col justify-center items-center mt-6 md:flex-row lg:mr-36">
            <button className="group btn bg-[#E5F0B6] hover:bg-[#aab674] px-[4.7rem] text-[#553B33] border-none md:w-48 lg:w-64 flex md:flex-row md:px-0 md:mr-4 ">
              <div className="flex flex-row justify-center items-center">
                <span className="mr-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      className="group-hover:fill-white"
                      d="M13 11H12.21L11.93 10.73C13.13 9.33002 13.75 7.42002 13.41 5.39002C12.94 2.61002 10.62 0.390015 7.82001 0.0500152C3.59001 -0.469985 0.0300153 3.09001 0.550015 7.32001C0.890015 10.12 3.11002 12.44 5.89002 12.91C7.92002 13.25 9.83002 12.63 11.23 11.43L11.5 11.71V12.5L15.75 16.75C16.16 17.16 16.83 17.16 17.24 16.75C17.65 16.34 17.65 15.67 17.24 15.26L13 11ZM7.00002 11C4.51002 11 2.50002 8.99002 2.50002 6.50002C2.50002 4.01002 4.51002 2.00002 7.00002 2.00002C9.49002 2.00002 11.5 4.01002 11.5 6.50002C11.5 8.99002 9.49002 11 7.00002 11Z"
                      fill="#553B33"
                    />
                  </svg>
                </span>
                <p className="group-hover:text-white">SEARCH CATALOG</p>
              </div>
            </button>
            <button className="group btn btn-outline border-[#553B33] mt-4 md:mt-0 px-20 md:px-0 hover:bg-[#553B33] md:w-48 lg:w-64">
              <div className="flex flex-row justify-center items-center">
                <span className="mr-2">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      className="group-hover:fill-white"
                      d="M11.3 15.9L15.97 12.4C16.24 12.2 16.24 11.8 15.97 11.6L11.3 8.1C10.97 7.85 10.5 8.09 10.5 8.5V15.5C10.5 15.91 10.97 16.15 11.3 15.9ZM12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2ZM12.5 20C8.09 20 4.5 16.41 4.5 12C4.5 7.59 8.09 4 12.5 4C16.91 4 20.5 7.59 20.5 12C20.5 16.41 16.91 20 12.5 20Z"
                      fill="#553B33"
                    />
                  </svg>
                </span>
                <p className="group-hover:text-white text-[#553B33] "> WATCH VIDEOS</p>
              </div>
            </button>
          </div>
        </div>
        <div className="">
          <div className="hero h-1/2 flex justify-start items-start md:h-full" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-content text-neutral-content">
              <div className="w-full md:w-64 md:mt-40 lg:w-96 lg:mt-64">
                <h1 className="mb-16 text-sm font-bold w-72 md:hidden text-white">HIGHLIGHTED PRODUCT</h1>
                <span className="bg-[#FFFFFF80] rounded-lg px-4 py-2 text-white">$329</span>
                <p className="mb-3 text-xl md:text-3xl mt-2 text-white">Pösht Sofa</p>
                <button className="btn group bg-[#2F241F] w-40 md:btn-sm md:h-10 hover:bg-[#211713] border-none justify-between text-white">
                  VIEW DETAILS
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4_1489)">
                      <path d="M6.66668 4L5.72668 4.94L8.78002 8L5.72668 11.06L6.66668 12L10.6667 8L6.66668 4Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_1489">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="hero-overlay bg-opacity-60"></div>
          </div>
        </div>
      </div>
      <div className="bg-[#2F241F] text-[#E5F0B6] py-8 flex flex-col justify-center items-center md:items-start lg:px-36">
        <div className="text-center md:text-start ">
          <span className="text-sm md:px-12">WHY CHOOSE US?</span>
          <h1 className="text-xl font-bold px-12 mt-8 md:text-6xl  ">
            We care about details and <br className="md:hidden" /> the quality <br className="hidden md:flex" /> of our products
          </h1>
        </div>
        <div className="mt-8 md:flex md:flex-row md:justify-center md:items-center md:px-6 lg:ml-2">
          <div className="flex flex-row items-center justify-center px-8 md:px-0">
            <div className="bg-[#E5F0B680] ml-4 mr-4 p-4 rounded-md">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.5 11H11.71L11.43 10.73C12.63 9.33001 13.25 7.42002 12.91 5.39002C12.44 2.61002 10.12 0.390015 7.32001 0.0500152C3.09001 -0.469985 -0.469985 3.09001 0.0500152 7.32001C0.390015 10.12 2.61002 12.44 5.39002 12.91C7.42002 13.25 9.33001 12.63 10.73 11.43L11 11.71V12.5L15.25 16.75C15.66 17.16 16.33 17.16 16.74 16.75C17.15 16.34 17.15 15.67 16.74 15.26L12.5 11ZM6.50002 11C4.01002 11 2.00002 8.99002 2.00002 6.50002C2.00002 4.01002 4.01002 2.00002 6.50002 2.00002C8.99002 2.00002 11 4.01002 11 6.50002C11 8.99002 8.99002 11 6.50002 11Z"
                  fill="#F4F4F4"
                />
              </svg>
            </div>
            <span className="font-bold">MANUFACTURED WITH QUALITY MATERIALS</span>
          </div>
          <div className="flex flex-row items-center justify-center px-8 mt-4 md:px-0 md:mt-0">
            <div className="bg-[#E5F0B680] ml-4 mr-4 p-[1.14rem] h-[3.17rem] rounded-md">
              <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.0554 18.2386C5.85085 18.2386 4.77699 18.017 3.83381 17.5739C2.89631 17.1307 2.15199 16.5199 1.60085 15.7415C1.04972 14.9631 0.762784 14.071 0.740057 13.0653H4.3196C4.35938 13.7415 4.64347 14.2898 5.17188 14.7102C5.70028 15.1307 6.32812 15.3409 7.0554 15.3409C7.63494 15.3409 8.14631 15.2131 8.58949 14.9574C9.03835 14.696 9.38778 14.3352 9.63778 13.875C9.89347 13.4091 10.0213 12.875 10.0213 12.2727C10.0213 11.6591 9.89063 11.1193 9.62926 10.6534C9.37358 10.1875 9.01847 9.82386 8.56392 9.5625C8.10938 9.30114 7.58949 9.16761 7.00426 9.16193C6.4929 9.16193 5.99574 9.26705 5.51278 9.47727C5.03551 9.6875 4.66335 9.97443 4.39631 10.3381L1.11506 9.75L1.94176 0.545454H12.6122V3.5625H4.98438L4.53267 7.93466H4.63494C4.94176 7.50284 5.40483 7.14489 6.02415 6.8608C6.64347 6.5767 7.33665 6.43466 8.10369 6.43466C9.15483 6.43466 10.0923 6.68182 10.9162 7.17614C11.7401 7.67045 12.3906 8.34943 12.8679 9.21307C13.3452 10.071 13.581 11.0597 13.5753 12.179C13.581 13.3551 13.3082 14.4006 12.7571 15.3153C12.2116 16.2244 11.4474 16.9403 10.4645 17.4631C9.48722 17.9801 8.35085 18.2386 7.0554 18.2386Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="font-bold">5 YEARS OF WARRANTY FOR EACH PROFUCT</span>
          </div>
          <div className="flex flex-row items-center px-8 mt-4 md:px-0 md:mt-0">
            <div className="bg-[#E5F0B680] ml-4 mr-4 p-4 rounded-md">
              <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 4V2H8V4H12ZM2 7V16C2 16.55 2.45 17 3 17H17C17.55 17 18 16.55 18 16V7C18 6.45 17.55 6 17 6H3C2.45 6 2 6.45 2 7ZM18 4C19.11 4 20 4.89 20 6V17C20 18.11 19.11 19 18 19H2C0.89 19 0 18.11 0 17L0.00999999 6C0.00999999 4.89 0.89 4 2 4H6V2C6 0.89 6.89 0 8 0H12C13.11 0 14 0.89 14 2V4H18Z"
                  fill="#F4F4F4"
                />
              </svg>
            </div>
            <span className="font-bold">20 YEARS OF EXPERTISE</span>
          </div>
        </div>
      </div>
      <div className="bg-[#FCFAFA] text-[#2F241F] flex flex-col md:flex-row justify-center items-center w-full py-8 md:items-start md:justify-start md:px-10 lg:px-48">
        <div className="md:flex md:flex-col md:justify-center md:items-start">
          <p className="font-bold md:text-5xl text-3xl text-center">25+</p>
          <h3>PARTNERED BRANDS</h3>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 mt-4 md:gap-16 md:ml-32 lg:ml-96  ">
          <svg width="49" height="19" viewBox="0 0 49 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M43.1221 2.70285C40.1218 2.70285 37.6803 5.15768 37.6803 8.17548C37.6803 11.1933 40.1218 13.6481 43.1221 13.6481C46.1217 13.6481 48.5625 11.1933 48.5625 8.17548C48.5625 5.15768 46.1217 2.70285 43.1221 2.70285ZM43.1221 11.0545C41.5442 11.0545 40.259 9.76154 40.259 8.17548C40.259 6.58872 41.5442 5.29648 43.1221 5.29648C44.6986 5.29648 45.9845 6.58872 45.9845 8.17548C45.9845 9.76224 44.6993 11.0545 43.1214 11.0545H43.1221ZM27.0979 7.06715L26.1463 6.58943C25.7332 6.38368 25.4742 6.22444 25.37 6.10678C25.2707 6.00251 25.2142 5.86469 25.2117 5.72065C25.2117 5.53605 25.2947 5.38033 25.458 5.25914C25.6199 5.13231 25.85 5.07454 26.1421 5.07454C26.6763 5.07454 27.2682 5.39724 27.9199 6.04759L29.526 4.43194C29.1314 3.89393 28.6153 3.45694 28.0199 3.15661C27.4322 2.86063 26.783 2.70803 26.1252 2.7113C25.1448 2.7113 24.3354 3.00089 23.7048 3.5843C23.0749 4.16771 22.7582 4.86879 22.7582 5.69106C22.7582 6.96639 23.5922 8.02893 25.2659 8.87233L26.1421 9.31271C26.8973 9.69531 27.2731 10.085 27.2731 10.488C27.2731 10.7064 27.1683 10.8952 26.9599 11.0629C26.7516 11.2313 26.4757 11.311 26.1337 11.311C25.817 11.311 25.4538 11.2017 25.0449 10.9798C24.6374 10.7614 24.2749 10.4678 23.9765 10.1145L22.3789 11.8648C23.2797 13.0485 24.4811 13.6446 25.9915 13.6446C27.1267 13.6446 28.0325 13.3339 28.704 12.7166C29.3796 12.1001 29.7174 11.3279 29.7174 10.4041C29.7174 9.71151 29.5302 9.10344 29.1586 8.58697C28.7835 8.0705 28.0952 7.56741 27.0979 7.06785V7.06715ZM10.9413 12.4559V2.92057H8.35838V3.55894C7.48805 2.9989 6.47501 2.70169 5.44041 2.70285C2.44079 2.70285 0 5.15768 0 8.17548C0 11.1933 2.44079 13.6481 5.44111 13.6481C6.4633 13.6497 7.46485 13.3601 8.32882 12.8132C8.32882 12.897 8.3246 12.9724 8.3246 13.0231C8.3246 14.6092 7.03945 15.9021 5.46223 15.9021C4.92594 15.9009 4.40091 15.748 3.94764 15.4611L2.67023 17.7108C3.51256 18.2252 4.47979 18.4982 5.46645 18.5C8.46677 18.5 10.9413 16.0445 10.9413 13.0267C10.9413 12.9097 10.9491 12.5651 10.9413 12.4559ZM5.44111 11.0538C3.86459 11.0538 2.57874 9.76154 2.57874 8.17548C2.57874 6.58872 3.86389 5.29648 5.44111 5.29648C7.01834 5.29648 8.30349 6.58872 8.30349 8.17548C8.30349 9.76154 7.01834 11.0545 5.44111 11.0545V11.0538ZM21.2303 2.91705H18.6346V8.11982C18.6389 8.85895 18.6389 10.135 18.0969 10.6803C17.8379 10.9403 17.5543 11.1757 16.9575 11.1757C16.3564 11.1757 16.0728 10.9403 15.8145 10.6803C15.2719 10.1343 15.2761 8.85472 15.2796 8.11982V2.91705H12.6847V8.10432C12.6762 9.1739 12.6636 11.1595 13.9656 12.4771C14.7292 13.2493 15.6392 13.6439 16.9532 13.6439C18.2679 13.6439 19.1773 13.2535 19.9409 12.4771C21.2429 11.1595 21.2303 9.16967 21.2218 8.10432L21.2303 2.91634V2.91705ZM35.9391 10.5887C35.7307 10.748 35.2254 11.101 34.6539 11.0214C34.1866 10.958 33.8072 10.6141 33.7488 9.4642V5.14993H36.7991V2.90859H33.7488V0H31.1616V0.570727H31.1574V9.12458C31.1574 10.4845 31.4995 13.6439 34.6497 13.6439C36.2438 13.6192 37.2116 12.7505 37.6169 12.4108L37.6711 12.3686L36.1185 10.4464C36.1143 10.4499 36.0059 10.538 35.9391 10.5887Z"
              fill="#F45D48"
            />
          </svg>
          <svg width="41" height="17" viewBox="0 0 41 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M40.4863 8.90844C40.4863 6.08869 39.1204 3.86372 36.51 3.86372C33.8885 3.86372 32.3024 6.08869 32.3024 8.88641C32.3024 12.2018 34.1748 13.8761 36.8624 13.8761C38.1732 13.8761 39.1645 13.5787 39.9135 13.1601V10.9572C39.1645 11.3317 38.3054 11.563 37.2149 11.563C36.1465 11.563 35.1992 11.1885 35.0781 9.88875H40.4642C40.4642 9.74556 40.4863 9.1728 40.4863 8.90844ZM35.045 7.86205C35.045 6.61739 35.805 6.0997 36.4989 6.0997C37.1708 6.0997 37.8868 6.61739 37.8868 7.86205H35.045Z"
              fill="#635BFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.0506 3.86372C26.9712 3.86372 26.2772 4.37039 25.8917 4.72286L25.7485 4.03995H23.3253V16.8831L26.079 16.2993L26.09 13.1821C26.4865 13.4685 27.0703 13.8761 28.0396 13.8761C30.0112 13.8761 31.8066 12.2899 31.8066 8.79829C31.7956 5.60403 29.9782 3.86372 28.0506 3.86372ZM27.3897 11.4528C26.7399 11.4528 26.3543 11.2215 26.09 10.9351L26.079 6.84869C26.3654 6.52927 26.7619 6.30897 27.3897 6.30897C28.3921 6.30897 29.086 7.43247 29.086 8.87539C29.086 10.3514 28.4031 11.4528 27.3897 11.4528Z"
              fill="#635BFF"
            />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5362 3.21383L22.3009 2.61904V0.383057L19.5362 0.966834V3.21383Z" fill="#635BFF" />
            <path d="M22.3009 4.05095H19.5362V13.6888H22.3009V4.05095Z" fill="#635BFF" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5731 4.86603L16.3969 4.05095H14.0177V13.6888H16.7714V7.15708C17.4213 6.30895 18.5227 6.46316 18.8642 6.58432V4.05095C18.5117 3.91877 17.223 3.67645 16.5731 4.86603Z"
              fill="#635BFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.0659 1.66075L8.37831 2.23351L8.3673 11.0563C8.3673 12.6864 9.58993 13.887 11.2201 13.887C12.1233 13.887 12.7842 13.7218 13.1477 13.5235V11.2876C12.7952 11.4308 11.0549 11.9374 11.0549 10.3073V6.39706H13.1477V4.05093H11.0549L11.0659 1.66075Z"
              fill="#635BFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.62009 6.8487C3.62009 6.41913 3.97256 6.25391 4.55633 6.25391C5.39345 6.25391 6.45086 6.50724 7.28797 6.95885V4.3704C6.37375 4.00691 5.47055 3.86372 4.55633 3.86372C2.32036 3.86372 0.833374 5.03128 0.833374 6.98088C0.833374 10.0209 5.01895 9.53628 5.01895 10.847C5.01895 11.3537 4.57836 11.5189 3.96154 11.5189C3.04732 11.5189 1.87977 11.1444 0.954535 10.6377V13.2592C1.9789 13.6998 3.01428 13.8871 3.96154 13.8871C6.25259 13.8871 7.82769 12.7526 7.82769 10.7809C7.81668 7.49856 3.62009 8.08234 3.62009 6.8487Z"
              fill="#635BFF"
            />
          </svg>
          <svg width="84" height="24" viewBox="0 0 84 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4_1516)">
              <path
                d="M26.0791 15.0281C25.8416 15.0875 25.5448 15.1469 25.2479 15.1469C24.6541 15.1469 24.4166 14.7906 24.4166 14.1969V11.525H26.0791C26.4948 11.525 26.9104 11.2281 26.9104 10.7531C26.9104 10.2781 26.5541 9.98127 26.0791 9.98127H24.4166V9.09065C24.4166 8.55627 24.001 8.20002 23.526 8.20002C23.051 8.20002 22.6354 8.61565 22.6354 9.09065V14.2563C22.6354 15.7406 23.3479 16.8094 25.0104 16.8094C25.4854 16.8094 26.1385 16.75 26.6135 16.5125C27.0291 16.3344 27.1479 16.0375 27.1479 15.7406C27.1479 15.325 26.7323 14.9094 26.0791 15.0281ZM32.0166 9.74377C31.7791 9.6844 31.3041 9.62502 30.8885 9.62502C29.4041 9.62502 28.5729 10.5156 28.5729 11.8813V15.9188C28.5729 16.3938 28.9885 16.8094 29.4635 16.8094C29.9385 16.8094 30.3541 16.3938 30.3541 15.9188V12.2375C30.3541 11.6438 30.5916 11.4063 31.0072 11.4063C31.4229 11.4063 31.6604 11.525 32.0166 11.525C32.551 11.525 32.8479 11.05 32.8479 10.6938C32.7885 10.2188 32.551 9.9219 32.0166 9.74377ZM36.9447 9.62502C35.2823 9.62502 34.0948 10.6938 33.9166 12.4156C33.9166 12.8313 33.8573 13.5438 33.9166 14.0781C34.0354 15.7406 35.2229 16.8688 37.0041 16.8688C37.8354 16.8688 38.6072 16.6906 39.0822 16.3938C39.4385 16.1563 39.4979 15.9188 39.4979 15.6813C39.4979 15.2063 39.0823 14.7313 38.3698 14.9688C37.9541 15.1469 37.4791 15.2656 37.0041 15.2656C36.1729 15.2656 35.5198 14.85 35.5198 14.0188V13.8406H38.9041C39.4979 13.8406 39.7948 13.4844 39.7948 12.95V12.6531C39.8541 10.8125 38.6666 9.62502 36.9447 9.62502ZM38.0729 12.6531H35.5791C35.5791 11.7625 35.9948 11.1688 36.9447 11.1688C37.776 11.1688 38.251 11.7031 38.1916 12.475C38.1916 12.5938 38.1916 12.6531 38.0729 12.6531ZM44.0697 9.62502C42.4072 9.62502 41.2198 10.6938 41.0416 12.4156C41.0416 12.8313 40.9823 13.5438 41.0416 14.0781C41.1604 15.7406 42.3479 16.8688 44.1291 16.8688C44.9604 16.8688 45.7322 16.6906 46.2072 16.3938C46.5635 16.1563 46.6229 15.9188 46.6229 15.6813C46.6229 15.2063 46.2073 14.7313 45.4948 14.9688C45.0791 15.1469 44.6041 15.2656 44.1291 15.2656C43.2979 15.2656 42.6447 14.85 42.6447 14.0188V13.8406H46.0291C46.6229 13.8406 46.9198 13.4844 46.9198 12.95V12.6531C46.9791 10.8125 45.7916 9.62502 44.0697 9.62502ZM45.1979 12.6531H42.7041C42.7041 11.7625 43.1198 11.1688 44.0697 11.1688C44.901 11.1688 45.376 11.7031 45.3166 12.475C45.3166 12.5938 45.3166 12.6531 45.1979 12.6531ZM74.0541 12.5938L73.1041 12.3563C72.5104 12.2375 72.3322 12.0594 72.3322 11.7625C72.3322 11.4656 72.6291 11.2281 73.2823 11.2281C73.6385 11.2281 74.0541 11.3469 74.4104 11.525C74.826 11.7625 75.301 11.7031 75.5385 11.4063C75.8354 11.1094 75.8354 10.575 75.4791 10.2188C75.0041 9.86252 74.1729 9.62502 73.3416 9.62502C71.7979 9.62502 70.6698 10.3969 70.6698 11.8219C70.6698 12.95 71.501 13.5438 72.5698 13.8406C73.1041 13.9594 73.0448 13.9594 73.5197 14.0781C74.0541 14.1969 74.2916 14.4344 74.2916 14.6719C74.2916 15.0281 73.9948 15.2656 73.2823 15.2656C72.6885 15.2656 72.1541 15.0875 71.7385 14.85C71.3229 14.5531 70.8479 14.6719 70.6104 15.0281C70.3729 15.3844 70.4323 15.8594 70.7885 16.0969C71.2635 16.5125 72.0354 16.8688 73.2823 16.8688C74.826 16.8688 76.0135 16.0375 76.0135 14.6125C76.0135 13.5438 75.3604 12.8906 74.0541 12.5938ZM82.3073 13.8406C82.901 13.8406 83.1979 13.4844 83.1979 12.95V12.6531C83.1979 10.8125 82.0104 9.62502 80.2885 9.62502C78.626 9.62502 77.4385 10.6938 77.2604 12.4156C77.2604 12.8313 77.201 13.5438 77.2604 14.0781C77.3791 15.7406 78.5666 16.8688 80.3479 16.8688C81.1791 16.8688 81.951 16.6906 82.426 16.3938C82.7822 16.1563 82.8416 15.9188 82.8416 15.6813C82.8416 15.2063 82.426 14.7313 81.7135 14.9688C81.2979 15.1469 80.8229 15.2656 80.3479 15.2656C79.5166 15.2656 78.8635 14.85 78.8635 14.0188V13.8406H82.3073ZM80.2885 11.1688C81.1198 11.1688 81.5947 11.7031 81.5354 12.475C81.5354 12.5938 81.476 12.6531 81.4166 12.6531H78.9229C78.9229 11.7625 79.3979 11.1688 80.2885 11.1688ZM58.5573 9.62502C56.776 9.62502 55.4697 10.7531 55.2916 12.2969C55.2323 12.8313 55.2323 13.6625 55.2916 14.1969C55.4104 15.7407 56.776 16.8688 58.5573 16.8688C60.3385 16.8688 61.6448 15.7407 61.7635 14.1969C61.8229 13.6625 61.8229 12.8906 61.7635 12.3563C61.6448 10.7531 60.3385 9.62502 58.5573 9.62502ZM59.9823 13.9C59.9229 14.6719 59.3885 15.1469 58.5573 15.1469C57.726 15.1469 57.1916 14.6125 57.1323 13.9C57.1323 13.5438 57.1323 12.95 57.1323 12.5938C57.1916 11.8219 57.726 11.3469 58.5573 11.3469C59.3885 11.3469 59.9229 11.8813 59.9823 12.5938C60.0416 12.95 60.0416 13.5438 59.9823 13.9ZM51.4916 9.62502C50.8385 9.62502 50.126 9.86252 49.8885 10.1594V8.2594C49.8885 7.72502 49.5323 7.36877 49.0573 7.36877C48.5823 7.36877 48.226 7.7844 48.226 8.2594V15.9188C48.226 16.3938 48.6416 16.8094 49.1166 16.8094C49.5916 16.8094 49.9479 16.3938 49.9479 15.9188V11.9406C50.2448 11.6438 50.7198 11.4063 51.3135 11.4063C52.026 11.4063 52.4416 11.8219 52.4416 12.6531V15.9188C52.4416 16.4531 52.7979 16.8688 53.2729 16.8688C53.8073 16.8688 54.1635 16.4531 54.1635 15.9188V12.5344C54.1041 10.6344 53.1541 9.62502 51.4916 9.62502ZM68.1166 9.6844C67.6416 9.6844 67.226 10.1 67.226 10.575V14.7906C66.9291 14.9688 66.5135 15.1469 65.9791 15.1469C65.2666 15.1469 64.7323 14.7313 64.7323 13.9V10.575C64.7323 10.0406 64.3166 9.62502 63.8416 9.62502C63.3073 9.62502 63.0104 10.0406 63.0104 10.575V13.9594C63.0104 15.8 64.0791 16.8094 65.9198 16.8094C67.2854 16.8094 68.2354 16.3344 68.651 16.0375C68.8885 15.9188 68.9479 15.7406 68.9479 15.4438V10.575C68.9479 10.1 68.5916 9.6844 68.1166 9.6844Z"
                fill="#3E474F"
              />
              <path
                d="M16.1041 6.00317C15.451 5.64692 14.4416 6.24067 13.8479 7.30942L12.7198 9.20942C12.3041 9.9813 12.3635 10.9313 12.8979 11.7032L12.9573 11.7626C13.4916 12.475 14.1448 13.1875 14.3823 13.425C14.501 13.5438 14.6198 13.7219 14.6791 13.9594C14.8573 14.6125 14.501 15.3251 13.7885 15.5032C13.1354 15.6813 12.4229 15.3251 12.2448 14.6125C12.1854 14.4344 12.1854 14.2563 12.1854 14.1376C12.2448 13.8407 12.126 13.4251 11.7104 12.9501C11.2948 12.5344 10.5229 13.3657 10.226 14.1969V14.2563C9.9885 15.0876 9.81038 15.8594 9.86975 15.9188C9.86975 15.9782 9.92913 15.9782 9.92913 16.0375C10.2854 16.75 10.0479 17.5813 9.33538 17.9376C8.62288 18.2938 7.79163 18.0563 7.43538 17.3438C7.07913 16.6313 7.31663 15.8 8.02913 15.4438C8.0885 15.4438 8.0885 15.3844 8.14788 15.3844C8.20725 15.3844 8.326 15.0282 8.50413 14.5532C8.62288 14.1375 8.68225 13.9594 8.74163 13.7813C8.801 13.5438 8.91975 12.9501 8.86038 12.7126C8.801 12.4157 8.50413 12.4157 8.20725 12.5938C8.02913 12.7126 7.67288 13.0094 7.55413 13.1282C7.25725 13.3657 7.01975 13.7219 6.901 14.0188C6.84163 14.1376 6.72288 14.3157 6.60413 14.4344C6.06975 14.8501 5.29788 14.7907 4.82288 14.2563C4.40725 13.7219 4.46663 12.95 5.001 12.475C5.17913 12.3563 5.35725 12.2375 5.53538 12.2375C5.83225 12.1782 6.901 11.5251 7.55413 11.05C7.67288 10.9907 7.851 10.8125 7.91038 10.7532C8.0885 10.5157 7.91038 10.3375 7.73225 10.3375C7.19788 10.3969 6.60413 10.4563 6.48538 10.6344C6.426 10.6938 6.36663 10.8126 6.24788 10.8719C5.77288 11.2282 5.06038 11.1094 4.70413 10.6344C4.34788 10.1594 4.46663 9.44693 4.94163 9.09067C5.11975 8.91255 5.41663 8.85317 5.59475 8.85317C6.01038 8.85317 7.07913 9.09067 7.91038 8.91255L8.14788 8.85317C9.0385 8.67505 10.1073 7.90317 10.5229 7.1313C10.5229 7.1313 10.9385 6.4188 11.4135 5.52817C11.9479 4.63755 11.8885 3.62817 11.3541 3.3313L10.3448 2.73755C9.81038 2.44067 9.0385 2.44067 8.50413 2.73755L1.61663 6.6563C1.08225 6.95317 0.666626 7.66567 0.666626 8.25942V15.8594C0.666626 16.4532 1.08225 17.1657 1.61663 17.4626L8.50413 21.3813C9.0385 21.6782 9.86975 21.6782 10.3448 21.3813L17.2323 17.4626C17.7666 17.1657 18.1823 16.4532 18.1823 15.8594V8.25942C18.1823 7.66567 17.7666 6.95317 17.2323 6.6563C17.2323 6.6563 16.7573 6.35942 16.1041 6.00317Z"
                fill="#5FCF80"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_1516">
                <rect width="82.5" height="24" fill="white" transform="translate(0.666626)" />
              </clipPath>
            </defs>
          </svg>
          <svg width="57" height="24" viewBox="0 0 57 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4_1517)">
              <path
                d="M15.6452 15.5419C14.0535 15.5419 12.9998 14.3361 12.7058 13.8691C13.083 10.9145 14.1867 9.9803 15.6452 9.9803C17.0872 9.9803 18.2075 11.11 18.2075 12.7611C18.2075 14.4122 17.0872 15.5419 15.6452 15.5419ZM15.6452 8.16626C13.0497 8.16626 11.5967 9.82279 11.1807 11.5282C10.7093 10.6592 10.3599 9.49692 10.0882 8.4161H6.49989V12.7883C6.49989 14.3742 5.76228 15.5473 4.32032 15.5473C2.87836 15.5473 2.05202 14.3742 2.05202 12.7883L2.06865 8.4161H0V12.7883C0 14.0646 0.421495 15.2215 1.19239 16.047C1.98546 16.8997 3.06693 17.3451 4.32032 17.3451C6.81601 17.3451 8.55748 15.4713 8.55748 12.7883V9.84995C8.81809 10.8167 9.43929 12.6742 10.6261 14.3036L9.51693 20.4898H11.6189L12.3509 16.1067C12.5894 16.3023 12.8445 16.4761 13.1162 16.6336C13.8206 17.0681 14.6247 17.3125 15.4567 17.3396C15.4567 17.3396 15.5842 17.3451 15.6508 17.3451C18.2241 17.3451 20.2705 15.3953 20.2705 12.7611C20.2705 10.1269 18.2186 8.16626 15.6452 8.16626Z"
                fill="#14A800"
              />
              <path d="M45.3662 9.35072V8.41655H43.3364V17.0685H45.394V13.6794C45.394 11.5938 45.5881 10.0948 48.4442 10.2903V8.31335C47.1132 8.21559 46.0761 8.48715 45.3662 9.35072Z" fill="#14A800" />
              <path d="M31.0804 8.41675L29.5885 14.4672L27.9968 8.41675H25.3791L23.7818 14.4672L22.2955 8.41675H20.2102L22.4952 17.0742H24.9687L26.6879 10.926L28.3905 17.0742H30.8641L33.2821 8.41675H31.0804Z" fill="#14A800" />
              <path
                d="M37.8131 15.5473C36.349 15.5473 35.2509 14.4177 35.2509 12.7611C35.2509 11.1046 36.3546 9.9803 37.8131 9.9803C39.2551 9.9803 40.3754 11.11 40.3754 12.7611C40.3754 14.4122 39.2551 15.5473 37.8131 15.5473ZM37.8131 8.16626C35.2232 8.16626 33.1934 10.1324 33.1934 12.7611C33.1934 15.3898 35.2232 17.3396 37.8131 17.3396C40.3865 17.3396 42.433 15.3898 42.433 12.7611C42.433 10.1324 40.3921 8.16626 37.8131 8.16626Z"
                fill="#14A800"
              />
              <path
                d="M51.3951 12.8156H51.8721L54.7449 17.0737H57.0687L53.7633 12.3539C55.3661 11.7402 56.442 10.138 56.442 8.41626H54.39C54.39 10.2846 52.887 10.9907 51.3951 10.9907V5H49.332V17.0737H51.3896L51.3951 12.8156Z"
                fill="#14A800"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_1517">
                <rect width="57" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <BestSeller />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#FCFAFA] py-8 md:items-start md:px-12 lg:px-40 text-black">
        <p className="">LIMITED DEALS</p>
        <h2 className="text-center font-bold text-lg md:text-4xl md:text-start mt-6 lg:text-6xl">
          Become a member and get 10% off <br className="md:hidden" /> of <br className="hidden md:flex" />
          your first purchase
        </h2>
        <SentEmail />
      </div>
      <Footer />
    </div>
  );
}

export default App;