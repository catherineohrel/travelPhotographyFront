import "./albumCards.scss"

export default function AlbumCards(props) {
  return (
    <>
    <div className="AlbumCardsContainer">
      <img className="albumImg"
      src={props.albumGallery.imgSrc}
      alt={props.albumGallery.imgName}
      />
      <h1 className="albumTitle">
        {props.albumGallery.title}
      </h1>
    </div>
    </>
  )
}

