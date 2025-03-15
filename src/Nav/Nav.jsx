import React from 'react'

const Nav = () => {
  return (
    <div className='flex px-0 sm:px-[4vw] py-8 justify-between'>
        <div className='flex items-center gap-1'>
            <img className='w-13' src='https://framerusercontent.com/images/ME9b1n9BmBKSMjmKbNzFG4i3AU.png?scale-down-to=512' />
            <h1 className='text-2xl font-[medium] text-white'>NajmAI</h1>
        </div>
        <div class="navbar-icon bg-black cursor-pointer w-12 items-center h-12 rounded-lg justify-center flex flex-col gap-2">
            <div class="w-7 h-[3px] bg-white rounded"></div>
            <div class="w-7 h-[3px] bg-white rounded"></div>
        </div>
    </div>
  )
}

export default Nav