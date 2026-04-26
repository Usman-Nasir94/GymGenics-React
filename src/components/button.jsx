import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#FF5722] text-white text-center transition-transform duration-300 hover:scale-110 px-2 rounded font-semibold hover:bg-orange-500'>
      {props.text}
    </button>
  )
}

export default Button
