import Image from "next/image";
import ArrowUp from "../_components/arrowUp.jsx";

export default function Entreprise() {
  return (
    <div className="mt-15 md:mt-20 w-full">
      <div className="flex flex-wrap mx-auto px-4 md:px-20">
        <div className="flex flex-col md:max-w-[50%] md:w-[50%] gap-y-4 md:gap-y-5 mb-8">
          <h1 className="tacking-wide text-3xl text-center font-bold">
            Novurba, qu'ès aco ?
          </h1>
          <Image
            src={`/images/raph.jpg`}
            alt="Image du fondateur de Novurba, Raphaël Sinet"
            width={150}
            height={150}
            preload={true}
            className="object-scale-down text-start col-span z-10 rounded-full mx-auto"
          />
          <p className="tacking-wide font-light text-lg pt-1 px-5 md:max-w-[70%] md:p-1 self-center">
            NOVURBA est une entreprise créée par Raphael SINET, urbaniste
            diplômé de l'Institut d'Urbanisme Régional d'Aix-en-Provence en
            2014. L'ensemble de son parcours professionnel en régions
            Provence-Alpes-Côte d'Azur et Occitanie, au sein de structures
            privées et publiques, l'a mené à une nouvelle réflexion et il est
            convaincu aujourd'hui que l'urbanisme et l'aménagement du territoire
            doivent changer de cap. Son expertise se concilie avec ses
            convictions pour un monde plus sobre, résilient et basé sur
            l'équilibre entre l'humain et la nature.
          </p>
        </div>

        <div className="flex flex-col md:max-w-[50%] md:w-[50%] mx-auto gap-y-3 md:gap-y-5 mb-8 mt-5 md:mt-0">
          <h2 className="text-3xl text-center font-bold mb-7">
            Comment nous contacter ?
          </h2>
          {/* téléphone */}
          {/* <div className="flex flex-nowrap gap-x-4 my-2 mx-auto"> */}
          <div className="grid grid-cols-[1fr_3fr] w-[80%] mx-auto md:w-[40%] gap-x-3 gap-y-5">
            <div className="flex gap-x-2 justify-end relative">
              <Image
                src="/images/phone-receiver-silhouette.svg"
                alt="Icone de téléphone pour indiquer le numéro de téléphone"
                width="30"
                height="30"
                loading={lazy}
                className="absolute animate-[ping_700ms_ease-in-out_1_500ms] object-scale-down text-start col-span align-self-end"
              />
              <Image
                src="/images/phone-receiver-silhouette.svg"
                alt="Icone de téléphone pour indiquer le numéro de téléphone"
                width="30"
                height="30"
                loading={lazy}
                className="duration-700 object-scale-down text-start col-span align-self-end"
              />
            </div>
            <a
              href="tel:+33665728130"
              className="text-start text-lg select-all align-self-start"
            >
              +33 6-65-72-81-30

            </a>

            <div className="flex gap-x-2 justify-end relative">
              <Image
                src="/images/mail.svg"
                alt="Icone de téléphone pour indiquer le numéro de téléphone"
                width="30"
                height="30"
                loading={lazy}
                className="absolute animate-[ping_700ms_ease-in-out_1_1100ms] object-scale-down text-start col-span align-self-end"
              />
              <Image
                src="/images/mail.svg"
                alt="Icone de téléphone pour indiquer le numéro de téléphone"
                width="30"
                height="30"
                loading={lazy}
                className=" object-scale-down text-start col-span align-self-end"
              />
            </div>
            <a
              href="mailto:raphael.sinet@novurba.fr"
              className="text-start text-lg select-all align-self-start"
            >
              raphael.sinet@novurba.fr
            </a>

            <div className="flex gap-x-2 justify-end relative">
              <a
                href="https://www.linkedin.com/company/novurba/"
                target="_blank"
                rel="noopener noreferrer"
                title="Voir le profil LinkedIn de Raphaël Sinet"
              >
                <svg
                  className="w-7 h-7 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2 21h6V9H2v12ZM8.5 21h5.5v-6.6c0-1.5.3-2.9 2-2.9 1.7 0 1.7 1.4 1.7 2.8V21H24v-7.1c0-4-2.1-5.9-5-5.9-2.3 0-3.3 1.3-3.8 2.2h.1V9H8.5c.1 1.2 0 12 0 12Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">LinkedIn profile</span>
              </a>
            <div className="flex gap-x-2 justify-end absolute animate-[ping_700ms_ease-in-out_1_1800ms]">
              <a
                href="https://www.linkedin.com/company/novurba/"
                target="_blank"
                rel="noopener noreferrer"
                title="Voir le profil LinkedIn de Raphaël Sinet"
              >
                <svg
                  className="w-7 h-7 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2 21h6V9H2v12ZM8.5 21h5.5v-6.6c0-1.5.3-2.9 2-2.9 1.7 0 1.7 1.4 1.7 2.8V21H24v-7.1c0-4-2.1-5.9-5-5.9-2.3 0-3.3 1.3-3.8 2.2h.1V9H8.5c.1 1.2 0 12 0 12Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">LinkedIn profile</span>
              </a>
            </div>
            </div>
            <a
              href="https://www.linkedin.com/company/novurba/"
              className="text-start text-lg select-all align-self-start"
              target="_blank"
            >
              company/novurba/
            </a>
          </div>
        </div>
      </div>


      <h2 className="text-xl text-center font-bold uppercase mt-15 mb-6">
        Références professionnelles
      </h2>
      <div className="flex flex-col gap-y-4 items-center w-full px-5 md:max-w-[70%] mx-auto text-lg">
        <p className="text-center">
          Cabinet LUYTON (TOULON) - Planification et urbanisme pré-opérationnel
        </p>
        <hr className="text-copperfield-400 w-[40%] md:hidden"/>
        <p className="text-center">ALTEREO (VENELLES) - Planification</p>
        <hr className="text-copperfield-400 w-[40%] md:hidden"/>
        <p className="text-center">
          LKSPATIALIST (MONTPELLIER) - Expertise en planification et
          développement de nouvelles technologies liées au domaine de
          l'aménagement
        </p>
        <hr className="text-copperfield-400 w-[40%] md:hidden"/>
        <p className="text-center">METROPOLE de MONTPELLIER - Projet urbain</p>
        <hr className="text-copperfield-400 w-[40%] md:hidden"/>
        <p className="text-center">
          EPF OCCITANIE (MONTPELLIER) - Projets et stratégie fonciers /
          Négociation
        </p>

      </div>

      <h2 className="text-xl text-center font-bold uppercase mt-15 mb-6">
        Études achevées ou en cours
      </h2>
      <div className="flex flex-col gap-y-4 items-center max-w-[70%] mx-auto text-lg">
        <p className="text-center">Plans Locaux d’Urbanisme de trois communes gardoises – En cours</p>
        <p className="text-center">Etude urbaine pour MONTPELLIER MEDITERRANEE METROPOLE – 2024/2026</p>
        <p className="text-center">
          Diverses missions réglementaires et SIG en appui de bureaux d'études.
        </p>
        <p className="text-center">Plan Local d'Urbanisme de QUISSAC (Gard) - Achevée en 2024</p>
      </div>
      <ArrowUp />
    </div>
  );
}
