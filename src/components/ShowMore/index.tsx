'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { ChangeEvent } from 'react'
import Button from '../Button/index'

const ShowMore = () => {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();


    // get parameter from url, if it doesn't exist, then set it as 5
    const limit = Number(searchParams.get('limit'))||5

      const handleLimit = () => {

    // if there is no parameter in the url
    // it means that the user has just entered the website and there are only 5 cars in the screen
    // we will have to add a limit parameter to the url and add to it to make it 10

    // if there is a limit parameter in url it means user pressed show more button once or several times
    // we have to fetch the parameter in the url and modify it (add 5 more)


    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    const newLimit = String(limit+5)
    current.set('limit',newLimit)
    
    
    const search = current.toString();

    const query = search ? `?${search}` : "";

    router.replace(`${pathname}${query}`,{scroll:false});
  };
    





  return (
    <div className='w-full flex-center gap-5 my-10'>
      {limit<35&&<Button handleClick={handleLimit} title='Show More' />}
    </div>
  )
}

export default ShowMore