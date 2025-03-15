import { useState } from 'react'
import { faq } from '../DataFile.js/Data'

const FAQ = () => {
    let [idx , setIdx] = useState(null)

    let openClose = (index) => {
        setIdx(index == idx ? null :index)
    }

  return (
    <div className="flex flex-col lg:flex-row items-center py-10 px-3 w-full h-auto text-white bg-black rounded-3xl">
        <div className="flex-1 p-4">
            <h1 style={{whiteSpace:'nowrap'}} className="text-[clamp(30px,4vw,60px)] font-[thick] leading-none">Frequently Asked</h1>
            <h1 className="text-[clamp(30px,4vw,60px)] w-fit font-[thick] mb-2 text-[#904DED]">Questions</h1>
            <p className='font-[thin] leading-none md:text-lg'>Have questions about our AI-Powered Design Assistant? Find answers to the most common questions and learn how our platform can enhance your creative process.</p>
        </div>
        
        <div className="flex-1">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-4">
                {faq.map((faq, index) => (
                   <div onClick={()=>openClose(index)} style={{gridTemplateRows:index == idx ? '30px 1fr' : '30px 0fr',}} key={index} className="bg-[#111] cursor-pointer rounded-lg grid px-5 py-8 sm:py-5 transition-all duration-300">
                    <div className="w-full flex justify-between items-center">
                        <span className="text-xl font-[thin] sm-[medium]">{faq.question}</span>
                    </div>
                    <div className="font-[thin] overflow-hidden mt-8 sm:mt-3">
                        <p>{faq.answer}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>

  )
}

export default FAQ
