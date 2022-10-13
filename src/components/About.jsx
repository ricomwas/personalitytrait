import React from 'react'
import Typed from 'react-typed';

const About = () => {
  return (
    <div name='about' className='text-white'>
      <div className='bg-[#000] mt-[-48x] w-full h-96 mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>Find out your personality trait.</p>
        
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Are you ?</p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['an EXTROVERT', 'or',  'an INTROVERT']}
            typeSpeed={140}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
          Discover where you fall on the introvert-extrovert spectrum.
        </p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          Get Started
        </button>
      
      </div>
    
    
    
    </div>
  )
}

export default About