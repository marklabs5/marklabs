const advantage_data = [
    {imgSrc: "./img/functions1.png", title: "Security and Acceleration", content: "Anti-hijacking, anti-tampering, anti-leakage, full-link accelerated content distribution."}, 
    {imgSrc: "./img/functions2.png", title: "Flexible Caching Strategy", content: "Smart algorithm of object popularity and hierarchical caching of hot resources precisely accelerate your resources."}, 
    {imgSrc: "./img/functions3.png", title: "Access Control", content: "Multiple anti-leeching, authentication configuration, and IP blacklist perfectly solve the harm of leeching."}, 
    {imgSrc: "./img/functions4.png", title: "Performance Optimization", content: "Page optimization and intelligent compression save you the cost while accelerating transmission speed."}, 
    {imgSrc: "./img/functions5.png", title: "Statistical Analysis", content: "Support statistical analysis, easy to download."}, 
    {imgSrc: "./img/functions6.png", title: "Log Management", content: "Support customized log service and customized permanent storage."}, 
];

export default function Functions() {
    return (
      <div id="functions" className="relative pb-24 overflow-hidden sm:pb-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
            <div className="lg:pr-8 lg:pt-4">
              <div className="flex flex-col items-center gap-10 text-center text-white sm:flex-row">
                <p className="text-3xl font-extrabold sm:text-4xl">
                    Functions
                </p>
                <p className="text-lg font-medium">
                    The six functions of Mark Network redefine the streaming media datatransmission network.
                </p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="grid w-full grid-cols-1 gap-5 text-white sm:grid-cols-2">
                {
                    advantage_data.map((item) => (
                        <div className="flex flex-col gap-5 p-10 font-medium text-left bg-[#0D4D81] bg-opacity-40">
                            <p className="text-xl">{item.title}</p>
                            <div className="text-lg border-b pb-7 border-b-[#BBBBBB] h-[150px] sm:h-[90px]">{item.content}</div>
                            <img src={item.imgSrc} className="w-20 h-20"></img>
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
