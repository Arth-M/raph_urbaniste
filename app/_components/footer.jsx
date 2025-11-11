export default function Footer() {
  return (
    <footer className="bg-transparent">
        <div className="mx-auto w-screen p-4 py-6 lg:py-8">
          <div className="px-15">
            <hr className="my-6 border-gray-300 mx-auto dark:border-gray-700 lg:my-8" />
          </div>
            <div className="flex flex-col">
              <ul className="flex flex-row gap-x-8 mx-auto tracking-wide">
                <li>
                  <a href="/entreprise">Contact</a>
                </li>
                <li>
                  <a href="/sitemap">Plan du site</a>
                </li>
              </ul>
              <div className="px-30">
                <hr className="my-4 border-gray-300 mx-auto dark:border-gray-700 lg:my-6" />
              </div>
              <p className="text-xs text-center tracking-wider">Réalisé par <a href="http://www.atuweb.fr" className="text-xs text-center" target="_blank">ATU-Web</a></p>
            </div>
        </div>
    </footer>
  )
}
