import React from 'react'

function TestimonialCard({testimonial}) {
  return (
    <div className='flex flex-col justify-center items-center '>
      <img className='w-[200px] h-[200px] rounded-full' src={testimonial.photo} alt="" />
      <span className='mt-[2rem] text-[24px]  font-semibold'>{testimonial.name} {" "} <span className='text-[#D3C010]'>{testimonial.lastname}</span></span>
      <p className='mt-[1rem] mb-[2rem] sm:w-[40%]'>"{testimonial.description}"</p>
    </div>
  )
}

export default TestimonialCard
