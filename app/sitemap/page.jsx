import Image from "next/image";

export default function Realisation() {
  return (
  <div className="w-full my-20">
    <div className="w-2/3 mx-auto">
      <h1 className="text-3xl font-bold">Plan du site</h1>

      <p className="mt-10 font-light">Voici la liste des pages du site Novurba</p>
      <ul className="mt-5 font-light">
        <li>
          <a href="/" className="">Accueil</a>
        </li>
        <li>
          <a href="/notre-expertise">Notre expertise</a>
        </li>
        <li>
          <a href="/nos-realisations">Nos réalisations</a>
        </li>
        <li>
          <a href="/entreprise">Description de l'entreprise</a>
        </li>
        <li>
          <a href="/contact">Contacts de l'entreprise</a>
        </li>
      </ul>
    </div>


  </div>
  );
}
