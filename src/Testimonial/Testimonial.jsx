
  import { useRef, useState } from 'react'
import { testimonials } from '../DataFile.js/Data'
import gsap from 'gsap'

const Testimonial = () => {
const [isTrue , setIsTrue] = useState(true)  
  const wrapper = useRef()
  const num = useRef(0)
  const slides = useRef()

  let next = () => {
    if(isTrue){
        setIsTrue(false)
      let width = slides.current.getBoundingClientRect().width
      let fvalue = width + 14.5
      num.current = num.current + 1
      gsap.to(wrapper.current, {
        translateX: -(num.current * fvalue),
        onComplete: function () {
          if (num.current === testimonials.length-2) {
            gsap.set(wrapper.current, {
              translateX: 0,
            })
            num.current = 0
          }
          setIsTrue(true)
        },
      })
    }
  }

  let back = () => {
    if(isTrue){
      setIsTrue(false)
      let width = slides.current.getBoundingClientRect().width
    let fvalue = width + 14.5
    if (num.current === 0) {
      num.current = testimonials.length - 2
      gsap.set(wrapper.current, {
        translateX: -(num.current * fvalue),
      })
    } else {
      num.current = num.current - 1
    }
    gsap.to(wrapper.current, {
      translateX: -(num.current * fvalue),
      onComplete: function () {
        if (num.current === 0) {
          gsap.set(wrapper.current, {
            translateX: -(num.current * fvalue),
          })
        }
        setIsTrue(true)
      },
    })
  }
    }
    

  return (
    <div className="w-full py-20 select-none">
      <div className="text-white">
        <h1 className="text-[clamp(30px,4vw,60px)] font-[thick]">
          Customer Success <span className="text-[#904DED]">Stories</span>
        </h1>
        <p className="font-[thin] leading-none mt-5 mb-10 sm:text-lg">
          Discover how our platform has helped businesses create outstanding content effortlessly. Hear directly from our users about their success and satisfaction.
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex gap-5 mb-3">
          <button
            onClick={back}
            className="bg-black text-white w-40 py-3 rounded-full font-[thin] cursor-pointer hover:bg-[#222] transition-all duration-400">
            Previous
          </button>
          <button
            onClick={next}
            className="bg-black text-white w-40 py-3 rounded-full font-[thin] cursor-pointer hover:bg-[#222] transition-all duration-400">
            Next
          </button>
        </div>

        <div ref={wrapper} className="wrapper text-white flex gap-[14.5px]">
          {testimonials.map((item, index) => {
            return (
              <div ref={slides} key={index} className="slide bg-black w-full md:w-[600px] h-fit p-5 rounded-3xl flex-shrink-0">
                <div className="flex items-center gap-5">
                  <img className="w-15 h-15 rounded-full object-cover" src={item.image} />
                  <h2 className="font-[medium] text-2xl">{item.name}</h2>
                </div>
                <p className="font-[thin] md:text-lg mt-3">{item.review}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
