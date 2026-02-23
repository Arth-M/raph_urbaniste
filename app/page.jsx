import Image from "next/image";
import ArrowUp from "./_components/arrowUp.jsx";

export default function Home() {
  return (
    <div className="md:mt-15 mt-15 w-full">
      <div className="not-arrow-up">
        <div className="w-fit relative mx-auto z-10">
          <Image
            src={`/images/reseauOk.png`}
            alt="Image de réseau"
            width={1536}
            height={1024}
            preload={true}
            className="absolute w-full object-cover top-25 opacity-20 md:opacity-80 md:top-10 sm:left-3 -z-10"
            style={{
              maskImage: "linear-gradient(to top, black 50%, transparent 90%)",
              WebkitMaskImage:
                "linear-gradient(to top, black 30%, transparent 100%)",
            }}
          />
          <h1 className="z-10 w-fit text-center mx-auto text-6xl font-bold tracking-wide px-5">
            L'urbanisme par le{" "}
            <span className="text-copperfield-500 z-10">terrain</span>
          </h1>
        </div>

        <div className="flex flex-wrap justify-center mx-auto w-fit mb-20 mt-25 sm:mt-38 px-5 gap-y-5">
          <span className="max-w-150 text-wrap px-5 sm:px-1 sm:my-0 tracking-wide font-light my-auto text-xl">
            <span className="font-normal text-copperfield-500/90">NOVURBA</span>
            , ce n'est pas qu'un bureau d'études qui vous propose de simples
            prestations en urbanisme et aménagement. A travers les prestations
            et compétences sur la{" "}
            <span className="font-normal">planification</span>, le{" "}
            <span className="font-normal">projet urbain</span> et la{" "}
            <span className="font-normal">stratégie foncière</span>, NOVURBA
            c'est aussi et surtout du conseil dans une nouvelle façon de voir et
            concevoir l'urbanisme et l'aménagement, avec comme mots d'ordre{" "}
            <span>: </span>
            <div className="inline-flex items-center gap-2 text-xl font-normal">
              <span className="text-copperfield-500/90"> résilience</span>
              <div className="w-2 h-2 rounded-full bg-black flex-shrink-0 mt-1"></div>
              <span className="text-copperfield-500/90">bas carbone</span>
              <div className="w-2 h-2 rounded-full bg-black flex-shrink-0 mt-1"></div>
              <span className="text-copperfield-500/90">sobriété</span>
            </div>
          </span>

          <div className="flex flex-nowrap w-90 justify-center align-center items-center">
            <Image
              src={`/images/raph.jpg`}
              alt="Image du fondateur de Novurba, Raphaël Sinet"
              width={150}
              height={150}
              preload={true}
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

      <div className="w-full md:mt-30 mt-25">
        <div className="md:mr-0 md:ml-auto md:flex grid grid-cols-1 gap-y-6 md:gap-y-0 h-fit">
          <div className="flex flex-col text-justify px-8 lg:pl-30 md:pr-7 lg:w-2/3 my-auto mx-auto">
            <div className="rounded-full border-2 border-copperfield-400 w-36 h-36 py-13 mx-auto mb-3">
              <h2 className="text-center text-2xl font-semibold my-auto">
                Nos <span className="text-copperfield-500/90">valeurs</span>
              </h2>
            </div>
            <p className="tracking-wide font-light text-xl w-[90%] md:w-[50%] min-w-[310px]">
              <span className="font-normal">NOVURBA</span> est une entreprise
              avant toute chose proche de la réalité de chaque territoire, car
              nous sommes bien conscient des différences entre chaque
              département, intercommunalité, commune et même quartier. Par
              ailleurs, à l'heure du dérèglement climatique qui impacte
              durablement chaque mètre carré de notre planète, il est important
              de tenir compte des nouvelles données climatiques qui
              s'établissent, des problèmes posés par la raréfaction des
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
            width={669}
            height={446}
            preload={true}
            className="object-cover h-fit rounded-l-xl w-[85%] min-w-[300px] md:max-w-[40%] md:min-h-[700px] lg:min-h-[520px] justify-self-end"
            // className="object-cover w-25 h-fit rounded-full bg-copperfield-400"
          />
        </div>
      </div>

      <div className="hidden md:block w-screen sm:mt-20 bg-[url(/images/fond2.png)] md:bg-fixed h-120 bg-size-[100%_auto] lg:bg-size-[170%_auto] md:bg-size-[180%_auto] md:bg-left bg-center bg-origin-border bg-no-repeat"></div>

      <div className="container sm:mt-15 p-5 mx-auto">
        {/* Ils nous font confiance part */}
        {/* 1 design pattern for large screens (>md) */}
        <div className="md:flex md:flex-col hidden mt-15">
          <div className="flex mx-auto gap-x-10 items-center">
            <Image
              src={`/images/essence_urbanisme.jpeg`}
              alt="image d'un sponsor"
              width="200"
              height="200"
              loading="lazy"
              className="w-[200px] h-[200px] lg:my-0 my-6"
            />
            <h2 className="text-center text-3xl md:text-4xl font-md tracking-wide">
              Ils font confiance à{" "}
              <span className="text-copperfield-500/90 font-bold ">Novurba</span>
            </h2>
            <Image
              src={`/images/Montpellier_Méditerranée_Métropole.png`}
              alt="image d'un sponsor"
              width="500"
              height="500"
              loading="lazy"
              className="w-[180px] h-[180px] lg:my-0 mt-6"
            />
          </div>
          <div className="flex mx-auto gap-x-35 items-center">
            <Image
              src={`/images/Atelier_Chibaudel.png`}
              alt="image d'un sponsor"
              width="500"
              height="153"
              loading="lazy"
              className="w-[200px] h-[60px] lg:my-0 my-6"
            />
            <Image
              src={`/images/naturae_groupelamo.jpeg`}
              alt="image d'un sponsor"
              width="200"
              height="200"
              loading="lazy"
              className="w-[200px] h-[200px] lg:my-0 my-0"
            />
          </div>
        </div>

        {/* Ils nous font confiance : 1 design pattern for small screens (<md) */}
        <div className="md:hidden">
          <h2 className="text-center text-4xl md:text-4xl font-md tracking-wide">
            Ils font confiance à{" "}
            <span className="text-copperfield-500/90 font-bold">Novurba</span>
          </h2>
          <div className="w-full flex flex-wrap items-center gap-x-30 gap-y-5 justify-center mt-5">
            <Image
              src={`/images/Atelier_Chibaudel.png`}
              alt="image d'un sponsor"
              width="500"
              height="153"
              loading="lazy"
              className="w-[250px] h-[76px] lg:my-0 my-6"
            />
            <Image
              src={`/images/essence_urbanisme.jpeg`}
              alt="image d'un sponsor"
              width="200"
              height="200"
              loading="lazy"
              className="w-[200px] h-[200px] lg:my-0 my-6"
            />
            <Image
              src={`/images/Montpellier_Méditerranée_Métropole.png`}
              alt="image d'un sponsor"
              width="500"
              height="500"
              loading="lazy"
              className="w-[180px] h-[180px] lg:my-0 mt-6"
            />
            <Image
              src={`/images/naturae_groupelamo.jpeg`}
              alt="image d'un sponsor"
              width="200"
              height="200"
              loading="lazy"
              className="w-[200px] h-[200px] lg:my-0 my-0"
            />
          </div>
        </div>
      </div>
      <div className="z-90 md:hidden block w-screen sm:mt-20 -mb-22 bg-[url(/images/fond2.png)] md:bg-fixed h-120 bg-size-[100%_auto] lg:bg-size-[170%_auto] md:bg-size-[180%_auto] md:bg-left bg-center bg-origin-border bg-no-repeat"></div>

      <ArrowUp />
    </div>
  );
}
