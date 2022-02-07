import KeyRow from "./KeyRow"

const KeyBoard = ({ letters, onClick }) => {
    return <div className="keyboard">
        <KeyRow key={0} onClick={onClick} letters={letters.filter(letter => "QWERTYUIOP".includes(letter.char))} />
        <KeyRow key={1} onClick={onClick} letters={letters.filter(letter => "ASDFGHJKL".includes(letter.char))} />
        <KeyRow key={2} onClick={onClick} letters={[{ id: 13, char: "ENTER" },
        ...letters.filter(letter => "ZXCVBNM".includes(letter.char)),
        { id: 8, char: "\u232B" },]} />
    </div>
}

export default KeyBoard
