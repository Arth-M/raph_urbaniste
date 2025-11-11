export default function Footer() {
  return (
    <footer className="bg-transparent dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                  <a href="https://numdiag.fr/" className="flex items-center">
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NumDiag</span>
                  </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div>
                      <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">Liens utiles</h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                          <li className="mb-4">
                            hey
                          </li>
                          <li>
                            hey2
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white invisible">Follow us</h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                          <li className="mb-4">
                          coucou
                          </li>
                          <li>
                            coucou2
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="mx-auto w-full max-w-screen-xl px-5 sm:px-15 py-1 lg:py-2">
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 text-center dark:text-gray-400">2025 <a href="https://numdiag.fr/" className="hover:underline">Numdiag <i className="fa-regular fa-registered"></i></a>. Tous droits réservés.
                </span>
                <div className="flex my-auto sm:justify-center sm:mt-0">
                    <a href="https://fr.linkedin.com/company/numdiag?trk=public_post_follow-view-profile" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2 21h6V9H2v12ZM8.5 21h5.5v-6.6c0-1.5.3-2.9 2-2.9 1.7 0 1.7 1.4 1.7 2.8V21H24v-7.1c0-4-2.1-5.9-5-5.9-2.3 0-3.3 1.3-3.8 2.2h.1V9H8.5c.1 1.2 0 12 0 12Z" clipRule="evenodd"/>
                          </svg>
                        <span className="sr-only">LinkedIn profile</span>
                    </a>
                </div>
            </div>
          </div>
        </div>
    </footer>
  )
}
