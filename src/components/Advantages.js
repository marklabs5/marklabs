const advantage_data = [
    {imgSrc: "./img/advantages1.png", content: "Comprehensive Support"}, 
    {imgSrc: "./img/advantages2.png", content: "Stable and Fast"}, 
    {imgSrc: "./img/advantages3.png", content: "Leading Technology"}, 
    {imgSrc: "./img/advantages4.png", content: "High-quality Experience"},
    {imgSrc: "./img/advantages5.png", content: "Secure System"}, 
    {imgSrc: "./img/advantages6.png", content: "Cost Reduction"}
];

export default function Advantages() {
    return (
      <div id="advantages" className="relative pb-24 overflow-hidden sm:pb-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
            <div className="lg:pr-8 lg:pt-4">
              <div className="text-center text-white">
                <p className="mt-2 text-3xl font-extrabold sm:text-4xl">
                  Advantages
                </p>
                <p className="mt-8 text-base font-medium">
                    Mark is a blockchain-based film&TV application project developed by Marklabs. As a new generation of decentralized network for streaming media data transmission, Mark innovated incentive mode for token to facilitate the sharing of idle computing and bandwidth resources across the world, responding to the challenge of rapid development in video streaming.
                </p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="grid w-full grid-cols-1 gap-5 text-white sm:grid-cols-2">
                {
                    advantage_data.map((item) => (
                        <div className="flex flex-row items-center justify-start gap-5 p-10 text-2xl font-medium bg-[#0D4D81] bg-opacity-30">
                            <div className="p-1 border border-white rounded-full">
                                <img src={item.imgSrc} className="w-12 h-12"></img>
                            </div>
                            {item.content}
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
