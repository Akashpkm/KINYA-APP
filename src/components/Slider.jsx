import { useEffect, useRef, useState } from "react";
import "./Slider.css";

import img1 from "../pages/images/HOPE1.png";
import img2 from "../pages/images/PHACO2.png";
import img3 from "../pages/images/ANTERIORVIT.png";
import img4 from "../pages/images/AIRINJ.png";
import img5 from "../pages/images/LIGHTSOURCE.png";

const originalImages = [{
    src: img1,
    name: "HOPE10000 Posterior Vitrectomy System",
  },
  {
    src: img2,
    name: "PHACO Emulsification System",
  },
  {
    src: img3,
    name: "Anterior Vitrectomy System",
  },
  {
    src: img4,
    name: "Air Injection Module",
  },
  {
    src: img5,
    name: "LED Light Source",
  },];

// duplicate first image
const images = [...originalImages, originalImages[0]];

export default function Slider() {

  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  const slideRef = useRef(null);

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);

  }, []);

  useEffect(() => {

    if (current === images.length - 1) {

      const id = setTimeout(() => {

        // Disable animation
        setTransition(false);

        // Jump to first image
        setCurrent(0);

      }, 900);

      return () => clearTimeout(id);
    } else {

      setTransition(true);

    }

  }, [current]);

  return (

    <div className="slider">

      <div
        ref={slideRef}
        className="slides"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: transition ? "transform .8s ease-in" : "none",
          
        }}
      >
        
        {images.map((item, index) => (
  <img
    key={index}
    src={item.src}
    alt={item.name}
    className={index === current ? "active" : ""}
  />
))}
      </div>
      <div className="image-name">
  {originalImages[current % originalImages.length].name}
</div>
    </div>

  );

}