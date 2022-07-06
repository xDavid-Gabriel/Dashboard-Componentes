import React from 'react'

const Header = ({category,title}) => {
  return (
    <div className="mt-16 md:mt-0 mb-10">
      <p className="text-gray-400">
        {category}
      </p>
      <p className='text-3xl font-extrabold tracking-tight text-slate-900'>{title}</p>
    </div>
  )
}

export default Header