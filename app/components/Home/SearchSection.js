'use client';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import InputItem from './InputItem';
import { SourceContext } from '@/app/context/SourceContext';
import { DestinationContext } from '@/app/context/DestinationContext';
function SearchSection() {
  const {source, setSource} = useContext(SourceContext);
  const {destination,setDestination} = useContext(DestinationContext);

  useEffect(() => {
    if(source){
      console.log(source)
    }
    

  }, [source])

  return (
    <div className='p-2 md:pd-5 border-[2px] rounded-xl'>
        <p className='text-[20px] font-bold text-black'>Get a ride</p>
        <InputItem type= 'source' />
        <InputItem type = 'destination'/>
        <button className='p-3 bg-black w-full mt-5 text-white rounded-lg'>Search</button>
    </div>
  )
}

export default SearchSection
