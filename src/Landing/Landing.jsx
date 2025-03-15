import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Landing = () => {

useGSAP(()=>{
  let tl = gsap.timeline()
  tl.from('.landing',{
    y:'100%',
    duration:1,
    ease:'expo.out'
  })
  .to('.landing',{
    scaleX:1,
  })
  .to('.landing-text h1',{
    opacity:1, 
    y:0,
  })
  .to('.landing-text p',{
    opacity:1, 
    x:0,
    delay:-0.3
  })
  .to('.landing-text button',{
    opacity:1, 
    y:0,
    delay:-0.3
  })
  .to('.landing-img',{
    opacity:1,
    delay:-0.3 
  })
})

  return (
    <div className="w-full h-screen py-[2vw] mb-10">
        <div style={{transform:'scaleX(0.3)'}} className='landing w-full h-full bg-black rounded-[40px] text-white flex flex-col lg:flex-row lg:items-center justify-between px-8 py-10 overflow-hidden relative'>

            <div className='w-full lg:w-1/2 landing-text'>

                <h1 className='font-[thick] opacity-0 text-[clamp(25px,4vw,55px)] uppercase translate-y-[-30px]'>Your Ai - powered</h1>
                <h1 className='font-[thick] opacity-0 text-[clamp(25px,4vw,55px)] uppercase translate-y-[-30px]'><span className='text-[#904DED]'>design</span> assistant</h1>
                
                <p className='font-[thin] translate-x-[-30px] text-sm py-5 md:text-lg md:pb-3 opacity-0 '>Unlock your creative potential. Seamlessly generate, customize, and perfect your designs with cutting-edge AI technology.</p>

                <button class="bg-[#8C49E9] translate-y-[30px] opacity-0 text-white border border-white border-b-4 font-medium overflow-hidden relative px-10 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group cursor-pointer">
                    <span class="bg-white shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Review
                </button>

            </div>

                <img className='landing-img w-84 lg:w-[40vw] opacity-0 max-w-[600px] absolute right-[-50px] bottom-[-50px] lg:right-[-100px] lg:bottom-[-100px]' src='https://framerusercontent.com/images/cLhE0zz9KoEfqjG2JcfNsvEDpA0.png?scale-down-to=1024' />

        </div>
    </div>
  )
}

export default Landing