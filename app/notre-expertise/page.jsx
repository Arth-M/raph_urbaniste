"use client";
import Carousel from "../_components/carousel";
import { useRef, useState } from "react";

export default function Expertise() {
  const carouselData = [
    {
      image: "planification.jpg",
      text: "Planification / Projet urbain",
    },
    {
      image: "cadastre.png",
      text: "Stratégie foncière",
    },
    {
      image: "cartographie.jpg",
      text: "Cartographie",
    },
  ];

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <div className="mt-10 md:mt-15 w-full">
      <div className=" w-[90%] md:w-[800px] md:h-[533px] mx-auto rounded-xl">
        <Carousel
          activeItemIndex={activeItemIndex}
          setActiveItemIndex={setActiveItemIndex}
          carouselData={carouselData}
        />
      </div>

      <div className="flex flex-wrap mt-10 md:px-30 px-5 gap-y-6 mx-auto justify-around">
        <div className="flex flex-col md:w-[250px] min-w-[250px]">
          <h2 className="text-xl font-semibold mb-2">Planification / Projet urbain</h2>
          <p className="text-justify font-light tracking-wide text-lg">
            NOVURBA vous accompagne et vous conseille dans vos projets de
            planification (Conseil à la rédaction de vos documents d'urbanisme,
            que cela soit PLU ou cartes communales), et vous accompagne dans la
            réalisation des projets urbains, de l'échelle parcellaire à celle
            d'un territoire, via la réalisation d'études urbaines (diagnostic
            urbain, prospective, études de capacité ...)
          </p>
        </div>
        <div className="flex flex-col md:w-[250px] min-w-[250px]">
          <h2 className="text-xl font-semibold mb-2">Stratégie foncière</h2>
          <p className="text-justify font-light tracking-wide text-lg">
            NOVURBA vous conseille et vous accompagne dans vos projets
            nécessitant le développement d'une stratégie foncière qu'elle soit
            en amont (étude de gisements fonciers, analyse de la dureté
            foncière) ou bien en aval (suivi de procédure d'acquisition,
            mobilisation du foncier ...)
          </p>
        </div>
        <div className="flex flex-col md:w-[250px] min-w-[250px]">
          <h2 className="text-xl font-semibold mb-2">Cartographie</h2>
          <p className="text-justify font-light tracking-wide text-lg">
            NOVURBA propose de vous accompagner dans la réalisation de
            cartographies, plans et schémas divers dans tous vos projets, de la
            planification à la stratégie foncière en passant par le projet
            urbain.
          </p>
        </div>
      </div>
    </div>
  );
}
