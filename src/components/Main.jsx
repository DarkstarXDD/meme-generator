import React, { useId } from "react"

export default function Main() {
  const formId = useId()

  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((jsonData) => setAllMemes(jsonData.data.memes))
  }, [])

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  })

  function getNewMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const currentMemeURL = allMemes[randomNumber].url
    return currentMemeURL
  }

  function handleChange(event) {
    const { name, value } = event.target

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
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
          <label htmlFor={formId + "top_text"} className="form__label">
            Top Text
          </label>
          <input
            type="text"
            id={formId + "top_text"}
            name="topText"
            onChange={handleChange}
            className="form__input"
          />
        </div>
        <div className="form__input-wrapper flex-column">
          <label htmlFor={formId + "bottom_text"} className="form__label">
            Bottom Text
          </label>
          <input
            type="text"
            id={formId + "bottom_text"}
            name="bottomText"
            onChange={handleChange}
            className="form__input"
          />
        </div>
        <button
          type="button"
          className="form__button"
          onClick={handleMouseClick}
        >
          Get a New Meme Image
        </button>
      </form>
      <div className="meme">
        <p className="meme__text meme__text-top">{meme.topText}</p>
        <p className="meme__text meme__text-bottom">{meme.bottomText}</p>
        <img
          className="meme-img"
          src={meme.randomImage}
          alt=""
          width="100"
          height="100"
        />
      </div>
    </main>
  )
}
