import Image from "next/image";
import ArrowUp from "../_components/arrowUp.jsx";

export default function Entreprise() {
  return (
    <div className="mt-30 w-full">
      <div className="flex mx-auto px-4 md:px-20">
        <div className="flex flex-col max-w-[50%] w-[50%] gap-y-5">
          <h1 className="tacking-wide text-3xl text-center font-bold">Novurba, qu'ès aco ?</h1>
          <Image
            src={`/images/raph.jpg`}
            alt="Image du fondateur de Novurba, Raphaël Sinet"
            width="150"
            height="150"
            preload="true"
            className="object-scale-down text-start col-span z-10 rounded-full mx-auto"
          />
          <p className="tacking-wide font-light max-w-[65%] self-center">
            NOVURBA est une entreprise créée par Raphael SINET, urbaniste
            diplômé de l'Institut d'Urbanisme Régional d'Aix-en-Provence en
            2014. L'ensemble de son parcours professionnel en régions
            Provence-Alpes-Côte d'Azur et Occitanie, au sein de structures
            privées et publiques, l'a mené à une nouvelle réflexion et est
            convaincu aujourd'hui que l'urbanisme et l'aménagement du territoire
            doivent changer de cap. Son expertise se concilie avec ses
            convictions pour un monde plus sobre, résilient et basé sur
            l'équilibre entre l'humain et la nature.
          </p>
        </div>
        <div className="flex flex-col max-w-[50%] w-[50%] gap-y-5">
          <h2 className="text-3xl text-center font-bold">
            Comment nous contacter ?
          </h2>
          {/* téléphone */}
          {/* <div className="flex flex-nowrap gap-x-4 my-2 mx-auto"> */}
          <div className="grid grid-cols-2 w-[40%] mx-auto">
            <div className="flex gap-x-2 items-center text-sm/6 align-self-end">
              <Image
                src="/images/phone-receiver-silhouette.svg"
                alt="Icone de téléphone pour indiquer le numéro de téléphone"
                width="30"
                height="30"
                loading='lazy'
                className="object-scale-down text-start col-span align-self-end"
              />
            </div>
           <a href="tel:+33676382568" className="text-start text-lg select-all align-self-start">+33 676382568</a>
          </div>

          <div className="flex flex-nowrap gap-x-4 my-2 mx-auto">
            <div className="flex gap-x-2 items-center text-sm/6">
              <Image
                src="/images/mail.svg"
                alt="Icone de mail"
                width="30"
                height="30"
                loading='lazy'
                className="object-scale-down text-start col-span"
              />
            </div>
            <a
              href="mailto:raphael.sinet@gmail.com"
              className="text-start text-lg select-all"
            >
             raphael.sinet@gmail.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
