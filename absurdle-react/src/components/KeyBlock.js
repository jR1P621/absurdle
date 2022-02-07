
const KeyBlock = ({ letter, onClick }) => {
    // console.log(letter)
    return <h3 className={`letter ${letter.id < 65 ? 'large' : ''}`} onClick={() => onClick(letter.id)}> {letter.char}</h3 >

}

export default KeyBlock
