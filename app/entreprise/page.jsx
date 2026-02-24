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
          <p className="text-justify font-light text-xl pt-1 px-5 md:max-w-[70%] md:p-1 self-center">
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

              <a
              href="tel:+33665728130"
              className=""
              >

                <svg
                    viewBox="0 0 25.625 25.625"  xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve" className="absolute h-8 w-8 fill-copperfield-400 animate-[ping_700ms_ease-in-out_1_500ms] object-scale-down text-start col-span align-self-end">
                  <g>
                    <path d="M22.079,17.835c-1.548-1.324-3.119-2.126-4.648-0.804l-0.913,0.799
                      c-0.668,0.58-1.91,3.29-6.712-2.234C5.005,10.079,7.862,9.22,8.531,8.645l0.918-0.8c1.521-1.325,0.947-2.993-0.15-4.71l-0.662-1.04
                      C7.535,0.382,6.335-0.743,4.81,0.58L3.986,1.3C3.312,1.791,1.428,3.387,0.971,6.419c-0.55,3.638,1.185,7.804,5.16,12.375
                      c3.97,4.573,7.857,6.87,11.539,6.83c3.06-0.033,4.908-1.675,5.486-2.272l0.827-0.721c1.521-1.322,0.576-2.668-0.973-3.995
                      L22.079,17.835z"/>
                  </g>
                </svg>
                <svg
                    viewBox="0 0 25.625 25.625"  xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve" className="h-8 w-8 fill-copperfield-400 object-scale-down text-start col-span align-self-end">
                  <g>
                    <path d="M22.079,17.835c-1.548-1.324-3.119-2.126-4.648-0.804l-0.913,0.799
                      c-0.668,0.58-1.91,3.29-6.712-2.234C5.005,10.079,7.862,9.22,8.531,8.645l0.918-0.8c1.521-1.325,0.947-2.993-0.15-4.71l-0.662-1.04
                      C7.535,0.382,6.335-0.743,4.81,0.58L3.986,1.3C3.312,1.791,1.428,3.387,0.971,6.419c-0.55,3.638,1.185,7.804,5.16,12.375
                      c3.97,4.573,7.857,6.87,11.539,6.83c3.06-0.033,4.908-1.675,5.486-2.272l0.827-0.721c1.521-1.322,0.576-2.668-0.973-3.995
                      L22.079,17.835z"/>
                  </g>
                </svg>
              </a>
            </div>
            <a
              href="tel:+33665728130"
              className="text-start text-copperfield-400 text-xl select-all align-self-start"
            >
              +33 6-65-72-81-30
            </a>

            <div className="flex gap-x-2 justify-end relative">
              <a
              href="mailto:raphael.sinet@novurba.fr"
              className=""
            >
              <svg className="absolute h-8 w-8 fill-copperfield-400 animate-[ping_700ms_ease-in-out_1_1100ms] object-scale-down text-start col-span align-self-end" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m462.88 337.781c0 43.236-35.17 78.351-78.351 78.351h-257.057c-43.181 0-78.352-35.116-78.352-78.351v-163.562c0-14.43 3.951-27.983 10.809-39.615l125.428 125.428c18.765 18.82 43.894 29.19 70.67 29.19 26.721 0 51.85-10.37 70.615-29.19l125.428-125.428c6.859 11.632 10.809 25.184 10.809 39.615v163.562zm-78.352-241.913h-257.056c-17.832 0-34.293 6.035-47.461 16.076l126.69 126.745c13.114 13.058 30.616 20.301 49.326 20.301 18.655 0 36.158-7.243 49.271-20.301l126.69-126.745c-13.167-10.041-29.627-16.076-47.46-16.076zm0-30.232h-257.056c-59.861 0-108.584 48.723-108.584 108.584v163.562c0 59.916 48.723 108.584 108.584 108.584h257.056c59.861 0 108.584-48.668 108.584-108.584v-163.563c0-59.861-48.723-108.583-108.584-108.583z" fillRule="evenodd"/></svg>
              <svg className="h-8 w-8 object-scale-down fill-copperfield-400  text-start col-span align-self-end" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m462.88 337.781c0 43.236-35.17 78.351-78.351 78.351h-257.057c-43.181 0-78.352-35.116-78.352-78.351v-163.562c0-14.43 3.951-27.983 10.809-39.615l125.428 125.428c18.765 18.82 43.894 29.19 70.67 29.19 26.721 0 51.85-10.37 70.615-29.19l125.428-125.428c6.859 11.632 10.809 25.184 10.809 39.615v163.562zm-78.352-241.913h-257.056c-17.832 0-34.293 6.035-47.461 16.076l126.69 126.745c13.114 13.058 30.616 20.301 49.326 20.301 18.655 0 36.158-7.243 49.271-20.301l126.69-126.745c-13.167-10.041-29.627-16.076-47.46-16.076zm0-30.232h-257.056c-59.861 0-108.584 48.723-108.584 108.584v163.562c0 59.916 48.723 108.584 108.584 108.584h257.056c59.861 0 108.584-48.668 108.584-108.584v-163.563c0-59.861-48.723-108.583-108.584-108.583z" fillRule="evenodd"/></svg>
            </a>
            </div>
            <a
              href="mailto:raphael.sinet@novurba.fr"
              className="text-start text-copperfield-400 text-xl select-all align-self-start"
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
                  className="w-7 h-7 fill-copperfield-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
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
                    className="w-7 h-7 fill-copperfield-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
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
              className="text-start text-copperfield-400 text-xl select-all align-self-start"
              target="_blank"
            >
              company/novurba/
            </a>
          </div>
        </div>
      </div>

      <h2 className="relative w-fit mx-auto before:content-[''] before:absolute before:-left-4 before:top-1/2
          before:-translate-y-1/2 before:w-3 before:h-0.5
          before:rounded-full before:bg-copperfield-400
          after:content-[''] after:absolute after:-right-4 after:top-1/2
          after:-translate-y-1/2 after:w-3 after:h-0.5
          after:rounded-full after:bg-copperfield-400 text-xl text-black text-center font-bold uppercase mt-15 mb-6">
        Références professionnelles
      </h2>
      <div className="flex flex-col gap-y-4 items-center w-full px-5 md:max-w-[70%] mx-auto text-xl">
        <p className="text-center">
          Cabinet LUYTON (TOULON) - Planification et urbanisme pré-opérationnel
        </p>
        <hr className="text-copperfield-400 w-[40%] md:hidden" />
        <p className="text-center">ALTEREO (VENELLES) - Planification</p>
        <hr className="text-copperfield-400 w-[40%] md:hidden" />
        <p className="text-center">
          LKSPATIALIST (MONTPELLIER) - Expertise en planification et
          développement de nouvelles technologies liées au domaine de
          l'aménagement
        </p>
        <hr className="text-copperfield-400 w-[40%] md:hidden" />
        <p className="text-center">METROPOLE de MONTPELLIER - Projet urbain</p>
        <hr className="text-copperfield-400 w-[40%] md:hidden" />
        <p className="text-center">
          EPF OCCITANIE (MONTPELLIER) - Projets et stratégie fonciers /
          Négociation
        </p>
      </div>

      <h2 className="relative w-fit mx-auto before:content-[''] before:absolute before:-left-4 before:top-1/2
          before:-translate-y-1/2 before:w-3 before:h-0.5
          before:rounded-full before:bg-black
          after:content-[''] after:absolute after:-right-4 after:top-1/2
          after:-translate-y-1/2 after:w-3 after:h-0.5
          after:rounded-full after:bg-black text-xl text-copperfield-400 text-center font-bold uppercase mt-15 mb-6">
        Études achevées ou en cours
      </h2>
      <div className="flex flex-col gap-y-4 items-center max-w-[70%] mx-auto text-xl">
        <p className="text-center">
          Plans Locaux d’Urbanisme de trois communes gardoises – En cours
        </p>
        <p className="text-center">
          Etude urbaine pour MONTPELLIER MEDITERRANEE METROPOLE – 2024/2026
        </p>
        <p className="text-center">
          Diverses missions réglementaires et SIG en appui de bureaux d'études.
        </p>
        <p className="text-center">
          Plan Local d'Urbanisme de QUISSAC (Gard) - Achevée en 2024
        </p>
      </div>
      <ArrowUp />
    </div>
  );
}
