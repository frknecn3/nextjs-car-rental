'use client'
import { fetchCars } from "@/utils/utils";
import Card from "@/components/Card/index";
import CustomFilter from "@/components/CustomFilter/index";
import Hero from "@/components/Hero/index";
import SearchBar from "@/components/SearchBar/index";
import ShowMore from "@/components/ShowMore/index";
import { CarType } from "@/types/index";
import { useSelector } from "react-redux";
import { RootState, store } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";


const MainPage=()=> {

  const make = useSelector((store:RootState)=>store.make)
  const model = useSelector((store:RootState)=>store.model)
  const path = useSearchParams()

  

  const [cars,setCars] = useState<CarType[]>([])

  useEffect(()=>{
    const getData = async()=>{
      const limit = path.get('limit')||undefined
      const fetchedCars = await fetchCars({model,make,limit})
      setCars(fetchedCars)
    }
    getData()

  },[make,model,path]
  )
  

  return (
    <>
      <main className="pt-52">
        <Hero />

        <div id="catalogue" className="mt-12 padding-x padding-y max-width text-white">
          <div className="home__text-container">
            <h1 className="text-[40px] font-extrabold">Car Catalogue</h1>
            <p className="text-[24px] font-medium">Discover The Cars You May Like</p>
          </div>

          <div className="home__filters text-white">
            <SearchBar />

            <div className="home__filter-container">
              <CustomFilter />
              <CustomFilter />
            </div>
          </div>

          {/* Listing Cars */}
          <div className='cars-list'>
            {
              !cars ? <div className="home__error-container"><h1>Sorry, an error has occurred.</h1></div> :
                cars.length > 0 ?
                  (
                    <section>
                      <div className="home__cars-wrapper">
                      {cars.map((car,i) => (
                        <Card car={car} key={i}/>
                        ))}
                      </div>

                      <ShowMore />
                    </section>
                  ) :
                  <div>No car fitting your search criteria has been found</div>
            }


          </div>

        </div>

      </main>
    </>
  );
}

export default MainPage