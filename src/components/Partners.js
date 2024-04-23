export default function Partners() {
    return (
      <div className="pt-12 pb-24 sm:pb-40">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="flex flex-col items-center gap-10 text-center text-white">
                <p className="text-3xl font-extrabold sm:text-4xl">
                    Mark Partners
                </p>
                <p className="text-lg font-medium">
                    Welcome to join the Mark family! We are looking forward to becoming a great team!
                </p>
            </div>
            <div className="grid items-center max-w-lg grid-cols-2 mx-auto mt-28 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <div className="border border-[#01EBC0] py-4 rounded-xl hover:bg-[#01EBC0] hover:bg-opacity-10">
                    <img
                    className="object-contain w-full col-span-2 max-h-20 lg:col-span-1"
                    src="./img/partners1.png"
                    alt="Transistor"
                    />
                </div>
                <div className="border border-[#01EBC0] py-4 rounded-xl hover:bg-[#01EBC0] hover:bg-opacity-10">
                    <img
                    className="object-contain w-full col-span-2 max-h-20 lg:col-span-1"
                    src="./img/partners3.png"
                    alt="Reform"
                    width={158}
                    height={48}
                    />
                </div>
                <div className="border border-[#01EBC0] py-4 rounded-xl hover:bg-[#01EBC0] hover:bg-opacity-10">
                    <img
                    className="object-contain w-full col-span-2 max-h-20 lg:col-span-1"
                    src="./img/partners2.png"
                    alt="Tuple"
                    width={158}
                    height={48}
                    />
                </div>
                <div className="border border-[#01EBC0] py-4 rounded-xl hover:bg-[#01EBC0] hover:bg-opacity-10">
                    <img
                    className="object-contain w-full col-span-2 max-h-20 sm:col-start-2 lg:col-span-1"
                    src="./img/partners5.png"
                    alt="SavvyCal"
                    width={158}
                    height={48}
                    />
                </div>
                <div className="border border-[#01EBC0] py-4 rounded-xl hover:bg-[#01EBC0] hover:bg-opacity-10">
                    <img
                    className="object-contain w-full col-span-2 col-start-2 max-h-20 sm:col-start-auto lg:col-span-1"
                    src="./img/partners6.png"
                    alt="Statamic"
                    width={158}
                    height={48}
                    />
                </div>
            </div>
        </div>
      </div>
    )
  }
