import React from 'react'
import Logo from '../../assets/img/rakki-logo-green.svg'
import Menu from './Menu'

const Navbar = () => {
  return (
    <nav className='h-20 bg-veryDarkPurple'>
        <div className='flex justify-between items-center w-full h-full'>
            <div id="logo_and_links">
                <div className='flex flex-row justify-start items-center w-full'>
                    <img 
                    src={Logo}
                    style={{
                    height: '100px',
                    width: '200px',
                    }}/>
                </div>
            </div>
            <Menu/>
        </div>
    </nav>
  )
}

export default Navbar