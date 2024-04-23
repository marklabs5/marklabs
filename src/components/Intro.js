import { LiaTelegram } from "react-icons/lia";
import { PiGithubLogoLight } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";

import '../css/animations.css';

export default function Intro() {
  return (
    <div id="home=" className="relative py-24 overflow-hidden sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
          <div className="lg:pr-8 lg:pt-4">
            <div className="text-left text-white fadeInLeft">
              <p className="mt-2 text-3xl font-extrabold sm:text-6xl" style={{lineHeight: "1.3"}}>
                Mark,<br></br>
                a new generation of decentralized<br></br>
                network for streaming<br></br>
                media data transmission<br></br>
              </p>
              <p className="mt-8 text-lg font-medium">
                Share idle resources to obtain high returns.
              </p>
            </div>
          </div>
          <div className="flex justify-center sm:justify-end w-full mt-0 sm:mt-[-300px] ml-0 sm:ml-60 fadeInRight">
            <img
                src="./img/intro.png"
                alt="Product screenshot"
                className="w-[30rem] max-w-none rounded-xl sm:w-[50rem]"
            />
          </div>
          <div className="flex flex-row mt-0 sm:mt-[-150px] cursor-pointer gap-3 fadeInUp">
            <a href="https://twitter.com/marklabsorg" target="_blank"><div className="hover:translate-y-[-10px] transition-transform duration-700 h-10 p-2 border border-white rounded-full sm:h-12"><FaXTwitter className="w-5 h-5 text-white hover:text-[#01EBC0] sm:w-7 sm:h-7"/></div></a>
            <a href="https://github.com/marklabsorg" target="_blank"><div className="hover:translate-y-[-10px] transition-transform duration-700 h-10 p-2 border border-white rounded-full sm:h-12"><PiGithubLogoLight className="w-5 h-5 text-white hover:text-[#01EBC0] sm:w-7 sm:h-7"/></div></a>
            <a href="https://t.me/marklabs" target="_blank"><div className="hover:translate-y-[-10px] transition-transform duration-700 h-10 p-2 border border-white rounded-full sm:h-12"><LiaTelegram className="w-5 h-5 text-white hover:text-[#01EBC0] sm:w-7 sm:h-7"/></div></a>
            <a href="https://marklabs.gitbook.io/marklabs/" target="_blank"><div className="hover:translate-y-[-10px] transition-transform duration-700 h-10 p-2 border border-white rounded-full sm:h-12"><IoWalletOutline className="w-5 h-5 text-white hover:text-[#01EBC0] sm:w-7 sm:h-7"/></div></a>
          </div>
        </div>        
      </div>
    </div>
  )
}
