"use client";
import Carousel from "../_components/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";
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
  const [visibleCard1, setVisibleCard1] = useState(false)
  const [visibleCard2, setVisibleCard2] = useState(false)
  const [visibleCard3, setVisibleCard3] = useState(false)

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

  useEffect(() => {
    const cards = document.querySelectorAll(".expertise-card");
    if (!cards.length) return;

    const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("scale-110", entry.isIntersecting);
      });
    },
    { threshold: 0.5 }
  );

  for (const card of cards) {
    observer.observe(card)
  }
  return () => observer.disconnect();

  }, [activeItemIndex]);

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

      <div className="flex flex-wrap mt-15 px-10 sm:gap-x-8 md:gap-x-10 gap-y-12 mx-auto justify-around">
        <div
          id="planification"
          className={`min-h-[672px] scroll-mt-10 expertise-card relative flex flex-col w-[300px] border border-copperfield-400 px-5 py-6 rounded bg-copperfield-50/40 transition-transform duration-300 ease-in-out cursor-pointer ${
            activeCard === "planification" ? "scale-110" : ""
          }`}
          onClick={() => setActiveCard("planification")}
        >
          <h2 className="text-xl font-semibold mb-2 text-copperfield-400 text-copperfield-400">
            Planification / Projet urbain
          </h2>
          <p className="text-justify font-light tracking-wide text-xl mb-8">
            NOVURBA vous accompagne et vous conseille dans vos projets de
            planification (Conseil à la rédaction de vos documents d'urbanisme,
            que cela soit PLU ou cartes communales), et vous accompagne dans la
            réalisation des projets urbains, de l'échelle parcellaire à celle
            d'un territoire, via la réalisation d'études urbaines (diagnostic
            urbain, prospective, études de capacité ...)
          </p>
          <div className="">
            <svg id="Layer_1"className="fill-copperfield-400 h-12 w-12 object-scale-down self-center justify-self-center" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="m12 23c-1.3 0-2.6-.2-3.8-.7-2.2-.8-4.1-2.3-5.4-4.3s-1.9-4.4-1.7-6.7c.2-2.4 1.1-4.6 2.6-6.4s3.6-3.1 5.9-3.6 4.7-.3 6.9.7c.5.2.7.8.5 1.3s-.8.7-1.3.5c-1.8-.8-3.8-1-5.6-.6-2 .4-3.7 1.5-4.9 3-1.3 1.5-2 3.3-2.1 5.3-.1 1.9.4 3.9 1.4 5.5s2.6 2.9 4.4 3.5c1.8.7 3.8.7 5.7.2 1.8-.5 3.5-1.7 4.7-3.2s1.8-3.5 1.8-5.4v-.9c0-.6.4-1 1-1s1 .4 1 1v.8c0 2.4-.8 4.7-2.2 6.6s-3.4 3.3-5.7 4c-1.1.2-2.1.4-3.2.4zm0-8c-.3 0-.5-.1-.7-.3l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3 9.3-9.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-10 10c-.2.2-.4.3-.7.3z"/></g></svg>
            <ul className="mt-6 font-light text-xl gap-x-2 gap-y-2 grid grid-cols-1 px-2 items-center justify-start">
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
          className={`min-h-[672px] scroll-mt-10 expertise-card relative flex flex-col w-[300px] border border-copperfield-400 px-5 py-6 rounded bg-copperfield-50/40 transition-transform duration-300 ease-in-out cursor-pointer ${
            activeCard === "strategie-fonciere" ? "scale-110" : ""
          }`}
          onClick={() => setActiveCard("strategie-fonciere")}
        >
          <div>
            <h2 className="text-xl font-semibold mb-2 text-copperfield-400">Stratégie foncière</h2>
            <p className="text-justify font-light tracking-wide text-xl">
              NOVURBA vous conseille et vous accompagne dans vos projets
              nécessitant le développement d'une stratégie foncière qu'elle soit
              en amont (étude de gisements fonciers, analyse de la dureté
              foncière) ou bien en aval (suivi de procédure d'acquisition,
              mobilisation du foncier ...)
            </p>
          </div>
          <div className="md:absolute md:bottom-6 mt-8 md:mt-0">
            <svg id="Layer_1"className="fill-copperfield-400 h-12 w-12 object-scale-down self-center justify-self-center" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="m12 23c-1.3 0-2.6-.2-3.8-.7-2.2-.8-4.1-2.3-5.4-4.3s-1.9-4.4-1.7-6.7c.2-2.4 1.1-4.6 2.6-6.4s3.6-3.1 5.9-3.6 4.7-.3 6.9.7c.5.2.7.8.5 1.3s-.8.7-1.3.5c-1.8-.8-3.8-1-5.6-.6-2 .4-3.7 1.5-4.9 3-1.3 1.5-2 3.3-2.1 5.3-.1 1.9.4 3.9 1.4 5.5s2.6 2.9 4.4 3.5c1.8.7 3.8.7 5.7.2 1.8-.5 3.5-1.7 4.7-3.2s1.8-3.5 1.8-5.4v-.9c0-.6.4-1 1-1s1 .4 1 1v.8c0 2.4-.8 4.7-2.2 6.6s-3.4 3.3-5.7 4c-1.1.2-2.1.4-3.2.4zm0-8c-.3 0-.5-.1-.7-.3l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3 9.3-9.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-10 10c-.2.2-.4.3-.7.3z"/></g></svg>

            <ul className="mt-6 font-light text-xl gap-x-2 gap-y-2 grid grid-cols-1 px-2 items-center justify-start">
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
          className={`min-h-[672px] scroll-mt-10 expertise-card relative flex flex-col w-[300px] border border-copperfield-400 px-5 py-6 rounded bg-copperfield-50/40 transition-transform duration-300 ease-in-out cursor-pointer ${
            activeCard === "cartographie" ? "scale-110" : ""
          }`}
          onClick={() => setActiveCard("cartographie")}
        >
          <div>
            <h2 className="text-xl font-semibold mb-2 text-copperfield-400">Cartographie</h2>
            <p className="text-justify font-light tracking-wide text-xl">
              NOVURBA propose de vous accompagner dans la réalisation de
              cartographies, plans et schémas divers dans tous vos projets, de
              la planification à la stratégie foncière en passant par le projet
              urbain.
            </p>
          </div>
          <div className="md:absolute md:bottom-6 mt-8 md:mt-0">
            <svg id="Layer_1"className="fill-copperfield-400 h-12 w-12 object-scale-down self-center justify-self-center" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="m12 23c-1.3 0-2.6-.2-3.8-.7-2.2-.8-4.1-2.3-5.4-4.3s-1.9-4.4-1.7-6.7c.2-2.4 1.1-4.6 2.6-6.4s3.6-3.1 5.9-3.6 4.7-.3 6.9.7c.5.2.7.8.5 1.3s-.8.7-1.3.5c-1.8-.8-3.8-1-5.6-.6-2 .4-3.7 1.5-4.9 3-1.3 1.5-2 3.3-2.1 5.3-.1 1.9.4 3.9 1.4 5.5s2.6 2.9 4.4 3.5c1.8.7 3.8.7 5.7.2 1.8-.5 3.5-1.7 4.7-3.2s1.8-3.5 1.8-5.4v-.9c0-.6.4-1 1-1s1 .4 1 1v.8c0 2.4-.8 4.7-2.2 6.6s-3.4 3.3-5.7 4c-1.1.2-2.1.4-3.2.4zm0-8c-.3 0-.5-.1-.7-.3l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3 9.3-9.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-10 10c-.2.2-.4.3-.7.3z"/></g></svg>

            <ul className="mt-6 font-light text-xl gap-x-2 gap-y-2 grid grid-cols-1 px-2 items-center justify-start">
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
