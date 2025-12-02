import React from 'react'
import { zila_parishad_dhule } from '../assets/assets'

export default function Footer() {
  return (
    <div className='flex-row'>
        <div className='bg-gray-400 w-full text-center'>© 2025 Dhaner Gram Panchayat. All rights reserved.</div>
        <div className='flex w-full bg-gray-600 justify-center p-2'>
          <a href="https://zpdhule.maharashtra.gov.in/">
            <img src={zila_parishad_dhule} alt="Paanchayati Raj" className='w-[150px] h-[150px] mix-blend-multiply invert-0 brightness-100 saturate-0' />
          </a>
        </div>
    </div>
  )
}
