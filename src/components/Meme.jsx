export default function Meme() {
  return (
    <main className="container container--main">
      <form className="form">
        <div>
          <label htmlFor="top_text">Top Text</label>
          <input className="form__input" id="top_text" type="text" />
        </div>
        <div>
          <label htmlFor="bottom_text">Bottom Text</label>
          <input className="form__input" id="bottom_text" type="text" />
        </div>
        <button className="form__button" type="button">
          Get a New Meme Image
        </button>
      </form>
      <img className="meme-img" src="" alt="" width={100} height={200} />
    </main>
  )
}
