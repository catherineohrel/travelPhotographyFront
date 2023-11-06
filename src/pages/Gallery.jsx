// import underConstruction from "../assets/images/underConstruction.png"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AlbumCards from "../components/AlbumCards"
import "./gallery.scss"

import oneBg from "../assets/images/0305VietnamSapaArea.png"
import twoBg from "../assets/images/20130523-DSC_0863-Hluhluwe Imfolozi Park-Giraffe.png"
import threeBg from "../assets/images/mini-20130524-DSC_1540-Isimangaliso Eastern Wetland Park-Kudu.png"
import fourBg from "../assets/images/underConstruction.png"

gsap.registerPlugin(ScrollTrigger)

const albumGallery = [
  {
    id: 0,
    title: "GALLERY 1",
    color: "#6adeb7",
    imgSrc: oneBg,
    imgName: "Water Buffalo",
  },
  {
    id: 1,
    title: "GALLERY 2",
    color: "#6adeb7",
    imgSrc: twoBg,
    imgName: "Giraffe",
  },
  {
    id: 2,
    title: "GALLERY 3",
    color: "#6adeb7",
    imgSrc: threeBg,
    imgName: "Kudu",
  },
  {
    id: 3,
    title: "GALLERY 4",
    color: "#6adeb7",
    imgSrc: fourBg,
    imgName: "Workers resting",
  },
]


export default function Gallery() {
  let sections = gsap.utils.toArray(".galleryOne")
  
  gsap.to(sections, {
    xPercent: -100 * (sections.length -1),
    ease: "none",
    scrollTrigger: {
      trigger: ".galleryContainer",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => "+=" + document.querySelector(".galleryContainer").offsetWidth
    }
  })
  return (
    <>
      <div className="galleryContainer">
        <section className="galleryOne">
          {albumGallery.map((albumGallery) => {
            return <AlbumCards albumGallery={albumGallery} key={albumGallery.id}/>
          })}
        </section>
      </div>
    </>
  )
}
