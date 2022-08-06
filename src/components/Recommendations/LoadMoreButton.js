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
        p-5 text-white text-center bg-slate-600 font-bold
        text-2xl hover:bg-slate-500 shadow-md"
        onClick={onClick}>
        {loading ? (<Spinner/>): buttonText}
    </button>
  )
}

export default LoadMoreButton