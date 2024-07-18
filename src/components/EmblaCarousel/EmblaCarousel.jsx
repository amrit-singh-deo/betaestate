import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import images from "../../data/image";

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  return (
    <section className="emblaf">
      <div className="embla__viewportf" ref={emblaRef}>
        <div className="embla__containerf">
          {images[0].map((item) => (
            <div className="embla__slidef" key={item.id}>
              <img className="embla__slide__imagef" src={item.imageUrl} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
