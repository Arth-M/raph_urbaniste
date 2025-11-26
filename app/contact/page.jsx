import Image from "next/image";
import ArrowUp from "../_components/arrowUp.jsx";

export default function Contact() {
  return (
    <div className="mt-30 w-full">
        <div className="flex items-center flex-wrap mb-30">
        <div className="md:max-w-[50%] md:w-[50%] mb-8 mx-auto">
          <h1 className="text-3xl text-center font-bold mb-8">
            Comment nous contacter ?
          </h1>
          {/* téléphone */}
          {/* <div className="flex flex-nowrap gap-x-4 my-2 mx-auto"> */}
          <div className="grid grid-cols-[1fr_3fr] w-[80%] mx-auto md:w-[40%] gap-x-3 gap-y-5">
            <div className="flex gap-x-2 justify-end">
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


            <div className="flex gap-x-2 justify-end">
              <Image
                src="/images/mail.svg"
                alt="Icone de téléphone pour indiquer le numéro de téléphone"
                width="30"
                height="30"
                loading='lazy'
                className="object-scale-down text-start col-span align-self-end"
              />
            </div>
           <a href="mailto:raphael.sinet@novurba.fr" className="text-start text-lg select-all align-self-start">raphael.sinet@novurba.fr</a>

          <div className="flex gap-x-2 justify-end relative">
            <a href="https://www.linkedin.com/company/novurba/" className="flex items-center" target="_blank" rel="noopener noreferrer" title="Voir le profil LinkedIn de Raphaël Sinet">
            <svg className="w-7 h-7 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2 21h6V9H2v12ZM8.5 21h5.5v-6.6c0-1.5.3-2.9 2-2.9 1.7 0 1.7 1.4 1.7 2.8V21H24v-7.1c0-4-2.1-5.9-5-5.9-2.3 0-3.3 1.3-3.8 2.2h.1V9H8.5c.1 1.2 0 12 0 12Z" clipRule="evenodd"/>
            </svg>
            <span className="sr-only">LinkedIn profile</span>
            </a>
          </div>
           <a href="https://www.linkedin.com/company/novurba/" target="_blank" className="text-start text-lg select-all align-self-start">company/novurba/</a>
          </div>
        </div>

        <Image
            src={`/images/village_photo.jpg`}
            alt="Photographie d'un village du sud de la France"
            width="4896"
            height="2760"
            preload="true"
            className="object-scale-down mr-0 ml-auto w-[100%] md:mx-auto md:w-[50%] h-fit mt-10 md:mt-0"
          />
        </div>
        <ArrowUp />
      </div>

  );
}
