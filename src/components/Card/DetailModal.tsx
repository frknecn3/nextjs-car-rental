'use client'
import { generateImage } from "@/utils/generateImage"
import { CarType } from "@/types/index"


const DetailModal = ({ car, isModalOpen, close }: { car: CarType, isModalOpen: boolean, close: () => void }) => {

        console.log(generateImage(car))


    return (

        <div className={`fixed inset-0 bg-black bg-opacity-25 z-50 p-4 grid place-items-center`}>
            <div className="relative p-6 bg-white w-full max-w-lg max-h-[90vh] rounded-2xl transition-all flex flex-col gap-5 shadow-xl overflow-auto">
                {/* close button  */}
                <button onClick={close} className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full">
                    <img src="/close.svg" alt="" />
                </button>

                {/* images */}
                <div className="flex-1 flex flex-col gap-3">
                    {/* bigger image */}
                    <div className="w-full h-40 bg-pattern bg-cover bg-center rounded-xl">
                        <img className="h-full mx-auto object-contain" src={generateImage(car)} alt="" />
                    </div>

                    {/* smaller ones */}
                    <div className="flex gap-3">
                        <div className="flex-1 flex relative h-24 bg-primary-blue-100"><img className="h-full mx-auto object-contain" src={generateImage(car,'29')} alt="" /></div>
                        <div className="flex-1 flex relative h-24 bg-primary-blue-100"><img className="h-full mx-auto object-contain" src={generateImage(car,'33')} alt="" /></div>
                        <div className="flex-1 flex relative h-24 bg-primary-blue-100"><img className="h-full mx-auto object-contain" src={generateImage(car,'13')} alt="" /></div>
                    </div>
                </div>

                {/* Car Info */}
                    {Object.entries(car)
                    .filter(([i])=>i!=='year')
                    .map(([key,value])=>(
                        <div className="flex justify-between">
                            <h4 className="capitalize text-gray-600">{key.replace('_',' ')}</h4>
                            <p className="text-black-100 font-semibold capitalize">{value}</p>
                        </div>
                    ))}
            </div>
        </div>

    )
}

export default DetailModal