import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-8">
      <div className="container flex sm:justify-between justify-center items-center gap-5 max-sm:flex-col">
        {/* Logo on the left side */}
        <div className="flex items-center space-x-2">
          <img src="/icons/logo.svg" alt="MeetHub Logo" className="h-8 sm:h-10" />
          <span className="text-white text-lg sm:text-xl font-semibold">MeetHub</span>
        </div>

        {/* Copyright text centered */}
        <div className="text-center text-gray-400 text-xs sm:text-sm flex-1">
          © {currentYear} MeetHub. All rights reserved.
        </div>
            
        {/* Social media icons on the right side */}
        <div className="flex items-center space-x-4">
          <a href="https://x.com/RahulBandekar38" className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-700 transition-colors duration-300">
            <svg
              viewBox="0 0 512 512"
              height="1.7em"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce"
              fill="white"
            >
              <path
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
              ></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/rahul-bandekar-740801248/" className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-700 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="bi bi-linkedin animate-bounce"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
            </svg>
          </a>
          <a href="mailto:rahulbandekar12@gmail.com" className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-700 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"
              fill="white" className="animate-bounce">
              <path
                d="M11.9362 56.1235H20.4189V35.5227L8.30078 26.434V52.4881C8.30078 54.4997 9.93067 56.1235 11.9362 56.1235Z"
                fill="#ffff" />
              <path
                d="M49.5025 56.1235H57.9853C59.9969 56.1235 61.6207 54.4936 61.6207 52.4881V26.434L49.5025 35.5227"
                fill="#ffff" />
              <path
                d="M49.5025 19.7693V35.5227L61.6207 26.434V21.587C61.6207 17.0912 56.4887 14.5282 52.8956 17.2245"
                fill="#ffff" />
              <path d="M20.4189 35.5227V19.769L34.9607 30.6754L49.5025 19.7693V35.5227L34.9607 46.429"
                fill="#ffff" />
              <path
                d="M8.30078 21.587V26.434L20.4189 35.5227V19.769L17.0259 17.2245C13.4268 14.5282 8.30078 17.0912 8.30078 21.587Z"
                fill="#ffff" />
            </svg>
          </a>
          <a href="https://github.com/rahulbandekar" className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-700 transition-colors duration-300">
            <svg fill="white" viewBox="0 0 496 512" height="1.6em" className="animate-bounce">
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5 21.3 0 42.8 3 62.8 8.5 0 0 48.2-33.8 69-27 13.7 34.6 5.2 61.4 2.6 67.9 16.1 17.6 23.6 31.4 23.6 58.9 0 96.5-58.6 104.3-114.5 110.5 9.1 8 17.6 22.9 17.6 46.3 0 33.7-.3 75.8-.3 84.7 0 6.5 4.3 14.4 17.6 12.1C426.2 457.8 496 362.9 496 252 496 113.3 385.5 8 244.8 8z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
