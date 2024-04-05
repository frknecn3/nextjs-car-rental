'use client'
import React from 'react'
import { BtnPropsType } from '@/types/index'

const Button = ({disabled,designs,btnType,title,handleClick,rIcon}:BtnPropsType) => {
  return (
    <button disabled={disabled} onClick={handleClick} type={btnType} className={`${designs} flex px-10 py-4 bg-blue-500 rounded-3xl hover:bg-blue-700 transition-all text-white `}>
      <span className='flex-1'>{title}</span>
      {rIcon?<div className='relative w-6 h-6'>
        <img src={rIcon} className='' alt="" />
      </div>:''}
    </button>
  )
}

export default Button