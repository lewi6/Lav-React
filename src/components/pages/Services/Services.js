import React from 'react'
import Body from '../../Body'
import Pricing from '../../Pricing'
import {homeObjOne, homeObjTwo ,homeObjThree, homeObjFour} from './Data'


function Services() {
  return (
    <>
      
      <Body {...homeObjTwo} />
      <Pricing />
    
    </>
  )
}

export default Services
