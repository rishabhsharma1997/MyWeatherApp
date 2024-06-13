import React from 'react';
import DLButton from './DLButton';
import { useSelector } from 'react-redux';

function Input(props) {
  const isDarkMode = useSelector((state) => state.isDark);
  const textColorClassName = isDarkMode ? 'text-gray-400' : 'text-gray-700';
  const buttonBgClassName = isDarkMode ? 'bg-gray-800 hover:bg-gray-700 border-gray-800 hover:border-gray-700' : 'bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700';
  const buttonTextColorClassName = isDarkMode ? 'text-white' : 'text-white';

  return (
    <div className="flex flex-col items-center mt-10">
      <form className="w-full max-w-sm" onSubmit={props.handleSubmit}>
        <div className={`flex items-center border-b border-gray-400 py-2 ${textColorClassName}`}>
          <input className={`appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none ${textColorClassName}`} type="text" placeholder="Location" aria-label="Full name" ref={props.placeRef} />
          <button className={`flex-shrink-0 ${buttonBgClassName} text-sm border-4 ${buttonTextColorClassName} py-1 px-2 rounded`} type="submit">
            Check
          </button>
        </div>
      </form>
      <div className="absolute top-0 right-0 p-4">
        <DLButton />
      </div>
    </div>
  )
}

export default Input;