import React from 'react'
import Logo from '../../assets/img/rakki-logo-green.svg'
import Nagito from '../../assets/img/loading-nagito-faster.gif'

const RandomLoading = ({ text }) => {

  return (
    <div className='h-[calc(100vh_-_80px)] w-full bg-veryDarkPurple'>
        <div className='flex flex-col justify-center items-center h-full w-full'>
            <img src={Logo} alt='rakki-logo' className='loading-image'/>
            <div className='flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0'>
                <img src={Nagito} alt='loading' className='loading-gif'/>
                <span className='ml-0 sm:ml-5 text-2xl font-medium text-white loading-text'>{text}</span>
            </div>
        </div>
    </div>
  )
}

export default RandomLoading