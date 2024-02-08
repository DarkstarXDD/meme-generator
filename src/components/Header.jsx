export default function Header() {
  return (
    <header className="container container--header flex-row">
      <img
        className="logo"
        src="./troll-face.png"
        alt="troll face"
        width={126}
        height={105}
      ></img>
      <p className="title">Meme Generator</p>
      <p className="project-name">Module 3 - Project 01</p>
    </header>
  )
}
