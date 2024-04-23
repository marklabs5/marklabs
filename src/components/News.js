import { FaArrowRight } from "react-icons/fa";
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from "react";

const advantage_data = [
    {blogImg: "https://s3.cointelegraph.com/uploads/2023-11/d9a1a855-e789-48a0-abc4-8c69cb033c4c.png", blogContent: "Spot Bitcoin ETF: Counting down the weeks", imgSrc: "./img/blog1.jpg", title: "Bitcoin ETF will drive 165% BTC price gain in 2024 — Standard Chartered", content: "Bitcoin supply shock tactics give way to ETF hype in Standard Chartered’s new $100,000 BTC price..."}, 
    {blogImg: "https://lpsignal.com/wp-content/uploads/2023/12/image-scaled.jpeg", blogContent: "Analysis: $43,000 BTC price is “most conservative level”s", imgSrc: "./img/blog2.jpg", title: "Bitcoin metric that ‘looks into future’ eyes $48K BTC price around ETF", content: "Bitcoin ETF approvals may have key timing as the Ichimoku Cloud demands the BTC price keep..."}, 
    {blogImg: "https://lpsignal.com/wp-content/uploads/2023/12/image.png", blogContent: "PlanB: Time is ticking on $40,000 resistance", imgSrc: "./img/blog3.jpg", title: "‘Enjoy sub-$40K Bitcoin’ — PlanB stresses $100K average BTC price from 2024", content: "Bitcoin is in its “pre-bull market” phase, and the days of BTC price trading at current..."}, 
];

export default function News() {
    const [showModal, setShowModal] = useState(0);
    const [blogTitle, setBlogTitle] = useState("");
    const [blogImg, setBlogImg] = useState("");
    const [blogContent, setBlogContent] = useState("");

    return (
      <div id="functions" className="relative pb-24 overflow-hidden sm:pb-32">
        {/* Modal */}
        {showModal == 1 ? (<div className='fixed fadeIn left-0 top-0 w-full h-full bg-transparent z-[1] backdrop-filter backdrop-blur-md'>
          <div className='relative flex flex-col items-center justify-center w-full h-full text-gray-900'>
              <div className='relative flex flex-col items-center justify-center w-4/5 px-3 bg-white rounded-md md:w-1/2 h-1/2'>
                <XMarkIcon onClick={() => setShowModal(0)} className='absolute w-5 h-5 text-gray-900 cursor-pointer top-3 right-3'/>
                <div className="absolute text-gray-700 top-12 lg:top-5 left-5">{blogTitle}</div>
                <img src={blogImg} className="mt-32 sm:mt-10 w-full max-w-none shadow-lg rounded-md lg:w-[35rem]"></img>
                <div className="mt-20 text-xl sm:mt-5 sm:text-2xl">{blogContent}</div>
              </div>
          </div>
        </div>) : null}

        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
            <div className="lg:pr-8 lg:pt-4">
              <div className="flex flex-col items-center gap-4 text-left text-white">
                    <h2 className="text-base font-semibold leading-7 text-[#01EBC0]">Blog</h2>
                    <p className="text-3xl font-bold tracking-tight sm:text-4xl">Our Latest News</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="grid w-full grid-cols-1 gap-5 text-white md:grid-cols-3">
                {
                    advantage_data.map((item) => (
                        <div className="relative rounded-xl flex flex-col gap-5 p-10 font-medium text-left bg-[#01EBC0] bg-opacity-10">
                            <img src={item.imgSrc} className="w-full h-40 rounded-md shadow-md"></img>
                            <p className="text-2xl h-[120px] hover:text-[#01EBC0] cursor-pointer" onClick={() => {setShowModal(1); 
                              setBlogImg(item.blogImg); 
                              setBlogTitle(item.content);
                              setBlogContent(item.blogContent);}} >
                              {item.title}
                            </p>
                            <div className="text-md">{item.content}</div>
                            <div onClick={() => {setShowModal(1); 
                              setBlogImg(item.blogImg); 
                              setBlogTitle(item.content);
                              setBlogContent(item.blogContent);}} 
                              className="hover:translate-y-[-10px] transition-transform duration-700 ease-in-out cursor-pointer absolute bottom-2 p-3 rounded-full right-2 border border-[#01EBC0]"><FaArrowRight className="w-5 h-5 text-white"/>
                            </div>
                        </div>
                    ))
                }
              </div>
            </div>
          </div>        
        </div>
      </div>
    )
}
