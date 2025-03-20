import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ScrollText = () => {
    const starray1 = [
      'AI Dev', 'Processing', 'AI Learning', 'Deep Learning', 'Robotics'
    ];
  
    const starray2 = [
      'Data Sci', 'AI Solutions', 'Predictive', 'Neural Net'
    ];
  
    const starray3 = [
      'Automation', 'AI Research', 'Comp Vision', 'Cognitive'
    ];
  
    const starray4 = [
      'AI Models', 'AI Algorithms', 'AI Automation', 'Smart Systems'
    ];

    useGSAP(()=>{
        let scrText = document.querySelectorAll('.scrText')
        scrText.forEach((st)=>{
            gsap.from(st,{
                translateX:0,
                scrollTrigger:{
                    trigger:st,
                    start:'top 70%',
                    scrub:true,
                }
            })
        })
    })
  
    return (
      <div className="w-full flex-wrap text-white font-[medium] py-10 flex justify-evenly gap-10">
        <div className="flex flex-col gap-1 my-5">
          {starray4.map((word, index) => {
            return (
              <div
                key={index}
                className="bg-black scrText w-[200px] py-1 px-3 rounded-full flex gap-5 items-center"
                style={{ transform: `translateX(${index * 20}px)` }}
              >
                <span className="bg-[#111] w-8 h-8 rounded-full block text-center leading-8 text-sm">{index + 1}</span>
                <span>{word}</span>
              </div>
            );
          })}
        </div>
  
        <div className="flex flex-col gap-1 my-5">
          {starray1.map((word, index) => {
            return (
              <div
                key={index}
                className="bg-black scrText w-[200px] py-1 px-3 rounded-full flex gap-5 items-center"
                style={{ transform: `translateX(${index * 20}px)` }}
              >
                <span className="bg-[#111] w-8 h-8 rounded-full block text-center leading-8 text-sm">{index + 1}</span>
                <span>{word}</span>
              </div>
            );
          })}
        </div>
  
        <div className="flex flex-col gap-1 my-5">
          {starray2.map((word, index) => {
            return (
              <div
                key={index}
                className="bg-black scrText w-[200px] py-1 px-3 rounded-full flex gap-5 items-center"
                style={{ transform: `translateX(${index * 20}px)` }}
              >
                <span className="bg-[#111] w-8 h-8 rounded-full block text-center leading-8 text-sm">{index + 1}</span>
                <span>{word}</span>
              </div>
            );
          })}
        </div>
  
        <div className="flex flex-col gap-1 my-5">
          {starray3.map((word, index) => {
            return (
              <div
                key={index}
                className="bg-black scrText w-[200px] py-1 px-3 rounded-full flex gap-5 items-center"
                style={{ transform: `translateX(${index * 20}px)` }}
              >
                <span className="bg-[#111] w-8 h-8 rounded-full block text-center leading-8 text-sm">{index + 1}</span>
                <span>{word}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default ScrollText;
  