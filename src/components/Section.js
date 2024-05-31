import React from 'react'
import styled from 'styled-components'

function Section({title, description, link, leftButtonText, rightButtonText, backgroundImg }) {
  return (
    <Wrap id={title} backgroundImg={backgroundImg}>
      <ItemText>
        { title && 
          <h1>{ title }</h1>
        }
        { description && 
          <p>{ description }</p>
        }
      </ItemText>
      <Buttons>
        <ButtonGroup>
          { leftButtonText && 
            <LeftButton>
              { leftButtonText }
            </LeftButton>
          }
          { rightButtonText && 
            <RightButton>
                { rightButtonText }
            </RightButton>
          }
        </ButtonGroup>
        { link && 
          <a href={`#${link}`}>
            <DownArrow src="/images/down-arrow.svg" />
          </a>
        }
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.backgroundImg}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row
    }
`

const LeftButton = styled.div`
    background-color: grey;
    height: 40px;
    width: 226px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin-left: 20px;
    margin-bottom: 10px;
`

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`
const DownArrow = styled.img`
  margin-top: 20px;
  overflow: hidden;
  height: 40px;
  animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
`