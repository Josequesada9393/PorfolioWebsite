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

                {/*GP-TA is an AI Teaching Assistant to mark grades automatically. It aims at reducing foreing language teachers workload while still providing helpful and accurate feedback.

It allows users to create and log onto their profile.
Users can access a classroom dashboard where they can create folders for students and assing multiple assignments to each student.
Student's essays may be uploaded on a doc file, an image file or simply copy and paste. Then, let the AI do its magic and return feedback.
Feedback is returned in three different steps:
Step 1: It returns the text submitted by the student highlighting grammar and spelling mistakes.
Step 2: It provides a list with each mistake and specific feedback about it.
Step 3: It suggests several areas of improvement to expand student's progress based on the text.
It includes Stripe payments*/}

          <div className="">
            <h3 className="ml-5 font-bold h-[5%]">GPTA</h3>
              <img className="rounded-xl h-[80%] mb-6 p-2" src={GPTA} alt="" />
              </div>

          <div className="">
              <img className="rounded-xl mb-6 p-2" src={GPTADescription} alt="" />
              </div>
          <div className="">
              <img className="rounded-xl  mb-6 p-2" src={GPTATechStack} alt="" />
              </div>



          <div className="">
            <h3 className="ml-5 font-bold h-[5%]">ShopMe</h3>
              <img className="rounded-xl h-[80%] mb-6 p-2" src={ShopMe} alt="" />
              </div>

          <div className="">
              <img className="rounded-xl mb-6 p-2" src={shopMeDescription} alt="" />
              </div>
          <div className="">
              <img className="rounded-xl  mb-6 p-2" src={ShopMeTech} alt="" />
          </div>

           <div className="">
            <h3 className="ml-5 font-bold h-[5%]">NoWaste</h3>
              <img className="rounded-xl h-[80%] mb-6 p-2" src={NoWaste} alt="" />
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