import KeyBlock from "./KeyBlock"

const KeyRow = ({ letters, onClick }) => {
    // console.log(letters)
    return <div className="key-row">
        {letters.map((letter) => (<KeyBlock key={letter.id} letter={letter} onClick={onClick}></KeyBlock>))}
    </div>
}

export default KeyRow
