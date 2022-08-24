import React, { useState } from 'react'
import Logo from '../../assets/img/rakki-logo-purple.svg'
 

const Menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <div id="menu" className='p-3'>
    <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span className='hamburger-top bg-brightGreen'></span>
        <span className='hamburger-middle bg-brightGreen'></span>
        <span className='hamburger-bottom bg-brightGreen'></span>
    </button>
    {/* Full screen menu */}
    <div className={`menu bg-veryDarkPurple ${open ? 'menu-open' : ''}`}>
        <div className='w-4/5 h-full mx-auto flex flex-col justify-start space-y-10 z-10'>
            <img src={Logo} style={{
                height: '200px',
                width: '300px',
            }}></img>
            <div id="links" className='pl-7 flex flex-col space-y-3 text-6xl text-darkPurple'>
                <div>
                    <a 
                    href='#' 
                    className='hover-underline-animation hover:text-white after:bg-white'>
                        RANDOM ANIME
                    </a>
                </div>
                <div>
                    <a href='#'
                    className='hover-underline-animation hover:text-white after:bg-white'
                    >
                        RANDOM MANGA
                    </a>
                </div>
                <div>
                    <a href='#'
                    className='hover-underline-animation hover:text-white after:bg-white'>
                        SHIT
                    </a>
                </div>
            </div>
        </div>
        <div className='bg-brightGreen w-full h-full absolute -left-1/4 top-1/2' style={{
            transform: 'rotate(45deg) scale(1.8)',
        }}></div>
    </div>

</div>
  )
}

export default Menu