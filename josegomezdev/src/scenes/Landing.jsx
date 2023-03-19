import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SocialMediaIcons from '../components/SocialMediaIcons'

function Landing({ setSelectedPage }) {

  const isAboveLarge = useMediaQuery('(min-width: 1060px)');
  return (
    <section id='home' className="md:flex md:justify-between md:items-center  gap-16 md:h-full py-10"
>

     {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-2 md:mt-2 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div className='relative z-0  ml-20 before:absolute before:top-40 before:-left-30 before:rounded-t-[900px]
           before:rounded-b-[500px] before:rounded-r-[700px] before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-[400px] before:border-2 before:border-[#ff5f6d] before:z-[-1]'
          >
            <img
              alt="profile"
              className="hover:filter hover:grayscale-[70] rounded-t-[300px] transition duration-500 z-10 w-full max-w-[300px] md:max-w-[400px]"
              src="assets/profilePicJose.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px] hover:grayscale-[70] transition duration-500"
            src="assets/profilePicJose.png"
          />
        )}

</div>

        {/* MAIN SECTION */}
        <div className="z-30 basis-2/5 mt-12 md:mt-32">

          <motion.div
            initial="hidden"
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variant={{
              hidden: { opacity: 0, x: -50 },
              visible: {opacity: 1, x: 0}
            }}

          >

    <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Jose Gomez {""}

          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">


            <span className='text-md font-bold text-yellow transition duration-150'>Full Stack Developer</span> and former foreign language teacher,
            experienced with <span className='text-md font-bold text-yellow transition duration-150'> Javascript</span> technologies.
            I bring a unique blend of technical
            expertise and <span className='text-md font-bold text-yellow transition duration-150'> communication </span>
            skills to create impactful and user-friendly wespan applications.
            Just as I would do with my former students, I enjoy breaking down
            <span className='text-md font-bold text-yellow transition duration-150'> complex problems
            </span> into <span className='text-md font-bold text-yellow'>readable code</span> for my team and
            intuitive results for clients.
            <br />
            <br />
            Originally from rural Spain, being outdoors is where I feel best so you won't probably catch me at home during the weekends.
          </p>

        </motion.div>

        {/* call to action */}
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
            initial="hidden"
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            variant={{
              hidden: { opacity: 0, x: -50 },
              visible: {opacity: 1, x: 0}
            }}
        >

       <AnchorLink
            className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500'
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>

       <AnchorLink
            className='rounded-r-sm bg-gradient-rainblue p-0.5 ml-3'
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className='bg-deep-blue  hover:text-red
            transition duration-500 w-full h-full flex items-center justify-center
            font-playfair px-10'>let's talk</div>
        </AnchorLink>

        </motion.div>


        <motion.div
        className='flex mt-5 justify-center md:justify-start'
            initial="hidden"
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variant={{
              hidden: { opacity: 0, x: -50 },
              visible: {opacity: 1, x: 0}
          }}
        >

          <SocialMediaIcons/>
        </motion.div>

        </div>

    </section>
  )
}

export default Landing