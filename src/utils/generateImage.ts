import { colors } from "@/constants/index";
import { CarType } from "@/types/index";

const baseURL = 'https://cdn.imagin.studio/getimage'

export const generateImage = (car:CarType,angle?:string):string =>{
    // new instance of url
    const url:URL = new URL(baseURL)
    
    // append necessary parameters to the url
    url.searchParams.append('customer','hrjavascript-mastery')
    url.searchParams.append('make',car.make);
    url.searchParams.append('modelFamily',car.model);
    url.searchParams.append('zoomType','fullscreen');

    angle?url.searchParams.append('angle',angle):''

    // choose a random color and add it
    const randomInt = Math.round(Math.random()*colors.length)
    url.searchParams.append('paintId',colors[randomInt]);


    // return the final url
    return url.href
}