import React from 'react'
import githubIcon from '../experienceImages/GitHub-Mark.png'

function SocialMediaIcons({mx}) {
  return (
     <div className={`flex justify-center md:justify-start my-10 gap-7 ${mx}`}>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/jose-alberto-gomez/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 mb-[0.5px] w-7"
        href="https://github.com/Josequesada9393"
        target="_blank"
        rel="noreferrer"
      >
        <img className="rounded  opacity-95 " alt="twitter-link" src={githubIcon} />
      </a>
    </div>
  )
}

export default SocialMediaIcons