import React, { useState, useEffect } from 'react';

export interface ImageArr {
    src:string;
    caption:string;
} 
export interface Slide {
  imgArr : ImageArr[]
}

// const slidesData: Slide[] = [
//   { src: '/sample/sample_images_00.png', caption: 'Caption One' },
//   { src: '/sample/sample_images_01.png', caption: 'Caption Two' },
//   { src: '/sample/sample_images_02.png', caption: 'Caption Three' },
// ];

const Slider = ({imgArr}:Slide) => {
  const [slideIndex, setSlideIndex] = useState(1);

  // Show the current slide and update every time slideIndex changes
  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const showSlides = (n: number) => {
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;

    if (n > slides.length) setSlideIndex(1);
    if (n < 1) setSlideIndex(slides.length);

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  };

  const plusSlides = (n: number) => {
    setSlideIndex((prevIndex) => prevIndex + n);
  };

  const currentSlide = (n: number) => {
    setSlideIndex(n);
  };

  return (
    <div className="slideshow-container w-full h-[500px] relative max-w-4xl mx-auto object-cover">
      {imgArr.map((slide, index) => (
        <div key={index} className="mySlides fade hidden">
          <div className="numbertext absolute top-0 left-0 p-2 text-white">{index + 1} / {imgArr.length}</div>
          <img src={slide.src} alt={slide.caption} className="w-full object-cover" />
          <div className="text absolute bottom-0 w-full text-center text-white p-4 bg-opacity-50 bg-black">{slide.caption}</div>
        </div>
      ))}

      {/* Next and previous buttons */}
      <a className="prev absolute top-1/2 left-0 px-4 py-2 text-white font-bold text-2xl cursor-pointer bg-opacity-50 bg-black hover:bg-opacity-70" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="next absolute top-1/2 right-0 px-4 py-2 text-white font-bold text-2xl cursor-pointer bg-opacity-50 bg-black hover:bg-opacity-70" onClick={() => plusSlides(1)}>&#10095;</a>

      {/* Dots */}
      <div className="flex justify-center mt-4">
        {imgArr.map((_, index) => (
          <span
            key={index}
            className="dot h-4 w-4 bg-gray-400 rounded-full mx-2 cursor-pointer hover:bg-gray-600"
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
