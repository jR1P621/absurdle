import LetterBlock from "./LetterBlock"
import styled, { keyframes } from 'styled-components'
import { flip } from 'react-animations'

export default function WordLine({ word, goal }) {

    const getClassName = (char, index) => {
        if (!goal) {
            return 'lbox full invalid'
        }
        var c = 'lbox full'
        if (word.locked) {
            if (!goal.includes(char)) {
                c += ' invalid'
            }
            else if (goal.charAt(index) === char) {
                c += ' correct'
            }
            else {
                c += ' misplaced'
            }
        }
        return c
    }

    const emptyTiles = () => {
        var arr = []
        if (!goal)
            return arr
        for (var i = word.word.length; i < goal.length; i++) {
            arr.push(i)
        }
        return arr
    }

    return <div className='word'>
        {word.word.length > 0 && [...word.word].map((char, index) => (
            <LetterBlock key={index} char={char} className={getClassName(char, index)} />
        ))}
        {emptyTiles().map((index) => (<LetterBlock key={index} char='' className='lbox' />))}
    </div>
}

const flipAnimation = keyframes`${flip}`

const FlipDiv = styled.div`
  animation: 1s ${flipAnimation};
`
