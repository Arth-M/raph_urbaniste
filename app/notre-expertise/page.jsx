"use client";
import Carousel from "../_components/carousel";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import ArrowUp from "../_components/arrowUp.jsx";

export default function Expertise() {
  const carouselData = [
    {
      image: "planification.jpg",
      text: "Planification / Projet urbain",
      ref: "planification",
    },
    {
      image: "strat_fonciere.png",
      text: "Stratégie foncière",
      ref: "strategie-fonciere",
    },
    {
      image: "cartographie.jpg",
      text: "Cartographie",
      ref: "cartographie",
    },
  ];

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    function handleClickOutside(e) {
      // If no card is active, nothing to do
      if (!activeCard) return;

      // If card is clicked, keep it open
      if (e.target.closest(".expertise-card")) return;

      // Otherwise → close it
      setActiveCard(null);
    }

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [activeCard]);

  return (
    <div className="mt-10 md:mt-15 w-full">
      <div className=" w-[90%] md:w-[800px] md:h-[533px] mx-auto rounded-xl">
        <Carousel
          activeItemIndex={activeItemIndex}
          setActiveItemIndex={setActiveItemIndex}
          carouselData={carouselData}
           setActiveCard={setActiveCard}
           activeCard={activeCard}
        />
      </div>

      <div className="flex flex-wrap mt-15 md:px-30 px-5 gap-y-12 mx-auto justify-around">
        <div
          id="planification"
          className={`min-h-[672px] scroll-mt-10 expertise-card relative flex flex-col w-[300px] border border-copperfield-200/20 px-5 py-6 rounded bg-copperfield-200/20 transition-transform duration-300 cursor-pointer ${
            activeCard === "planification" ? "scale-110" : ""
          }`}
          onClick={() => setActiveCard("planification")}
          >
          <h2 className="text-xl font-semibold mb-2">
            Planification / Projet urbain
          </h2>
          <p className="text-justify font-light tracking-wide text-lg mb-8">
            NOVURBA vous accompagne et vous conseille dans vos projets de
            planification (Conseil à la rédaction de vos documents d'urbanisme,
            que cela soit PLU ou cartes communales), et vous accompagne dans la
            réalisation des projets urbains, de l'échelle parcellaire à celle
            d'un territoire, via la réalisation d'études urbaines (diagnostic
            urbain, prospective, études de capacité ...)
          </p>
          <div className="">
            <Image
                src="/images/check-circle.svg"
                alt="Icone de téléphone pour indiquer le numéro de téléphone"
                width="50"
                height="50"
                loading='lazy'
                className="object-scale-down text-start justify-self-center"
              />
          <ul className="mt-6 font-light text-lg gap-x-2 gap-y-2 grid grid-cols-1 px-2 items-center justify-start">
            <li>Etudes urbaines spécifiques</li>
            <li>Etudes pré-opérationnelles</li>
            <li>Conseil en planification (PLU/ CC)</li>
            <li>Prospective urbaine</li>
            <li>Diagnostic urbain</li>
          </ul>
          </div>
        </div>
        <div
          id="strategie-fonciere"
          className={`min-h-[672px] scroll-mt-10 expertise-card relative flex flex-col justify-between w-[300px] border border-copperfield-200/20 px-5 py-6 rounded bg-copperfield-200/20 transition-transform duration-300 cursor-pointer ${
            activeCard === "strategie-fonciere" ? "scale-110" : ""
          }`}
          onClick={() => setActiveCard("strategie-fonciere")}
          >
            <div>
          <h2 className="text-xl font-semibold mb-2">Stratégie foncière</h2>
          <p className="text-justify font-light tracking-wide text-lg">
            NOVURBA vous conseille et vous accompagne dans vos projets
            nécessitant le développement d'une stratégie foncière qu'elle soit
            en amont (étude de gisements fonciers, analyse de la dureté
            foncière) ou bien en aval (suivi de procédure d'acquisition,
            mobilisation du foncier ...)
          </p>
          </div>
          <div className="md:absolute md:bottom-6 mt-8 md:mt-0">
            <Image
                src="/images/check-circle.svg"
                alt="Icone de téléphone pour indiquer le numéro de téléphone"
                width="50"
                height="50"
                loading='lazy'
                className="object-scale-down text-start justify-self-center"
              />
          <ul className="mt-6 font-light text-lg gap-x-2 gap-y-2 grid grid-cols-1 px-2 items-center justify-start">
            <li>Analyse des gisements fonciers</li>
            <li>Analyse de la dureté foncière</li>
            <li>Analyse de la mutabilité foncière</li>
            <li>Etudes de densification foncière</li>
            <li>Politique ZAN</li>
          </ul>
          </div>
        </div>
        <div
          id="cartographie"
          className={`min-h-[570px]  scroll-mt-10 expertise-card relative flex flex-col justify-between w-[300px] border border-copperfield-200/20 px-5 py-6 rounded bg-copperfield-200/20 transition-transform duration-300 cursor-pointer ${
            activeCard === "cartographie" ? "scale-110" : ""
          }`}
          onClick={() => setActiveCard("cartographie")}
          >
            <div>
          <h2 className="text-xl font-semibold mb-2">Cartographie</h2>
          <p className="text-justify font-light tracking-wide text-lg">
            NOVURBA propose de vous accompagner dans la réalisation de
            cartographies, plans et schémas divers dans tous vos projets, de la
            planification à la stratégie foncière en passant par le projet
            urbain.
          </p>
          </div>
          <div className="md:absolute md:bottom-6 mt-8 md:mt-0">
            <Image
                src="/images/check-circle.svg"
                alt="Icone de téléphone pour indiquer le numéro de téléphone"
                width="50"
                height="50"
                loading='lazy'
                className="object-scale-down text-start justify-self-center"
              />
          <ul className="mt-6 font-light text-lg gap-x-2 gap-y-2 grid grid-cols-1 px-2 items-center justify-start">

            <li>Cartographie SIG</li>

            <li>Cartographie en dessin vectoriel</li>

            <li>Réalisations de schémas et plans</li>

            <li>Montage d'atlas cartographiques</li>

            <li className="hidden lg:block lg:invisible"> coucou</li>
          </ul>
          </div>
        </div>
      </div>
      <ArrowUp />
    </div>
  );
}
