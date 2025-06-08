import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40text-sm'>

        {/*-------left----------*/}
        <div>
            <img className='mb-5 w-40'src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>"Welcome to Prescripto, your ultimate healthcare companion! With advanced features like appointment scheduling, health record management, and our smart chatbot, we make healthcare hassle-free. Chat with Prescripto for instant advice and support, anytime, anywhere. Experience seamless care with technology that puts your health first.</p>
        </div>
        {/*-------centee----------*/}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li> Privacy Policy</li>
          </ul>
        </div>
        {/*-------right----------*/}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>8884176312</li>
            <li>MedConnect123@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/*------copyright--------*/}
        <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2024@ MedConnect-All Right-Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
