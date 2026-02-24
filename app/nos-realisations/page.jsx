import Image from "next/image";
import ArrowUp from "../_components/arrowUp.jsx";

export default function Realisation() {
  return (
    <div className="mt-15 w-full">
      {/* <h1 className="text-center text-3xl font-semibold">Nos réalisations</h1> */}
      <div className="relative flex justify-around px-4 w-full md:w-1/2 mx-auto mt-10 gap-x-2 ">
      <Image
        src={`/images/reseauOk.png`}
        alt="Image de réseau"
        width={1536}
        height={1024}
        preload={true}
        className="absolute w-[80%] sm:w-[70%] md:w-[80%] object-cover -top-7 sm:-top-9 md:-top-7 lg:-top-9 opacity-80 -z-10 rotate-180"
        style={{
          maskImage: "linear-gradient(to top, black 27%, transparent 67%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 27%, transparent 67%)",
        }}
      />
        <a
          href="#plu"
          className="text-xl z-50  bg-copperfield-400 text-copperfield-50 tracking-wider sm:tracking-widest border-copperfield-400 rounded-sm px-4 py-1 hover:bg-copperfield-400 hover:-translate-y-0.5 hover:scale-102 ease-in-out duration-200"
        >
          PLU
        </a>
        <a
          href="#strat-fonciere"
          className="text-xl z-50 bg-copperfield-400 text-copperfield-50 tracking-wider sm:tracking-widest border-copperfield-400 rounded-sm px-4 py-1 hover:bg-copperfield-400 hover:-translate-y-0.5 hover:scale-102 ease-in-out duration-200"
        >
          Stratégie foncière
        </a>
        <a
          href="#sig"
          className="text-xl z-50 bg-copperfield-400 text-copperfield-50 tracking-wider sm:tracking-widest border-copperfield-400 rounded-sm px-4 py-1 hover:bg-copperfield-400 hover:-translate-y-0.5 hover:scale-102 ease-in-out duration-200"
        >
          SIG
        </a>
      </div>
      <div className="flex flex-col md:gap-y-20 mt-20 relative ">

        <section id="plu" className="md:scroll-mt-15 scroll-mt-18 mb-15 md:mb-0 mt-15 md:mt-0">
          <div className="flex flex-wrap w-full justify-between">
            <div className="flex flex-col md:w-[50%] mr-2 ml-auto min-w-[360px] px-5">
            <h1 className="text-xl md:text-end font-semibold">PLU</h1>

             <p className="text-justify font-light">
              Doté d’une expérience solide et continue en matière de <span className="font-semibold">plans locaux d’urbanisme</span>,
              j’ai pu faire mes armes en bureau d’études ou j’ai participé à l’élaboration de <span className="font-semibold">dix PLU</span>,
              en intervenant sur les différentes phases réglementaires et opérationnelles.
              J’ai ensuite occupé un poste d’<span className="font-semibold">analyste de PLU</span> dans le cadre du développement
              d’une application dédiée aux promoteurs immobiliers, ce qui m’a permis d’acquérir
              une lecture fine, comparative et stratégique des documents d’urbanisme.
              Actuellement, au travers de mon activité libérale, je participe <span className="font-semibold">activement à
              la réalisation de trois PLU</span> et un quatrième a été récemment finalisé, consolidant une
              approche à la fois technique et réglementaire.

            </p>
            </div>
              <Image
                src={`/images/PLU.png`}
                alt="Image du fondateur de Novurba, Raphaël Sinet"
                width={1240}
                height={514}
                preload={true}
                className="object-scale-down w-[40%] h-fit hidden md:flex"
              />
          </div>
        </section>
        <Image
          src={`/images/strat-fonc-realisations.png`}
          alt=""
          width={1240}
          height={514}
          preload={true}
          className="object-scale-down w-full ml-0 mr-auto h-fit md:hidden"
        />
        <section id="strat-fonciere" className="md:scroll-mt-15 scroll-mt-18 bg-copperfield-100/70 text-copperfield-950 md:bg-white py-15 md:py-0">
          <div className="flex flex-wrap w-full justify-between">

            <Image
                src={`/images/strat-fonc-realisations.png`}
                alt=""
                width={1240}
                height={514}
                preload={true}
                className="object-scale-down w-[40%] h-fit hidden md:flex"
              />
              <div className="flex flex-col md:w-[50%] ml-2 mr-auto min-w-[360px] px-5">
            <h1 className="text-xl font-semibold">Stratégie foncière</h1>
             <p className="text-justify font-light">
              Mon expérience en <span className="font-semibold">stratégie foncière</span> s’est construite au sein d’acteurs
              publics majeurs de l’aménagement. À <span className="font-semibold">Montpellier Méditerranée Métropole</span>,
              j’ai participé aux processus de réalisation de plusieurs <span className="font-semibold">ZAC</span> à l’échelle métropolitaine,
              en lien étroit avec les enjeux de programmation, de maîtrise foncière et de phasage
              opérationnel. J’ai ensuite exercé au sein de <span className="font-semibold">EPF Occitanie</span>, où j’accompagnais
              directement les communes : compréhension et formalisation de leur projet, traduction
              cartographique des intentions, rédaction des conventions foncières, puis gestion
              complète des phases d’<span className="font-semibold">acquisition, de portage et de revente des terrains</span>,
              dans une logique d’anticipation et de sécurisation d’opérations urbaines à court, moyen ou long terme.

            </p>
            </div>
          </div>
        </section>
        <Image
          src={`/images/sig.png`}
          alt=""
          width={1240}
          height={514}
          preload={true}
          className="object-scale-down w-full h-fit mr-0 ml-auto md:hidden mb-15"
        />
        <section id="sig" className="md:scroll-mt-15 scroll-mt-18">
          <div className="flex flex-wrap ] w-full justify-between mb-20">
            <div className="flex flex-col md:w-[50%] mr-2 ml-auto min-w-[360px] px-5">
            <h1 className="text-xl md:text-end font-semibold">SIG</h1>
             <p className="text-justify font-light">
              Mon expérience en <span className="font-semibold">SIG</span> s’inscrit comme un socle transversal de l’ensemble de
              mes missions, en particulier dans le champ des <span className="font-semibold">documents d’urbanisme</span>, où
              ’analyse spatiale et la production cartographique sont centrales.
              Au-delà de ces cadres réglementaires, j’ai également réalisé des <span className="font-semibold">cartographies
              dédiées</span> dans le cadre d’études spécifiques, notamment <span className="font-semibold">patrimoniales et
              hydrauliques</span>, nécessitant rigueur méthodologique et précision technique.
              Pratiquant le <span className="font-semibold">SIG depuis plus de dix ans</span>, j’ai développé une <span className="font-semibold">forte expertise
              technique</span>, tant en structuration de données qu’en analyse spatiale et
              en restitution cartographique, me permettant d’adapter les outils et les
              méthodes aux enjeux opérationnels et stratégiques des projets.

            </p>
            </div>
            <Image
                src={`/images/sig.png`}
                alt=""
                width={1240}
                height={514}
                preload={true}
                className="object-scale-down w-[40%] h-fit hidden md:flex"
              />
          </div>

        </section>
      </div>
      <ArrowUp />
    </div>
  );
}
