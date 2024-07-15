import trollFace from "../assets/images/troll-face.png"

export default function Header() {
  return (
    <header className="header flex-row">
      <img
        className="header__logo"
        src={trollFace}
        alt="troll face"
        width="32"
        height="28"
      />
      <h1 className="header__title">Meme Generator</h1>
      <p className="header__project-number">Module 3 - Project 01</p>
    </header>
  )
}
