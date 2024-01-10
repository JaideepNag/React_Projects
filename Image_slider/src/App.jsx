import React from 'react'
import Slider from "./Components/Slider"
import {slides} from "./Data/images.json"
import styled from 'styled-components'

const App = () => {
  return (
    <Wrapper>
        <h1>Image Slider</h1>
        <Slider data={slides}/>
    </Wrapper>
  )
}

export default App

const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    text-shadow: 0px 0px 4px;
  }
`