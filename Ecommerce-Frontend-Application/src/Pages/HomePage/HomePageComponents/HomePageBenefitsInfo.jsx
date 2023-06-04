import React from 'react'
import {benefits} from '../../../Constants'
import {Cardbenefit}from '../HomePageComponents'
function HomePageBenefitsInfo() {
  return (
    <section className="bg-smoothSlate">
      <div className='w-full sm:flex flex-row px-[2rem] py-[2rem]'>
      {
        benefits.map((benefit)=>(
          <div className='mx-[1rem] my-[2rem]'>
             <Cardbenefit benefit={benefit}/>
          </div>
        ))
      }
      </div>
    

      
    </section>
  )
}

export default HomePageBenefitsInfo