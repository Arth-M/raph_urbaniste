import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-50 w-full">
      <h1 className="text-nowrap text-center text-6xl font-bold">
        L'urbanisme qui se vit
      </h1>
      <div className="flex w-full justify-start px-40 my-20">
        <div className="flex flex-nowrap w-90 gap-x-4 justify-center align-center items-center">
          <Image
            src={`/images/raph.jpg`}
            alt=""
            width="150"
            height="150"
            preload="true"
            className={`object-scale-down text-start col-span z-10`}
          />
          <p className="text-2xl font-lg">Raphaël Sinet</p>
        </div>
      </div>
      <div className="container mt-35 p-5 mx-auto">
        <h2 className="text-center text-4xl font-md">Ils font confiance à Novurba </h2>
        <div className="w-full flex flex-wrap items-center gap-x-30 justify-center mt-5">
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
