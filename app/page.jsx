import Image from 'next/image'

export default function Home() {
  return (
  <div className="mt-50 w-full">
      <h1 className="text-nowrap text-center text-6xl font-bold">L'urbanisme qui se vit</h1>
      <div className="flex w-full justify-start px-40 my-20">
        <div className="flex flex-nowrap w-90 gap-x-4 justify-center align-center items-center">
          <Image
          src={`/images/raph.jpg`}
          alt=""
          width="150"
          height="150"
          loading="lazy"
          priority={false}
          className={`object-scale-down text-start col-span z-10`}
        />
        <p className="text-2xl font-lg">Raphaël Sinet</p>
      </div>

      </div>

  </div>
  )
}
