import React from 'react'
import HeroUpperBtn from './HeroUpperBtn'

const HeroUpper = () => {
  return (<div className="flex-1 pt-36 padding-x max-h-[920px] text-white">
  <h1 className="hero__title">Feel the freedom, get on the road!</h1>
  <p className="hero__subtitle text-gray-300">Are you ready for an unforgettable experience with a golden service? You can crown your car rental experience with Golden Options and make every moment special.</p>
  <HeroUpperBtn />
</div>
  )
}

export default HeroUpper