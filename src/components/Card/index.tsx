'use client'
import { generateImage } from '@/utils/generateImage'
import { CarType } from '@/types/index'
import React, { useState } from 'react'
import Button from '../Button/index'
import DetailModal from './DetailModal'

type CardPropsType = {
    car: CarType
}


const Card = ({ car }: CardPropsType) => {


    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const close = () => { setIsModalOpen(false) }


    return (
        <>
            <div className='car-card group text-black transition-all hover:translate-y-[-3px]'>
                {/* Title Area */}
                <h2 className='text-black font-semibold capitalize text-[17px]'>{car.make} {car.model}</h2>

                {/* Price Area */}
                <p className='flex mt-6 text-[32px] text-black'>
                    <span className='text-[19px] font-bold'>$</span>
                    {500}
                    <span className='text-[14px] font-medium self-end'>/day</span>
                </p>

                {/* Image Area */}
                <div className='relative w-full h-40 my-3'>
                    <img src={generateImage(car)} className='object-contain w-full h-full' alt="" />
                </div>

                {/* Bottom Area */}
                <div className='flex w-full mt-2 relative'>
                    {/* Icons */}

                    <div className='group-hover:invisible flex justify-between gap-2 w-full'>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <img src="/steering-wheel.svg" width={25} alt="" />
                            <p className='text-[14px]'>{car.transmission === 'a' ? 'Automatic' : 'Manual'}</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <img src="/tire.svg" width={25} alt="" />
                            <p className='text-[14px]'>{car.drive === 'fwd' ? 'FWD' : car.drive === 'rwd' ? 'rwd' : car.drive === '4wd' ? '4WD' : 'AWD'}</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <img src="/gas.svg" width={25} alt="" />
                            <p className='text-[14px]'>{car.fuel_type[0].toUpperCase() + car.fuel_type.slice(1)}</p>
                        </div>
                    </div>

                    {/* Buttons */}

                    <div className='absolute block w-full justify-center items-center bottom-0 z-10'>
                        <div className='hidden group-hover:flex '>
                            <Button title='Daha Fazla' designs='w-full py-[16px] rounded-3xl' rIcon='/right-arrow.svg' handleClick={() => setIsModalOpen(true)} />
                        </div>
                    </div>
                </div>


            </div>

            {/* Modal */}
            {isModalOpen && <DetailModal car={car} isModalOpen={isModalOpen} close={close} />}
        </>
    )
}

export default Card