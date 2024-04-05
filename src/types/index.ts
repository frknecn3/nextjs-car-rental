import { MouseEventHandler } from "react"

export type BtnPropsType = {
  designs?: string,
  title: string,
  disabled?: boolean,
  btnType?: 'button' | 'submit',
  rIcon?: string,
  handleClick?: MouseEventHandler<HTMLButtonElement>,
}

export type CarType = {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: 'fwd' | 'rwd' | 'awd' | '4wd'
  fuel_type: 'gas' | 'diesel' | 'electricity'
  highway_mpg: number
  make: string
  model: string
  transmission: 'a' | 'm'
  year: number
}

export type FilterType = {
  make?: string,
  model?: string,
  year?: string,
  limit?: string,
  fuel?: string,
}

export type Option = {
  value:string,
  label:string
}

