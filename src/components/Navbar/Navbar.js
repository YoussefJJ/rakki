import React from 'react'
import Logo from '../../assets/img/rakki-logo-green.svg'
import Menu from './Menu'
import Search from '../Search/SearchModal'

const Navbar = () => {
  return (
    <nav className='h-20 bg-veryDarkPurple relative overflow-hidden'>
        <div className='flex justify-between items-center w-full h-full'>
            <div id="logo_and_links" className='flex items-center px-5 md:relative md:w-1/3'>
                <Menu/>
                <div className='flex flex-row justify-start items-center w-full md:absolute md:left-0 md:right-0 md:m-auto' style={{
                    height: '100px',
                    width: '100%',
                    }}>
                    <img 
                    src={Logo}
                    className='md:w-fit md:m-auto h-full logo'
                    />
                </div>
            </div>
            <div className='h-1.5 absolute bottom-0 w-full bg-brightGreen -skew-x-[28deg] translate-x-1/2 md:translate-x-1/3'>

            </div>
            <div className='flex px-5'>
              <Search/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar