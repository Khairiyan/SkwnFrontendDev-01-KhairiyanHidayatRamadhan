import "../App.css";

function Footer() {
  return (
    <div className="bg-white lg:px-20 lg:py-8 text-black">
      <footer className="footer p-10 text-center lg:p-0">
        <div className="flex flex-col items-center  md:items-start md:justify-start">
          <div className="flex flex-row justify-center items-center mb-4">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.87851 12.2765C4.87851 7.70766 4.87851 5.42322 5.97501 3.78219C6.44969 3.07177 7.05966 2.46181 7.77008 1.98712C9.4111 0.890625 11.6955 0.890625 16.2644 0.890625C20.8333 0.890625 23.1178 0.890625 24.7588 1.98712C25.4692 2.46181 26.0792 3.07177 26.5539 3.78219C27.6504 5.42322 27.6504 7.70766 27.6504 12.2765C27.6504 16.8454 27.6504 19.1299 26.5539 20.7709C26.0792 21.4813 25.4692 22.0913 24.7588 22.566C23.1178 23.6625 20.8333 23.6625 16.2644 23.6625C11.6955 23.6625 9.4111 23.6625 7.77008 22.566C7.05966 22.0913 6.44969 21.4813 5.97501 20.7709C4.87851 19.1299 4.87851 16.8454 4.87851 12.2765Z"
                fill="#303030"
              />
              <path
                d="M0.541016 13.9031C0.541016 9.81368 0.541016 7.76896 1.81144 6.49854C3.08186 5.22812 5.12657 5.22812 9.216 5.22812H14.6379C18.7273 5.22812 20.772 5.22812 22.0424 6.49854C23.3129 7.76896 23.3129 9.81368 23.3129 13.9031V19.325C23.3129 23.4144 23.3129 25.4591 22.0424 26.7295C20.772 28 18.7273 28 14.6379 28H9.216C5.12657 28 3.08186 28 1.81144 26.7295C0.541016 25.4591 0.541016 23.4144 0.541016 19.325V13.9031Z"
                fill="#303030"
              />
            </svg>

            <span className="font-bold text-xl ml-2">Dekoor</span>
          </div>
          <p className="md:text-start md:w-96 lg:w-[35rem]">
            Dekoor is a furniture company created to fulfill the needs of family with aesthetic feeling in their furniture. Always pay attention to details and give clear communication for the customers. Priority of our design is
            comfortability.
          </p>
          <p className="lg:mt-12 md:mt-8 hidden md:flex">©Copyright 2022 Dekoor</p>
        </div>
        <div className="flex flex-row gap-8 md:hidden">
          <div className="flex flex-col justify-center items-center w-32">
            <span className="font-bold mb-4">Support</span>
            <a className="link link-hover mb-4">FAQ</a>
            <a className="link link-hover mb-4">{`Shipping & Returns`}</a>
            <a className="link link-hover mb-4">Care guide</a>
            <a className="link link-hover">Redeem warranty</a>
          </div>
          <div className="flex flex-col justify-center items-center w-32">
            <span className="font-bold mb-4">Social Media</span>
            <a className="link link-hover mb-4">Instagram</a>
            <a className="link link-hover mb-4">Facebook</a>
            <a className="link link-hover mb-4">Twitter</a>
            <a className="link link-hover">TikTok</a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center px-24 md:hidden">
          <span className="font-bold mb-4">About Us</span>
          <a className="link link-hover mb-4">Our story</a>
          <a className="link link-hover mb-4">Designer</a>
          <a className="link link-hover mb-4">Craftmanship</a>
          <a className="link link-hover">Sustainability</a>
        </div>

        <div className="md:flex md:flex-row lg:gap-8 lg:ml-96 md:gap-2 hidden">
          <div className="flex flex-col justify-center items-start">
            <span className="font-bold mb-6">Support</span>
            <a className="link link-hover mb-6">FAQ</a>
            <a className="link link-hover mb-6">{`Shipping & Returns`}</a>
            <a className="link link-hover mb-6">Care guide</a>
            <a className="link link-hover">Redeem warranty</a>
          </div>
          <div className="flex flex-col justify-center items-start">
            <span className="font-bold mb-6">Social Media</span>
            <a className="link link-hover mb-6">Instagram</a>
            <a className="link link-hover mb-6">Facebook</a>
            <a className="link link-hover mb-6">Twitter</a>
            <a className="link link-hover">TikTok</a>
          </div>
          <div className="flex flex-col justify-center items-start">
            <span className="font-bold mb-6">About Us</span>
            <a className="link link-hover mb-6">Our story</a>
            <a className="link link-hover mb-6">Designer</a>
            <a className="link link-hover mb-6">Craftmanship</a>
            <a className="link link-hover">Sustainability</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
