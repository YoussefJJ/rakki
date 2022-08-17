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
        p-5 text-darkPurple text-center bg-brightGreen font-bold
        text-2xl hover:bg-brightPurple hover:text-brightGreen transition-all duration-150 ease-in shadow-md"
        onClick={onClick}>
        {loading ? (<Spinner/>): buttonText}
    </button>
  )
}

export default LoadMoreButton