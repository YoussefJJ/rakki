import React from 'react'
import Spinner from '../Spinner/Spinner'

const LoadMoreButton = ({
    onClick,
    buttonText,
    loading
}) => {
  return (
    <button 
        className="w-full
        flex justify-center items-center
        p-5 text-brightGreen text-center bg-darkPurple font-bold active:bg-darkPurple
        text-2xl hover:bg-brightPurple transition-all duration-150 ease-in shadow-md"
        onClick={onClick}>
        {loading ? (<Spinner/>): buttonText}
    </button>
  )
}

export default LoadMoreButton