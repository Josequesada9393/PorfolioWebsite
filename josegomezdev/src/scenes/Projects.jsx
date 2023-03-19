import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import GPTA from '../experienceImages/GPTAImages.png'
import NoWaste from '../experienceImages/noWasteImages.png'
import ShopMe from '../experienceImages/ShopMeImages.png'
import GPTADescription from '../experienceImages/GPTADescription.png'
import GPTATechStack from '../experienceImages/GPTATechStack.png'
import NoWasteDescription from '../experienceImages/NowasteDescription.png'
import shopMeDescription from '../experienceImages/shopMeDescription.png'
import ShopMeTech from '../experienceImages/ShopMeTech.png'
import NoWasteTech from '../experienceImages/NoWasteTech.png'
import GithubButton from '../assets/GitHub-Mark.png'


import React from 'react'

  const container = {
    hidden: {},
    visible: {
      transition: { staggeredChildren: 0.2 }
    }
  };

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {opacity: 1, scale: 1}
}

//format to reference image


function Projects() {

  return (
    <section id="projects" className="pt-22 pb-8">
      {/*headings*/}

        <motion.div
          className="md:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0,  y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl ">
          EXPERIENCE
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
          </div>

          <p className="mt-10 mb-10">
        </p>

      </motion.div>
      {/*projects*/}
      <div className="flex justify-center grid-cols-3">

         <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >



          <div className="relative h-[400px] md:h-full">
            <h3 className="ml-5 font-bold h-[5%]">GPTA</h3>
            <img className="rounded-xl h-[80%]  mb-6 p-2" src={GPTA} alt="" />
            <a className="absolute opacity-60  top-[-14px] right-16 w-[10%] duration-500 hover:w-[20%] hover:opacity-100" href="https://github.com/Kennyk22/GP-TA"><img className=' rounded-full' src={GithubButton} alt="" /></a>
          </div>

          <div className="">
              <img className="rounded-xl mb-6 p-2" src={GPTADescription} alt="" />
              </div>
          <div className="">
              <img className="rounded-xl  mb-6 p-2" src={GPTATechStack} alt="" />
              </div>



          <div className="relative h-[400px] md:h-full">
            <h3 className="ml-5 font-bold h-[5%]">ShopMe</h3>
            <img className="rounded-xl h-[80%] mb-6 p-2" src={ShopMe} alt="" />
            <a className="absolute opacity-60 top-[-14px] right-16 w-[10%] duration-500 hover:w-[20%] hover:opacity-100" href="https://github.com/Josequesada9393/shopMe"><img className=' rounded-full' src={GithubButton} alt="" /></a>

              </div>

          <div className="">
              <img className="rounded-xl mb-6 p-2" src={shopMeDescription} alt="" />
              </div>
          <div className="">
              <img className="rounded-xl  mb-6 p-2" src={ShopMeTech} alt="" />
          </div>

           <div className="relative h-[400px] md:h-full">
            <h3 className="ml-5 font-bold h-[5%]">NoWaste</h3>
            <img className="rounded-xl h-[80%] mb-6 p-2" src={NoWaste} alt="" />
            <a className="absolute opacity-60 top-[-14px] right-16 w-[10%] duration-500 hover:w-[20%] hover:opacity-100" href="https://github.com/Josequesada9393/NoWaste"><img className=' rounded-full' src={GithubButton} alt="" /></a>

              </div>

          <div className="">
              <img className="rounded-xl mb-6 p-2" src={NoWasteDescription} alt="" />
              </div>
          <div className="">
              <img className="rounded-xl  mb-6 p-2" src={NoWasteTech} alt="" />
              </div>

        </motion.div>
      </div>

    </section>
  )
}

export default Projects