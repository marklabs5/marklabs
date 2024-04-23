import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import '../css/animations.css';

const content = [
    {title: "What is Mark?", content: "Mark is a blockchain-based film&TV application project developed by Marklabs. As a new generation of decentralized network for streaming media data transmission, Mark innovated incentive mode for token to facilitate the sharing of idle computing and bandwidth resources across the world, responding to the challenge of rapid development in video streaming."}, 
    {title: "How does blockchain technology work?", content: "Blockchain technology is the underlying technology behind cryptocurrencies. It is a decentralized and distributed ledger that records transactions across multiple computers, known as nodes. Each transaction is added to a 'block' and linked to the previous block, forming a chain of blocks. This creates a transparent and tamper-resistant record of transactions."}, 
    {title: "What is a wallet in the context of cryptocurrencies?", content: "A cryptocurrency wallet is a secure digital wallet that enables users to store, manage, and interact with their cryptocurrencies. Wallets can be software-based (such as desktop or mobile apps) or hardware devices (physical devices designed specifically for securely storing cryptocurrencies)."}, 
    {title: "Is cryptocurrency a good investment?", content: "The decision to invest in cryptocurrency depends on various factors such as risk tolerance, financial goals, and understanding of the market. Cryptocurrencies can be highly volatile, so it's important to conduct thorough research, diversify investments, and consider professional advice before making any investment decisions."}, 
    {title: "What is a smart contract?", content: "A smart contract is a self-executing contract with predefined rules and conditions written in code. It automatically executes and enforces the terms of an agreement between parties without the need for intermediaries. Smart contracts are often built on blockchain platforms like Ethereum and enable various decentralized applications (DApps) and complex transactions."}, 
];

export default function FAQ() {
  return (
    <div className="w-full px-4 pb-20 sm:pb-32">
        <div className="flex flex-col items-center gap-10 text-center text-white">
            <p className="text-3xl font-extrabold sm:text-4xl">
               FAQ
            </p>
        </div>
        <div className="flex flex-col w-full max-w-4xl gap-5 p-2 mx-auto mt-16 rounded-2xl">
            {
                content.map((item) => (
                    <Disclosure>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="border border-[#01EBC0] flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white rounded-lg hover:bg-[#01EBC0] hover:bg-opacity-10">
                                <span className='text-lg sm:text-xl'>{item.title}</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'rotate-180 transform' : ''
                                } h-5 w-5 text-[#01EBC0]`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                                <div className='text-left text-md sm:text-lg fadeIn'>{item.content}</div>
                            </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))
            }
        </div>
    </div>
  )
}
