import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title="Modal S"
        description="Order Online"
        backgroundImg="model-s.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing inventry"
        link="Modal Y"
      />
      <Section
        title="Modal Y"
        description="Order Online"
        backgroundImg="model-y.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing inventry"
        link="Modal 3"
      />
      <Section
        title="Modal 3"
        description="Order Online"
        backgroundImg="model-3.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing inventry"
        link="Modal X"
      />
      <Section
        title="Modal X"
        description="Order Online"
        backgroundImg="model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing inventry"
        link="Solar pannels"
      />
      <Section
        title="Solar pannels"
        description="Low cost solar pannels"
        backgroundImg="solar-panel.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing inventry"
        link="Solar roofs"
      />
      <Section
        title="Solar roofs"
        description="Low cost solar roofs"
        backgroundImg="solar-roof.jpg"
        rightButtonText="Existing inventry"
        link="Modal S"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`