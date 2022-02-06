import PropTypes from 'prop-types'
import { FaUndo, FaQuestion, FaRedoAlt } from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'
import { pulse, flip } from 'react-animations'

const Header = ({ title, helpBox, reset }) => {
    return (
        <header className='header'>
            <FaQuestion className='button help' onClick={helpBox}></FaQuestion>
            <h1 className='title'>{title}</h1>
            <PulseDiv><FaRedoAlt className='button reset' onClick={reset}></FaRedoAlt></PulseDiv>
        </header >
    )
}

export default Header

const pulseAnimation = keyframes`${pulse}`

const PulseDiv = styled.div`
  animation: 0.1s ${pulseAnimation};
`