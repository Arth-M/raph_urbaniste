import Image from "next/image";
import ArrowUp from "./_components/arrowUp.jsx";

export default function Home() {
  return (
    <div className="md:mt-20 mt-15 w-full">
      <div className="not-arrow-up">
        <h1 className="text-center text-6xl font-bold tracking-wide px-5">
          L'urbanisme c'est la vie
        </h1>

        <div className="flex flex-wrap justify-start mx-auto w-fit my-20 px-5 gap-y-5">
          <p className="max-w-150 text-wrap px-5 sm:px-1 sm:my-0 tracking-wide font-light my-auto text-lg">
            NOVURBA, ce n'est pas qu'un bureau d'études qui vous propose de
            simples prestations en urbanisme et aménagement. A travers les
            prestations et compétences sur la planification, le projet urbain et
            la stratégie foncière, NOVURBA c'est aussi et surtout du conseil
            dans une nouvelle façon de voir et concevoir l'urbanisme et
            l'aménagement, avec comme mots d'ordre : résilience, bas carbone,
            sobriété.
          </p>

          <div className="flex flex-nowrap w-90 justify-center align-center items-center">
            <Image
              src={`/images/raph.jpg`}
              alt="Image du fondateur de Novurba, Raphaël Sinet"
              width="150"
              height="150"
              preload="true"
              className="object-scale-down text-start col-span z-10 rounded-full"
            />
            <div className="flex h-full items-end justify-end">
              <p className="text-2xl text-nowrap md:text-2xl font-lg -ml-2">
                Raphaël Sinet
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen md:mt-30 mt-25">
        <div className="md:mr-0 md:ml-auto md:flex grid grid-cols-1 gap-y-6 md:gap-y-0 h-fit">
          <div className="flex flex-col text-justify px-8 lg:pl-30 md:pr-7 lg:w-2/3 my-auto mx-auto">
            <div className="rounded-full border-2 border-copperfield-500 w-36 h-36 py-13 mx-auto mb-3">
              <h2 className="text-center text-2xl font-semibold my-auto">
                Nos valeurs
              </h2>
            </div>
            <p className="tracking-wide font-light text-lg min-w-[45%]">
              NOVURBA est une entreprise avant toute chose proche de la réalité
              de chaque territoire, car nous sommes bien conscient des
              différences entre chaque département, intercommunalité, commune et
              même quartier. Par ailleurs, à l'heure du dérèglement climatique
              qui impacte durablement chaque mètre carré de notre planète, il
              est important de tenir compte des nouvelles données climatiques
              qui s'établissent, des problèmes posés par la raréfaction des
              ressources et de l'impact de l'Homme sur son territoire. NOVURBA
              s'inscrit dans une démarche résiliente et veut apporter une
              réponse intégrant et conciliant les activités humaines et les
              nouveaux enjeux liés au climat et à l'environnement. S'inscrivant
              dans le cadre d'une démarche résiliente et adaptée à chaque
              territoire, NOVURBA répondra pour chacun de vos projets de manière
              personnalisée, contextualisée et territorialisée.
            </p>
          </div>
          <Image
            src="/images/montpellier.jpg"
            alt="Image d'une ville du sud"
            width="669"
            height="446"
            preload="true"
            priority="true"
            className="object-cover h-fit rounded-l-xl w-[90%] md:max-w-[40%] md:min-h-[700px] lg:min-h-[520px] justify-self-end"
            // className="object-cover w-25 h-fit rounded-full bg-copperfield-400"
          />
        </div>
      </div>

      <div className="w-screen mt-20 bg-[url(/images/herault.jpg)] md:bg-fixed h-120 bg-size-[230%_auto] md:bg-size-[100%_auto] bg-center bg-origin-border bg-no-repeat"></div>

      <div className="container mt-15 p-5 mx-auto">
        {/* Ils nous font confiance part */}
        {/* 1 design pattern for large screens (>md) */}
        <div className="md:flex md:flex-col hidden mt-15">
          <div className="flex mx-auto gap-x-10 items-center">
            <Image
              src={`/images/essence_urbanisme.jpeg`}
              alt=""
              width="200"
              height="200"
              loading="lazy"
              className="w-[200px] h-[200px] lg:my-0 my-6"
            />
            <h2 className="text-center text-2xl md:text-3xl font-md">
              Ils font confiance à Novurba
            </h2>
            <Image
              src={`/images/Montpellier_Méditerranée_Métropole.png`}
              alt=""
              width="500"
              height="500"
              loading="lazy"
              className="w-[180px] h-[180px] lg:my-0 mt-6"
            />
          </div>
          <div className="flex mx-auto gap-x-35 items-center">
            <Image
              src={`/images/Atelier_Chibaudel.png`}
              alt=""
              width="500"
              height="153"
              loading="lazy"
              className="w-[200px] h-[60px] lg:my-0 my-6"
            />
            <Image
              src={`/images/naturae_groupelamo.jpeg`}
              alt=""
              width="200"
              height="200"
              loading="lazy"
              className="w-[200px] h-[200px] lg:my-0 my-0"
            />
          </div>
        </div>

        {/* Ils nous font confiance : 1 design pattern for small screens (<md) */}
        <div className="md:hidden">
          <h2 className="text-center text-2xl md:text-3xl font-md">
            Ils font confiance à Novurba
          </h2>
          <div className="w-full flex flex-wrap items-center gap-x-30 gap-y-5 justify-center mt-5">
            <Image
              src={`/images/Atelier_Chibaudel.png`}
              alt=""
              width="500"
              height="153"
              loading="lazy"
              className="w-[250px] h-[76px] lg:my-0 my-6"
            />
            <Image
              src={`/images/essence_urbanisme.jpeg`}
              alt=""
              width="200"
              height="200"
              loading="lazy"
              className="w-[200px] h-[200px] lg:my-0 my-6"
            />
            <Image
              src={`/images/Montpellier_Méditerranée_Métropole.png`}
              alt=""
              width="500"
              height="500"
              loading="lazy"
              className="w-[180px] h-[180px] lg:my-0 mt-6"
            />
            <Image
              src={`/images/naturae_groupelamo.jpeg`}
              alt=""
              width="200"
              height="200"
              loading="lazy"
              className="w-[200px] h-[200px] lg:my-0 my-0"
            />
          </div>
        </div>
      </div>
      <ArrowUp />
    </div>
  );
}
