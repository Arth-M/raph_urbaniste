import Link from "next/link";

export const metadata = {
  title: "Page introuvable - Novurba",
};

export default function NotFound() {
  return (
    <div className="mt-15 md:mt-20 mb-20 w-full px-5 flex flex-col items-center text-center">
      {/* Panneau de déviation (balisage temporaire de chantier) */}
      <svg
        viewBox="0 0 240 205"
        className="w-56 md:w-72 h-auto mb-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* poteau */}
        <rect x="112" y="140" width="16" height="60" rx="2" fill="#9ca3af" />
        {/* panneau jaune */}
        <rect x="10" y="20" width="220" height="125" rx="10" fill="#facc15" stroke="#1f2937" strokeWidth="5" />
        <text
          x="120"
          y="66"
          textAnchor="middle"
          fontFamily="var(--font-barlow-condensed), sans-serif"
          fontWeight="700"
          fontSize="34"
          letterSpacing="3"
          fill="#1f2937"
        >
          DÉVIATION
        </text>
        {/* flèche */}
        <path d="M45 102 h125 v-14 l30 20 l-30 20 v-14 h-125 z" fill="#1f2937" />
      </svg>

      <p className="text-6xl font-bold text-copperfield-400 tracking-wider">404</p>
      <h1 className="text-3xl font-bold tracking-wide mt-2 mb-5">
        Cette parcelle n'est pas constructible
      </h1>
      <p className="font-secondary font-light text-xl max-w-xl mb-8">
        La page que vous cherchez ne figure pas au plan local d'urbanisme du
        site. Elle a peut-être été déplacée, démolie, ou n'a jamais obtenu son
        permis de construire. Pas d'inquiétude, on vous a prévu une déviation.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 border border-seagull-500 bg-seagull-500 text-white text-xl hover:-translate-y-0.5 hover:scale-105 hover:shadow hover:bg-seagull-400 hover:border-seagull-400 ease-in-out duration-100"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
