'use client'
import { flyTo } from '@/utils/utils'
import React from 'react'
import Button from '../Button/index'
import { useSelector } from 'react-redux'
import { RootState, store,} from '@/redux/store'

const HeroUpperBtn = () => {
  return (
    <Button title="See Available Cars" handleClick={flyTo} designs="mt-10 p-10 text-red"/>
  )
}

export default HeroUpperBtn