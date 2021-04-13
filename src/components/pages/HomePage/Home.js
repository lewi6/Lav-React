import React from 'react'
import Body from '../../Body'
import Pricing from '../../Pricing'
import {homeObjOne, homeObjTwo ,homeObjThree, homeObjFour} from './Data'


function Home() {
  return (
    <>
      <Body {...homeObjOne} />
      <Body {...homeObjThree} />
      <Body {...homeObjTwo} />
      <Pricing />
      <Body {...homeObjFour} />
    </>
  )
}

export default Home
