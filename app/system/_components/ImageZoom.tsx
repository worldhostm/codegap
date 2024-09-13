import React, { useRef, useEffect } from 'react';

interface ImageZoomProps {
  imgSrc: string;
  resultWidth: number;
  resultHeight: number;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ imgSrc, resultWidth, resultHeight }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    const lens = lensRef.current;
    const result = resultRef.current;

    if (!img || !lens || !result) return;

    const cx = result.offsetWidth / lens.offsetWidth;
    const cy = result.offsetHeight / lens.offsetHeight;

    result.style.backgroundImage = `url('${imgSrc}')`;
    result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;

    const moveLens = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const pos = getCursorPos(e, img);
      let x = pos.x - lens.offsetWidth / 2;
      let y = pos.y - lens.offsetHeight / 2;

      if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
      if (x < 0) x = 0;
      if (y > img.height - lens.offsetHeight) y = img.height - lens.offsetHeight;
      if (y < 0) y = 0;

      lens.style.left = `${x}px`;
      lens.style.top = `${y}px`;
      result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    };

    const getCursorPos = (e: MouseEvent | TouchEvent, img: HTMLImageElement) => {
      const a = img.getBoundingClientRect();
      const x = 'touches' in e ? e.touches[0].pageX - a.left : e.pageX - a.left;
      const y = 'touches' in e ? e.touches[0].pageY - a.top : e.pageY - a.top;
      return { x: x - window.pageXOffset, y: y - window.pageYOffset };
    };

    lens.addEventListener('mousemove', moveLens);
    img.addEventListener('mousemove', moveLens);
    lens.addEventListener('touchmove', moveLens);
    img.addEventListener('touchmove', moveLens);

    return () => {
      lens.removeEventListener('mousemove', moveLens);
      img.removeEventListener('mousemove', moveLens);
      lens.removeEventListener('touchmove', moveLens);
      img.removeEventListener('touchmove', moveLens);
    };
  }, [imgSrc]);

  return (
    <div className="relative">
      {/* Original Image */}
      <img ref={imgRef} src={imgSrc} alt="Zoom" className="w-full h-auto" />

      {/* Lens */}
      <div ref={lensRef} className="absolute img-zoom-lens border border-gray-500 absolute w-[200px] h-[200px] bg-white/50 cursor-crosshair" />

      {/* Result Div for zoomed image */}
      <div
        ref={resultRef}
        className="img-zoom-result absolute top-0 right-[-150px] bg-no-repeat"
        style={{
          width: `${resultWidth}px`,
          height: `${resultHeight}px`,
          border: '1px solid #d4d4d4',
        }}
      />
    </div>
  );
};

export default ImageZoom;
