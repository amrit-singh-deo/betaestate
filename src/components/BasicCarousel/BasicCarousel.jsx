import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import "./basic.css";
import images from "../../data/image";

const BasicCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images[0].map((item) => (
            <div className="embla__slide" key={item.id}>
              <div className="embla__slide__image relative">
                <img
                  className="w-full aspect-video rounded-2xl"
                  src={item.imageUrl}
                />
                <div className="flex items-center justify-center absolute text-xl w-full rounded-2xl aspect-video">
                  <span className="text-2xl font-bold transition duration-200">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons px-2 lg:px-0">
          <PrevButton
            className="bg-black/10 flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm cursor-pointer"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            className="bg-black/10 flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm cursor-pointer"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </section>
  );
};

export default BasicCarousel;
