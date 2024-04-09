import React from 'react'
import { UserButton } from '@clerk/nextjs'
const Header = () => {
    const headerMenu= [
        {
            id:1,
            name:'Ride',
            
        },
        {
            id:1,
            name:'Package',
            
        }
    ]
  return (
    <div className='p-4 pb-3 pl-10 border-b-[4px] border-gray-200 flex items-center justify-between'>
        <div className='flex gap-24 items-center'>
            <h1 className=''>Uber</h1>
        </div>
        <div className='flex gap-6 items-center'>
            {headerMenu.map((item)=> (
                <div className='flex gap-2 item-center'>
                    <h2 className='text-[14px] font-medium'>{item.name}</h2>
                </div>
            ))}
        </div>
        <UserButton afterSignOutUrl="/"/>

    </div>
  )
}

export default Header
