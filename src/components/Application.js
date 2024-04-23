import { IoRocketOutline, IoCloudDownloadOutline  } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { CiVideoOff } from "react-icons/ci";

export default function Application() {
  return (
    <div id="application" className="pt-12 pb-24 overflow-hidden sm:pb-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="text-left text-white lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                    <h2 className="text-base font-semibold leading-7 text-[#01EBC0]">Which Services Includes?</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Application Scenarios</p>
                    <p className="mt-6 text-lg leading-8">
                    Multiple application scenarios, all-round coverage. Cache hotspots are automatically migrated, with millisecond-level response; support for downloading and distribution of various files, and online on-demand acceleration services, etc.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className='flex flex-row items-center justify-center gap-5 text-xl text-white bg-[#01EBC0] bg-opacity-10 p-5 border-l-2 border-l-white'>
                    <IoRocketOutline className="text-[#01EBC0] w-10 h-10"/>Website Acceleration
                </div>
                <div className='flex flex-row items-center justify-center gap-5 text-xl text-white bg-[#01EBC0] bg-opacity-10 p-5 border-l-2 border-l-white'>
                    <CiVideoOff className="text-[#01EBC0] w-10 h-10"/>Videos on Demand
                </div>
                <div className='flex flex-row items-center justify-center gap-5 text-xl text-white bg-[#01EBC0] bg-opacity-10 p-5 border-l-2 border-l-white'>
                    <MdOutlineOndemandVideo className="text-[#01EBC0] w-10 h-10"/>Video Live Streaming
                </div>
                <div className='flex flex-row items-center justify-center gap-5 text-xl text-white bg-[#01EBC0] bg-opacity-10 p-5 border-l-2 border-l-white'>
                    <IoCloudDownloadOutline className="text-[#01EBC0] w-10 h-10"/>Download Acceleration
                </div>
                <div className='flex flex-row items-center justify-center gap-5 text-xl text-white bg-[#01EBC0] bg-opacity-10 p-5 border-l-2 border-l-white'>
                    <CiMobile3 className="text-[#01EBC0] w-10 h-10"/>Mobile Acceleration
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
