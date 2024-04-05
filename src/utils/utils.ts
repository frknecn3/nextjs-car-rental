import { CarType, FilterType, Option } from "@/types/index";
import { Dispatch } from "@reduxjs/toolkit";
import { MouseEventHandler } from "react";
import { useDispatch } from "react-redux";

export const flyTo = ():void=>{
    alert('aşağı indik')
}

const options = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    headers: {
      'X-RapidAPI-Key': 'f883fcd567mshc7950d5e1e81018p1daff4jsn12eba6ebe2be',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };


  // URL Params type

export const fetchCars =async (filter:FilterType):Promise<CarType[]> =>{

    // default params so url params will never be undefined
    const {make='bmw',model='',limit='8',year='',fuel=''} = filter

    const searchString = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&limit=${limit}&model=${model}&fuel=${fuel}&year=${year}`
    
    const res = await fetch(searchString,options)

    return await res.json()
}

export const handleSelect = (value:string,dispatch:Dispatch):void =>{
  dispatch({type:'SET_MAKE',payload:value})
}

export const handleInput =  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>,value:string,dispatch:Dispatch):void =>{
  e.preventDefault()
  dispatch({type:'SET_MODEL',payload:value})
}

export const selectOptions:Option[] = [
  { value: "bmw", label: "BMW" },
  { value: "nissan", label: "Nissan" },
  { value: "honda", label: "Honda" },
  { value: "renault", label: "Renault" },
  { value: "toyota", label: "Toyota" },
  { value: "audi", label: "Audi" },
]