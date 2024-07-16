import React from "react"
import memesData from "../data/memesData"

export default function Meme() {
  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  const memesArray = allMemeImages.data.memes
  let randomNumber = Math.floor(Math.random() * memesArray.length)

  const [meme, setMeme] = React.useState({
    top_text: "",
    bottom_text: "",
    randomImage: memesArray[randomNumber].url,
  })

  function getNewMeme() {
    randomNumber = Math.floor(Math.random() * memesArray.length)
    const currentMemeURL = memesArray[randomNumber].url
    return currentMemeURL
  }

  function handleMouseClick() {
    const newMemeURL = getNewMeme()
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: newMemeURL,
      }
    })
  }

  return (
    <main className="main flex-column">
      <form className="form">
        <div className="form__input-wrapper flex-column">
          <label className="form__label" htmlFor="top_text">
            Top Text
          </label>
          <input className="form__input" id="top_text" type="text" />
        </div>
        <div className="form__input-wrapper flex-column">
          <label className="form__label" htmlFor="bottom_text">
            Bottom Text
          </label>
          <input className="form__input" id="bottom_text" type="text" />
        </div>
        <button
          className="form__button"
          type="button"
          onClick={handleMouseClick}
        >
          Get a New Meme Image
        </button>
      </form>
      <img
        className="meme-img"
        src={meme.randomImage}
        alt=""
        width="100"
        height="100"
      />
    </main>
  )
}
