export default function Network() {
  return (
    <div id="about" className="relative pb-24 overflow-hidden sm:pb-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
          <div className="lg:pr-8 lg:pt-4">
            <div className="text-left text-white">
              <p className="mt-2 text-3xl font-extrabold sm:text-4xl">
                Mark Network
              </p>
              <p className="mt-8 text-base font-medium">
                Mark is a blockchain-based film&TV application project developed by Marklabs. As a new generation of decentralized network for streaming media data transmission, Mark innovated incentive mode for token to facilitate the sharing of idle computing and bandwidth resources across the world, responding to the challenge of rapid development in video streaming.
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <video
                className="themepark_imgtext_vidio"
                poster="./img/video.png"
                src="https://marklabs.org/img/main-slide-video2.mp4"
                controls
                loop
                muted
                data-xblocker="passed"
                style={{ visibility: "visible" }}
              >
                <source src="https://marklabs.org/img/main-slide-video2.mp4" type="video/mp4" />
              </video>
            {/* <img
                src="./img/video.png"
                alt="Product screenshot"
                className="w-full max-w-none rounded-xl"
            /> */}
          </div>
        </div>        
      </div>
    </div>
  )
}
