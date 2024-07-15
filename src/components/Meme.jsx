import React from "react"
import memesData from "../data/memesData"

export default function Meme() {
  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  const [meme, setMeme] = React.useState({
    top_text: "",
    bottom_text: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  })

  function getNewMeme() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const currentMeme = memesArray[randomNumber]
    const url = currentMeme.url
    return url
  }

  function handleMouseClick() {
    const newMeme = getNewMeme()
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: newMeme,
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
