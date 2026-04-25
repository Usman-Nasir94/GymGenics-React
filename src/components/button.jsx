import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#FF5722] text-white text-center px-2 rounded font-semibold hover:bg-orange-500 transition-colors'>
      {props.text}
    </button>
  )
}

export default Button
