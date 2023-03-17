import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function DotGroup({ selectedPage, setSelectedPage }) {

  const selectedStyles = `relative bg-yellow before:absolute before:w-6
  before:h-6 before:rounded-full before:border-2 befooer:border-yellow
  before:left-[-50%] before:top-[-50%]`
  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
       <AnchorLink className={`${selectedPage === 'home' ? selectedStyles : "bg-dark-grey"}
    hover:text-yellow transition duration-500
     w-3 h-3 rounded-full`}
      href={`#home}`}
      onClick={() => setSelectedPage('home')}
    />
 <AnchorLink className={`${selectedPage === 'skills' ? selectedStyles : "bg-dark-grey"}
    hover:text-yellow transition duration-500
     w-3 h-3 rounded-full`}
      href={`#skills}`}
      onClick={() => setSelectedPage('skills')}
      />
       <AnchorLink className={`${selectedPage === 'projects' ? selectedStyles : "bg-dark-grey"}
    hover:text-yellow transition duration-500
     w-3 h-3 rounded-full`}
      href={`#projects}`}
      onClick={() => setSelectedPage('projects')}
      />
       <AnchorLink className={`${selectedPage === 'contact' ? selectedStyles : "bg-dark-grey"}
    hover:text-yellow transition duration-500
     w-3 h-3 rounded-full`}
      href={`#contact}`}
      onClick={() => setSelectedPage('contact')}
      />
       <AnchorLink className={`${selectedPage === 'something' ? selectedStyles : "bg-dark-grey"}
    hover:text-yellow transition duration-500
     w-3 h-3 rounded-full`}
      href={`#something}`}
      onClick={() => setSelectedPage('something')}
    />



    </div>
  )
}

export default DotGroup