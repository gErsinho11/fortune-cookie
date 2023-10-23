import getRandomFromArr from "../services/getRandomFromArr"
import bgArr from '../utils/bgArr.json'
import phrases from "../utils/phrases.json"

const ButtonPhrase = ({ setPhraseRandom, setBgApp }) => {
  
  const handleChangePhrase = () => {
    const quote = getRandomFromArr(phrases)
    setPhraseRandom(quote)
    setBgApp(getRandomFromArr(bgArr))
  }

  return (
    <button 
      className="app__btn" 
      onClick={handleChangePhrase}
    >
      Ver otro
    </button>
  )
}

export default ButtonPhrase