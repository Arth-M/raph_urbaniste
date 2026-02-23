import Image from "next/image";

export default function Realisation() {
  return (
  <div className="w-full my-20">
    <div className="w-2/3 mx-auto">
      <div className="block">
        <Image
          src="/images/plan.svg"
          alt="Icone de plan"
          width={50}
          height={50}
          loading={lazy}
          className="object-scale-down inline pb-3 mr-3"
        />
       <h1 className="text-3xl font-bold inline">Plan du site</h1>
      </div>

      <p className="mt-10 font-light text-xl">Voici la liste des pages du site Novurba :</p>
      <ul className="mt-5 font-light text-xl">
        <li>
          <Image
            src="/images/punaise.svg"
            alt="Icone d'épingle"
            width={35}
            height={35}
            loading={lazy}
            className="object-scale-down inline pb-3 mr-0"
          />
          <a href="/" className="underline text-blue-600 inline">Accueil</a>
        </li>
        <li>
          <Image
            src="/images/epingle.svg"
            alt="Icone d'épingle"
            width={35}
            height={35}
            loading={lazy}
            className="object-scale-down inline pb-3 mr-0 -rotate{50}
          />
          <a href="/notre-expertise" className="underline text-blue-600 inline">Notre expertise</a>
        </li>
        <li>
          <Image
            src="/images/punaise.svg"
            alt="Icone d'épingle"
            width={35}
            height={35}
            loading={lazy}
            className="object-scale-down inline pb-3 mr-0 rotate-10"
          />
          <a href="/nos-realisations" className="underline text-blue-600 inline">Nos réalisations</a>
        </li>
        <li>
          <Image
            src="/images/epingle.svg"
            alt="Icone d'épingle"
            width={35}
            height={35}
            loading={lazy}
            className="object-scale-down inline pb-3 mr-0 -rotate-40"
          />
          <a href="/entreprise" className="underline text-blue-600 inline">Description de l'entreprise</a>
        </li>
        <li>
          <Image
            src="/images/epingle.svg"
            alt="Icone d'épingle"
            width={35}
            height={35}
            loading={lazy}
            className="object-scale-down inline pb-3 mr-0 -rotate-45"
          />
          <a href="/contact" className="underline text-blue-600 inline">Contacts</a>
        </li>
      </ul>
    </div>


  </div>
  );
}
