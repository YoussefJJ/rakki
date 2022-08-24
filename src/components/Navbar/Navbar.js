import React from 'react'
import Logo from '../../assets/img/rakki-logo-green.svg'
import Menu from './Menu'

const Navbar = () => {
  return (
    <nav className='hidden md:block h-20 bg-veryDarkPurple'>
        <div className='flex justify-between items-center w-full h-full'>
            <div id="logo_and_links">
                <div className='flex flex-row justify-start items-center w-full'>
                    {/* <h1 className='p-2 text-brightGreen text-left text-lg'>Logo</h1> */}
                    <img 
                    src={Logo}
                    style={{
                    height: '100px',
                    width: '200px',
                    }}/>
                </div>
            </div>
            {/* <div id="menu" className='p-3'>
                <button className='hamburger'>
                    <span className='hamburger-top bg-brightGreen'></span>
                    <span className='hamburger-middle bg-brightGreen'></span>
                    <span className='hamburger-bottom bg-brightGreen'></span>
                </button>
            </div> */}
            <Menu/>
        </div>
    </nav>
  )
}

export default Navbar