import React from 'react'
import Logo from '../../assets/img/rakki-logo-green.svg'
import SvgComponent from './Logo'

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
                    <div id="links">
                        <a className='p-2 text-brightPurple text-left text-lg' href='#'>Random</a>
                        <a className='p-2 text-brightPurple text-left text-lg' href='#'>Random</a>
                        <a className='p-2 text-brightPurple text-left text-lg' href='#'>Random</a>
                    </div>
                </div>
            </div>
            <div id="search">
                <span className='bg-brightGreen p-2 text-base'>Search</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar