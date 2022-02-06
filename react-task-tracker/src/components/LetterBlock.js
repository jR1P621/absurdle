import styled, { keyframes } from 'styled-components'
import { pulse, flip } from 'react-animations'

export default function LetterBlock({ char, className, color }) {
    return (
        <>
            {char !== '' ? (
                <PulseDiv><h1 className={className} style={{ backgroundColor: color }}> {char}</h1 ></PulseDiv >
            ) : < h1 className={className} > {char}</h1 >}
        </>
    )
}

const pulseAnimation = keyframes`${pulse}`

const PulseDiv = styled.div`
  animation: 0.1s ${pulseAnimation};
`
const flipAnimation = keyframes`${flip}`

const FlipDiv = styled.div`
  animation: 1s ${flipAnimation};
`
