"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Carousel({
  activeItemIndex,
  setActiveItemIndex,
  carouselData,
  setActiveCard,
  activeCard
}) {
  let previousImage = 0;
  let nextImage = 0;

  previousImage =
    activeItemIndex === 0 ? carouselData.length - 1 : activeItemIndex - 1;

  nextImage =
    activeItemIndex === carouselData.length - 1 ? 0 : activeItemIndex + 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveItemIndex(
        activeItemIndex === carouselData.length - 1 ? 0 : activeItemIndex + 1
      );
    }, 2500);

    return () => clearTimeout(timer);
  }, [activeItemIndex, carouselData.length, setActiveItemIndex]);

  return (
    <div className="relative w-full bg-transparent h-full rounded-xl">
      <div className="z-10 w-full h-full my-auto absolute flex items-center justify-items-center px-1 md:px-5 justify-between">
        <button
          className="w-[30px] h-[30px] rounded-full bg-black/30 text-white grid place-items-center hover:bg-black/50"
          onClick={() => {
            setActiveItemIndex(previousImage);
          }}
        >
          <IoIosArrowBack />
        </button>
        <h2 className="pb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-4xl font-semibold tracking-wide text-center text-white ">
          {`${carouselData[activeItemIndex].text}`}
        </h2>
        <button
          className="w-[30px] h-[30px] rounded-full bg-black/15 text-white grid place-items-center hover:bg-black/40"
          onClick={() => {
            setActiveItemIndex(nextImage);
          }}
        >
          <IoIosArrowForward />
        </button>
      </div>

      <div className="w-full h-full relative">
        <span className="z-80 absolute top-1/6 left-2/11 w-2/3 h-2/3">
          <a
            href={`#${carouselData[activeItemIndex].ref}`}
            className="z-90 h-full w-full block"
            onClick={(e) => {
              e.stopPropagation();
              setActiveCard(carouselData[activeItemIndex].ref); // activate card
            }}
          ></a>
        </span>
        <Image
          src={`/images/${carouselData[activeItemIndex].image}`}
          alt="Images de cartographie, stratégie foncière, et planification"
          width={800}
          height={533}
          preload={true}
          className="object-scale-down z-0 object-center w-full h-full rounded-xl"
        />
      </div>
    </div>
  );
}
