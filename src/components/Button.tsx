import React from 'react'
import styled from 'styled-components'

const ButtonComp = styled.button`
    height: 50px;
    width: 100px;
    background: none;
    border: 3px transparent green;
    border-radius: 10px;
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 4px transparent;
  color: aliceblue;
`

export default function Button() {
  return (
    <ButtonComp>
      Buy now
    </ButtonComp>
  )
}
