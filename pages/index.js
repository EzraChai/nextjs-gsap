import Image from "next/image"
import arrow from "../public/images/right-arrow.svg"
import firstImage from "../public/images/2019-08-03_02-14-41_UTC_2.jpg"
import secondImage from "../public/images/2020-05-01_05-12-27_UTC_2.jpg"

//  GSAP
import gsap from "gsap"

//  REACT
import { useEffect,useState } from "react"


export default function Home() {

  const [imageLoaded, setImageLoaded] = useState(false);

  let timeline = new gsap.timeline({delay: .8})

  useEffect(() =>{

    if(imageLoaded){
    gsap.to(".hero", {css: {visibility: "visible"}, duration: 0})

    //  IMAGES ANIMATION
    timeline
    .from(".first",{y: 1280, duration:1.2, ease: "power3.out"})
    .from(".first .image-child", {scale: 1.6, ease: "power3.out", duration: 2}, .2)
    .from(".second",{y: 1280, duration:1.2, ease: "power3.out"},.2)
    .from(".second .image-child", {scale: 1.6, ease: "power3.out", duration: 2}, .2)

    //  TEXT ANIMATION
    timeline
    .from(".hero-content-line-inner",{duration: 1, y:44, stagger: .2, ease: "power3.out"},0)
    .from(".text",{y:40 ,duration: 1, opacity: 0, ease: "power3.out"},.8)
    .from(".btn-row",{y:40 ,duration: 1, opacity: 0, ease: "power3.out"},1)
    }
  },[timeline])

  const handleImageLoaded = () => {
    setImageLoaded(true)
  }
  
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner">
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Relieving the burden</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">of disease caused</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p className="text">
                Better treats serious cardiometabolic deseases to transform lives and reduce healthcare utilization through the use of digital therapeutics.
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  Explore
                  <div className="arrow-icon">
                      <Image src={arrow} alt="arrow" />
                  </div>
                  </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" >
              <div className="hero-image first">
                <Image onLoadingComplete={() => handleImageLoaded()} className="first image-child" priority src={firstImage} alt="First Image"></Image>
              </div>
              <div className="hero-image second">
                <Image className="second image-child" priority src={secondImage} alt="Second Image"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
