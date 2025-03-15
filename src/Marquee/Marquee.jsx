import { motion } from "motion/react"
import { marqueeImg } from "../DataFile.js/Data"

const Marquee = () => {
  return (
    <div className="w-full overflow-hidden my-20">

    <motion.div initial={{x:0}} animate={{x:'-50.8%'}} transition={{duration:20,ease:'linear',repeat:Infinity}} style={{whiteSpace:'nowrap'}} className='w-[200%] flex gap-[3vw]'>
        <div className='moving w-full flex gap-[3vw]'>
        
        {
         marqueeImg.map((item)=>{
            return(
                <img className="w-[15.35vw] object-contain" src={item} />
            )
         })
        }
        
        </div>
        <div className='moving w-full flex gap-[3vw]'>
        
        {
         marqueeImg.map((item)=>{
            return(
                <img className="w-[15.35vw] object-contain" src={item} />
            )
         })
        }
        
        </div>
       
    </motion.div>

    </div>
  )
}

export default Marquee