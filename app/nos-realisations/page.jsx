import Image from "next/image";
import ArrowUp from "../_components/arrowUp.jsx";

export default function Realisation() {
  return (
    <div className="mt-15 w-full">
      <h1 className="text-center text-3xl font-semibold">Nos réalisations</h1>
      <div className="flex justify-around w-4/5 md:w-1/2 mx-auto mt-10 gap-x-2 ">
        <a
          href="#plu"
          className="text-xl border border-copperfield-300/40 rounded px-4 py-1 hover:bg-copperfield-300/40"
        >
          PLU
        </a>
        <a
          href="#plans-urbains"
          className="text-xl border border-copperfield-300/40 rounded px-4 py-1 hover:bg-copperfield-300/40"
        >
          Plans urbains
        </a>
        <a
          href="#sig"
          className="text-xl border border-copperfield-300/40 rounded px-4 py-1 hover:bg-copperfield-300/40"
        >
          SIG
        </a>
      </div>
      <div className="flex flex-col gap-y-20 mt-20">
        <section id="plu" className="md:scroll-mt-15 scroll-mt-18">
          <div className="flex flex-wrap w-full justify-between">
            <div className="flex flex-col md:w-[50%] mr-2 ml-auto min-w-[360px] px-5">
            <h1 className="text-xl text-end font-semibold">PLU</h1>

             <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
              <Image
                src={`/images/PLU.png`}
                alt="Image du fondateur de Novurba, Raphaël Sinet"
                width="1240"
                height="514"
                preload="true"
                className="object-scale-down w-[40%] h-fit hidden md:flex"
              />
          </div>
        </section>
        <section id="plans-urbains" className="md:scroll-mt-15 scroll-mt-18">
          <div className="flex flex-wrap w-full justify-between">

            <Image
                src={`/images/PLU.png`}
                alt="Image du fondateur de Novurba, Raphaël Sinet"
                width="1240"
                height="514"
                preload="true"
                className="object-scale-down w-[40%] h-fit hidden md:flex"
              />
              <div className="flex flex-col md:w-[50%] ml-2 mr-auto min-w-[360px] px-5">
            <h1 className="text-xl font-semibold">Plans urbains</h1>
             <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
          </div>
        </section>
        <section id="sig" className="md:scroll-mt-15 scroll-mt-18">
          <div className="flex flex-wrap ] w-full justify-between mb-20">
            <div className="flex flex-col md:w-[50%] mr-2 ml-auto min-w-[360px] px-5">
            <h1 className="text-xl text-end font-semibold">SIG</h1>
             <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
            <Image
                src={`/images/PLU.png`}
                alt="Image du fondateur de Novurba, Raphaël Sinet"
                width="1240"
                height="514"
                preload="true"
                className="object-scale-down w-[40%] h-fit hidden md:flex"
              />
          </div>

        </section>
      </div>
      <ArrowUp />
    </div>
  );
}
