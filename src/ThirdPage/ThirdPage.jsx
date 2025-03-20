import gsap from "gsap"
import { thirdPageCards } from "../DataFile.js/Data"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

const ThirdPage = () => {

    useGSAP(()=>{
        let thirdImg = document.querySelectorAll('.third-page-img')
        thirdImg.forEach((imag)=>{
            gsap.from(imag,{
                y:'100%',
                duration:1,
                opacity:0,
                ease:'expo.inOut',
                scrollTrigger:{
                    trigger:imag,
                }
            })
            gsap.from(imag.parentElement.previousSibling,{
                opacity:0,
                duration:1,
                scrollTrigger:{
                    trigger:imag.parentElement.previousSibling,
                    start:'top 50%'
                }
            })
        })
    })

  return (
    <div className='text-white py-20'>
        {
         thirdPageCards.map((item,index)=>{
            return(
                <div key={index} className={`third-page-text w-full flex justify-center lg:justify-between items-center ${index != 2 && 'mb-20'} ${index == 1 && 'flex-row-reverse'} flex-wrap gap-10`}>
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-4xl font-[thick]">{item.heading}</h1>
                        <p className="text-sm md:text-lg font-[thin] my-3">{item.para}</p>
                        <button class="bg-[#8C49E9] translate-y-[30px] opacity-0 text-white border border-white border-b-4 font-medium overflow-hidden relative px-10 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group cursor-pointer">
                        <span class="bg-white shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            Review
                        </button>
                    </div>
                        
                    <div className="w-96 overflow-hidden">
                        <img className="third-page-img w-96" src={item.img} />
                    </div>

                </div>
            )
         })
        }
    </div>
  ) 
}

export default ThirdPage