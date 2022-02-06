import { useState } from 'react'
import { useEffect } from 'react'
import KeyBoard from './components/KeyBoard'
import PuzzleBlock from './components/PuzzleBlock'
import { COMMON, WORDS } from './Words'
import Header from './components/Header'
import LetterBlock from './components/LetterBlock'
import HelpBox from './components/HelpBox'

const gameLength = 6
const guesses = []
const wordSize = 5

function App() {

  const getGoals = (count, length) => {
    // console.log(COMMON)
    let goalsPossible = COMMON.filter((word) => (word.length === length))
    let goalsShuffled = goalsPossible.sort(() => 0.5 - Math.random())
    return goalsShuffled.slice(0, count)
  }

  const populateWords = () => {
    let words = []
    guesses.forEach(guess => {
      words.push({ key: words.length, word: guess, locked: true, current: false })
    })
    // setCurrentWord(words.length)
    words.push({ key: words.length, word: '', locked: false, current: true })
    for (var i = words.length; i < gameLength; i++) {
      words.push({ key: words.length, word: '', locked: false, current: false })
    }
    return words
  }
  const populateLetters = () => {
    let letters = []
    for (let c of 'QWERTYUIOPASDFGHJKLZXCVBNM') {
      letters.push({ id: c.charCodeAt(0), char: c })
    }
    return letters
  }

  const [goals, setGoals] = useState(getGoals(gameLength, wordSize))
  const [words, setWords] = useState(populateWords())
  const [letters, setKeys] = useState(populateLetters())
  const [currentWord, setCurrentWord] = useState(words.findIndex((word) => { return word.current }))
  const [gameover, setGameover] = useState(currentWord >= gameLength)
  const [helpBox, setHelpBox] = useState(false)

  //add letter
  const addLetter = (char) => {
    if (words[currentWord].word.length < wordSize) {
      words[currentWord].word += char
    }
    setWords([...words])
  }
  //delete letter
  const deleteLetter = () => {
    if (words[currentWord].word.length > 0) {
      words[currentWord].word = words[currentWord].word.substring(0, words[currentWord].word.length - 1)
    }
    setWords([...words])
  }

  //process word
  const processWord = () => {
    if (words[currentWord].word.length === wordSize && WORDS.includes(words[currentWord].word)) {
      if (words[currentWord].word === goals[currentWord]) {
        setGameover(true)
        words[currentWord].locked = true
        setWords([...words])
        return
      }
      words[currentWord].locked = true
      words[currentWord].current = false
      var newCurrent = currentWord + 1
      if (newCurrent < words.length) {
        setCurrentWord(newCurrent)
        words[newCurrent].current = true
        // console.log(goals[newCurrent])  //for debugging
      } else {
        setWords([...words])
        setGameover(true)
      }
    }
  }

  //simulate keypress
  const keyPress = (code) => {
    if (gameover)
      return
    if (code >= 65 && code <= 90) {
      addLetter(String.fromCharCode(code))
    } else if (code === 8) {
      deleteLetter()
    } else if (code === 13) {
      processWord()
    }
  }

  const toggleHelp = () => {
    setHelpBox(!helpBox)
  }

  const resetGame = () => {
    setGoals(getGoals(gameLength, wordSize))
    setWords(populateWords())
    setCurrentWord(guesses.length)
    setGameover(false)
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      keyPress(event.keyCode)
    }
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  })

  return (
    <div className='container'>
      <div className="game" >
        <Header title='absurdle' reset={gameover} helpBox={toggleHelp} reset={resetGame}></Header>
        <PuzzleBlock words={words} goal={goals[currentWord]} />
        <KeyBoard letters={letters} onClick={keyPress} />
      </div>
      {/* <HelpBox /> */}
    </div>
  )
}

export default App
