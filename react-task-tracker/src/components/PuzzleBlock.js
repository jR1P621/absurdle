import PropTypes from 'prop-types'
import WordLine from "./WordLine"

const PuzzleBlock = ({ words, goal }) => {
    return (
        <div className='board-container'>
            <div className='board'>
                {words.map((word, index) => (<WordLine key={word.key} word={word} goal={goal} />))}
            </div>
        </div>
    )
}

WordLine.propTypes = { words: PropTypes.array, }

export default PuzzleBlock
