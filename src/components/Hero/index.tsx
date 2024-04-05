import HeroUpper from "./HeroUpper"


const Hero = () => {
  return (
    <div className="hero text-white">
        <HeroUpper />
        <div className=" flex justify-center">
            <img className="object-contain" src="/hero.png" alt="" />
        </div>
    </div>
  )
}

export default Hero