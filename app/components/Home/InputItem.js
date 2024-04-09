"use client"
import { DestinationContext } from '@/app/context/DestinationContext';
import { SourceContext } from '@/app/context/SourceContext';
import React, { useContext, useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
const InputItem = ({type}) => {
    const [value, setValue] = useState(null);
    const [placeholder, setPlaceholder] = useState(null);
    const {source, setSource} = useContext(SourceContext);
    const {destination,setDestination} = useContext(DestinationContext)

    useEffect(()=> {
        type=='source'
        ?setPlaceholder('pickup Location')
        :setPlaceholder('Dropoff Location')
    }, []);

const getLatitude=(place, type)=>{
    const placeId=place.value.place_id;
    const service=new google.maps.places.PlacesService(document.createElement('div'))
    service.getDetails({placeId}, (place,status) => {
        if(status ==='OK' && place.geometry && place.geometry.location)
        {
            setSource({
                lat:place.geometry.location.lat(),
                lng:place.geometry.location.log(),
                name:place.formatted_address,
                label:place.name
            })
        
        }else{
            setDestination({
                lat:place.geometry.location.lat(),
                lng:place.geometry.location.log(),
                name:place.formatted_address,
                label:place.name
                
            })
        }
    })

}

  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
        <input type="text" placeholder
        className='bg-transparent w-full outline-none' />
         <GooglePlacesAutocomplete
         apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
         selectProps={{
            value,
            onChange: (place)=> {getLatitude(place, type); setValue(place)},
            placeholder: 'pickup location',
            isClearable:true,
            className:'w-full',
            components:{
                DropdownIndicator:false

            },
            styles:{
                control:(provided)=> ({
                    ...provided,
                    backgroundColor:'#00ffff00',
                    border:'none'
                })
            }
         }}
         />
         
      
    </div>
  )
}

export default InputItem
