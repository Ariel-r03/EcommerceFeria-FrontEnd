import React from 'react'
import {benefits} from '../../../Constants'
import {Cardbenefit}from '../HomePageComponents'
function HomePageBenefitsInfo() {
  return (
    <section className="bg-smoothSlate px-[3rem] sm:w-[80%] sm:flex flex-row sm:px-[4rem] py-[2rem] justify-center">
      {
        benefits.map((benefit)=>(
          <div key={benefit.id} className='mx-[1rem] my-[2rem]'>
             <Cardbenefit benefit={benefit}/>
          </div>
        ))
      }
      
    

      
    </section>
  )
}

export default HomePageBenefitsInfo