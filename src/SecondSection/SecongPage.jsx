import { motion } from "motion/react";
import { CardData } from "../DataFile.js/Data.jsx";


const SecongPage = () => {

    let parentVariants = {
        hidden:{
            opacity:0,
        },
        show:{
            opacity:1,
        },
    }

    let childVariants = {
        hidden:{
            opacity:0,
            y:80,
        },
        show:{
            opacity:1,
            y:0,
        },
    }

  return (
    <div className="text-white my-5">
      <div>
        <h1 className="capitalize tracking-tighter leading-none mb-5 text-[clamp(35px,6vw,60px)] font-[thick]">
          Unleash Your <span className="text-[#904DED]">Creativity</span>
        </h1>
        <p className="text-sm sm:text-lg font-[thin] w-full lg:w-[80%] opacity-70">
          Discover how our AI-Powered Design Assistant transforms your ideas into stunning designs effortlessly. Follow these simple steps to turn your vision into reality.
        </p>
      </div>

      <motion.div className="flex gap-3 justify-center mt-5 flex-wrap"
      variants={parentVariants} initial='hidden' whileInView='show' transition={{duration:1}}  viewport={{amount:0.8,once:true}}
      >
        {
          CardData.map((data, index) => {
            return (
              <motion.div key={index} variants={childVariants} transition={{duration:1}} className="bg-black p-5 rounded-2xl w-full md:w-[330px] lg:w-96 top-0" style={{position:'sticky'}}>
                <button className="p-2 mb-10 rounded-full bg-[#904DED]">
                  {data.svgIcon} 
                </button>
                <h1 style={{whiteSpace:'nowrap'}} className="text-3xl font-[medium] mb-3">{data.heading}</h1>
                <p className="font-[thin] leading-none opacity-70">{data.para}</p>
              </motion.div>
            );
          })
        }
      </motion.div>
    </div>
  );
}

export default SecongPage;
