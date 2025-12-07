import React, { useState, useEffect } from 'react';

interface CarouselImage {
  src: string;
  alt: string;
}

const FullScreenCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const images: CarouselImage[] = [
    { src: '/lovable-uploads/Restored.jpg', alt: 'image 1' },
    { src: '/lovable-uploads/CarouselImg1.jpg', alt: 'image 2' },
  ];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);


  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };


  const goToNext = () => {
    console.log('goToNext clicked');
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };


  const goToPrevious = () => {
    console.log('goToPrevious clicked');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black" data-carousel="true">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 flex items-center justify-center p-8">
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain"
            />
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        data-action="prev"
        className="hidden"
        aria-label="previous image"
      />

      <button
        onClick={goToNext}
        data-action="next"
        className="hidden"
        aria-label="next image"
      />


      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          data-slide={index}
          className="hidden"
          aria-label={`jump to the ${index + 1}th image`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
    </div>
  );
};

export default FullScreenCarousel;
