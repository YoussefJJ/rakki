import React, { useEffect, useState } from 'react'
import Logo from '../../assets/img/rakki-logo-green.svg'
import Nagito from '../../assets/img/loading-nagito.gif'

const RandomLoading = ({ text }) => {
    const [trail, setTrail] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            if (trail.length === 3) {
                setTrail('')
            } else {
                setTrail(trail => trail + '.')
            }
        } , 300)
        return () => clearInterval(interval)
    } , [])

  return (
    <div className='h-[calc(100vh_-_80px)] w-full bg-veryDarkPurple'>
        <div className='flex flex-col justify-center items-center h-full w-full'>
            <img src={Logo} alt='rakki-logo' className='loading-image'/>
            <div className='flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0'>
                <img src={Nagito} alt='loading' className='loading-gif'/>
                <h2 className='ml-5 text-2xl font-medium text-white'>{`${text}${trail}`}</h2>
            </div>
        </div>
    </div>
  )
}

export default RandomLoading