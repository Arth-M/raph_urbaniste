import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-50 w-full">
      <h1 className="text-center text-6xl font-bold">L'urbanisme qui se vit</h1>

      <div className="flex flex-wrap justify-start mx-auto w-fit my-20">
        <p className="max-w-150 text-wrap px-5 sm:px-1 my-5 sm:my-0">
          NOVURBA, ce n'est pas qu'un bureau d'études qui vous propose de
          simples prestations en urbanisme et aménagement. A travers les
          prestations et compétences sur la planification, le projet urbain et
          la stratégie foncière, NOVURBA c'est aussi et surtout du conseil dans
          une nouvelle façon de voir et concevoir l'urbanisme et l'aménagement,
          avec comme mots d'ordre : résilience, bas carbone, sobriété.
        </p>

        <div className="flex flex-nowrap w-90 justify-center align-center items-center">
          <Image
            src={`/images/raph.jpg`}
            alt=""
            width="150"
            height="150"
            preload="true"
            className={`object-scale-down text-start col-span z-10 rounded-full`}
          />
          <div className="flex h-full items-end justify-end">
            <p className="text-2xl text-nowrap md:text-2xl font-lg -ml-2">
              Raphaël Sinet
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen mt-30">
        <div className="flex mr-0 ml-auto ">
          <div className="flex text-justify flex-col md:pl-30 md:pr-7 w-2/3 my-auto mx-auto">
            <div className="rounded-full border-2 border-copperfield-500 w-25 p-4 h-25 mx-auto">
              <h2 className="text-center text-xl font-semibold mb-5">Nos valeurs</h2>
            </div>
            <p>
              NOVURBA est une entreprise avant toute chose proche de la réalité de
              chaque territoire, car nous sommes bien conscient des différences
              entre chaque département, intercommunalité, commune et même
              quartier. Par ailleurs, à l'heure du dérèglement climatique qui
              impacte durablement chaque mètre carré de notre planète, il est
              important de tenir compte des nouvelles données climatiques qui
              s'établissent, des problèmes posés par la raréfaction des ressources
              et de l'impact de l'Homme sur son territoire. NOVURBA s'inscrit dans
              une démarche résiliente et veut apporter une réponse intégrant et
              conciliant les activités humaines et les nouveaux enjeux liés au
              climat et à l'environnement. S'inscrivant dans le cadre d'une
              démarche résiliente et adaptée à chaque territoire, NOVURBA répondra
              pour chacun de vos projets de manière personnalisée, contextualisée
              et territorialisée.
            </p>
          </div>
          <Image
            src="/images/montpellier.jpg"
            alt="Logo de Novurba"
            width="669"
            height="446"
            preload="true"
            priority="true"
            className="object-cover h-fit rounded-l-xl"
            // className="object-cover w-25 h-fit rounded-full bg-copperfield-400"
          />
        </div>
      </div>

      <div className="container mt-20 p-5 mx-auto">
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
            className="w-[250px] h-[76px]"
          />
          <Image
            src={`/images/essence_urbanisme.jpeg`}
            alt=""
            width="200"
            height="200"
            loading="lazy"
            className="w-[200px] h-[200px]"
          />
          <Image
            src={`/images/Montpellier_Méditerranée_Métropole.png`}
            alt=""
            width="500"
            height="500"
            loading="lazy"
            className="w-[180px] h-[180px]"
          />
          <Image
            src={`/images/naturae_groupelamo.jpeg`}
            alt=""
            width="200"
            height="200"
            loading="lazy"
            className="w-[200px] h-[200px]"
          />
        </div>
      </div>
    </div>
  );
}
